import { uiService } from '../../core/ui.service.js';
import { courseService } from '../../core/course.service.js';
import { progressService } from '../../core/progress.service.js';

export class StudentModal {
    constructor() {
        this.updateData();
    }

    updateData() {
        this.user = JSON.parse(localStorage.getItem('omnitech_perfil')) || null;
        this.enrolledIds = JSON.parse(localStorage.getItem('omnitech_enrolled')) || [];
    }

    async show() {
        this.updateData();
        const template = await uiService.fetchTemplate('./assets/scripts/modules/student-modal/student-modal.html');
        uiService.openModal(template);
        
        const drawer = document.getElementById('student-drawer-container');
        const overlay = document.getElementById('modal-overlay');

        setTimeout(() => drawer?.classList.add('open'), 10);

        if (overlay) {
            overlay.onclick = (e) => { if (e.target === overlay) this.close(); };
        }

        this.init();
    }

    init() {

        this.renderUserData();
        

        setTimeout(() => this.renderProgress(), 100);

   
        const closeBtn = document.getElementById('close-student-modal');
        if (closeBtn) {
            closeBtn.onclick = (e) => {
                e.preventDefault();
                this.close();
            };
        }
        

        const bgBtn = document.getElementById('st-change-bg-btn');
        if (bgBtn) {
            bgBtn.onclick = async (e) => {
                e.preventDefault();
                try {

                    if (document.getElementById('student-panel-edit-container')) return;


                    const { StudentPanelEdit } = await import('../studentPanel-edit/studentPanel-edit.js');
                    
                    const panelEdit = new StudentPanelEdit(this.user, (newStyle) => {
                        this._saveHeaderStyle(newStyle); 
                    });


                    const html = await uiService.fetchTemplate('./assets/scripts/modules/studentPanel-edit/studentPanel-edit.html');
                    

                    const wrapper = document.createElement('div');
                    wrapper.id = 'student-panel-edit-container';
                    wrapper.innerHTML = html;
                    document.body.appendChild(wrapper);


                    panelEdit.init();
                    
                } catch (error) {
                    console.error("Error al cargar el componente StudentPanelEdit:", error);
                    uiService.showToast("No se pudo abrir el panel de personalización", "error");
                }
            };
        }

        const editBtn = document.getElementById('st-edit-btn');
        if (editBtn) {
            editBtn.onclick = async () => {
                this.close();
                setTimeout(async () => {
                    const { PerfilModal } = await import('../perfil-modal/perfil-modal.js');
                    const modal = new PerfilModal();
                    uiService.openModal(await modal.render());
                    modal.init();
                }, 400); 
            };
        }


        const logoutBtn = document.getElementById('st-logout-btn');
        if (logoutBtn) {
            logoutBtn.onclick = () => {
                if (confirm(`¿Seguro que deseas cerrar sesión en OmniTech?`)) {
                    localStorage.removeItem('omnitech_perfil');
                    localStorage.removeItem('omnitech_enrolled');
                    location.reload(); 
                }
            };
        }

        uiService.refreshIcons();
    }

    _openColorPicker() {
        const picker = document.createElement('input');
        picker.type = 'color';
        picker.value = this.user.headerBgColor || '#2563eb';
        picker.oninput = (e) => this._applyHeaderStyle({ color: e.target.value });
        picker.onchange = (e) => this._saveHeaderStyle({ color: e.target.value });
        picker.click();
    }

    _applyHeaderStyle(style) {
        const header = document.getElementById('student-header-bg');
        if (!header) return;
        if (style.image) {
            header.style.backgroundImage = `url(${style.image})`;
        } else {
            header.style.backgroundImage = 'none';
            header.style.backgroundColor = style.color;
        }
    }


    _saveHeaderStyle(style) {
        this._applyHeaderStyle(style);

        if (style.persist) {
            this.user.headerBgImage = style.image || null;
            this.user.headerBgColor = style.color || null;
            
            localStorage.setItem('omnitech_perfil', JSON.stringify(this.user));
            
            uiService.showToast("Fondo de perfil actualizado", "success");
        }
    }

    _applyHeaderStyle(style) {
        const header = document.getElementById('student-header-bg');
        if (!header) return;

        if (style.image) {

            header.style.backgroundColor = 'transparent'; 
            header.style.backgroundImage = `url(${style.image})`;
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
        } else if (style.color) {

            header.style.backgroundImage = 'none';
            header.style.backgroundColor = style.color;
        }
    }

    renderUserData() {
        if (!this.user) return;
        const nameEl = document.getElementById('st-name');
        const locEl = document.getElementById('st-location');
        const imgEl = document.getElementById('st-avatar-img');
        const fallbackEl = document.getElementById('st-avatar-fallback');

        if (nameEl) nameEl.innerText = `${this.user.nombres} ${this.user.apellidoPaterno}`;
        if (locEl) locEl.innerHTML = `<i data-lucide="map-pin"></i> ${this.user.ciudad}, ${this.user.pais}`;
        

        if (this.user.headerBgImage) {
            this._applyHeaderStyle({ image: this.user.headerBgImage });
        } else if (this.user.headerBgColor) {
            this._applyHeaderStyle({ color: this.user.headerBgColor });
        }

        if (this.user.foto && imgEl) {
            imgEl.src = this.user.foto;
            imgEl.style.display = "block";
            imgEl.classList.remove('hidden');
            if (fallbackEl) fallbackEl.classList.add('hidden');
        }
    }

    renderProgress() {
        const listContainer = document.getElementById('student-progress-list');
        if (!listContainer) return;

        const allCourses = courseService.getAllCourses();
        const enrolledStrings = this.enrolledIds.map(String);
        const myCourses = allCourses.filter(c => enrolledStrings.includes(String(c.id)));
        const rawProgress = progressService._getRawProgress();

        const finished = [];
        const active = [];

        myCourses.forEach(course => {
            let totalL = 0;
            if (course.modules) course.modules.forEach(m => totalL += (m.lessons?.length || 0));
            const percent = progressService.getCoursePercentage(course.id, totalL);
            
            if (percent === 100) {
                const grades = Object.values(rawProgress[course.id]?.grades || {});
                const avg = grades.length > 0 ? (grades.reduce((a, b) => a + b, 0) / grades.length) : 0;
                finished.push({ ...course, avg });
            } else {
                active.push({ ...course, percent });
            }
        });

        finished.sort((a, b) => b.avg - a.avg);

        let html = '';

        if (finished.length > 0) {
            html += `<p class="drawer-section-title">🏆 Logros Obtenidos</p>`;
            finished.forEach(course => {
                let glowClass = '';
                let medalClass = '';

                if (course.avg >= 95) { glowClass = 'glow-gold'; medalClass = 'medal-gold'; }
                else if (course.avg >= 86) { glowClass = 'glow-silver'; medalClass = 'medal-silver'; }
                else if (course.avg >= 76) { glowClass = 'glow-bronze'; medalClass = 'medal-bronze'; }

                html += `
                    <div class="course-card-finished ${glowClass} achievement-trigger" data-course-id="${course.id}">
                        <span class="course-emoji ${medalClass}">🏆</span>
                        <div class="course-info-finished">
                            <strong>${course.courseName}</strong>
                        </div>
                    </div>`;
            });
        }

        if (active.length > 0) {
            html += `<p class="drawer-section-title">🎓 Mis Estudios</p>`;
            active.forEach(course => {
                html += `
                    <div class="course-card-active">
                        <span class="course-emoji">🎓</span>
                        <div class="course-active-details">
                            <div class="course-active-name" title="${course.courseName}">${course.courseName}</div>
                            <div class="progress-bar-bg">
                                <div class="progress-bar-fill" style="width: ${course.percent}%"></div>
                            </div>
                        </div>
                    </div>`;
            });
        }

        listContainer.innerHTML = html || `<p style="text-align:center; padding:2rem; opacity:0.5;">No hay actividad.</p>`;

        const achievementCards = listContainer.querySelectorAll('.achievement-trigger');
        achievementCards.forEach(card => {
            card.onclick = async () => {
                const courseId = card.getAttribute('data-course-id');
                const { ExamResults } = await import('../exam-results/exam-results.js');
                const resultsModal = new ExamResults(100, 'palette-celebration', 0, 0, courseId);
                resultsModal.show(true);
            };
        });

        uiService.refreshIcons();
    }

    close() {
        const drawer = document.getElementById('student-drawer-container');
        if (drawer) {
            drawer.classList.remove('open');
            setTimeout(() => uiService.closeModal(), 400);
        }
    }
}