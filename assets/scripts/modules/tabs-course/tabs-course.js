import { uiService } from '../../core/ui.service.js';
import { routerService } from '../../core/router.service.js';
import { progressService } from '../../core/progress.service.js';

export class TabsCourse {
    constructor(courseData) {
        this.course = courseData;
        this.templatePath = './assets/scripts/modules/tabs-course/tabs-course.html';
        this.isMobile = window.innerWidth <= 1024;
        this.currentLesson = null;
        this.activeTab = 'presentacion'; // Pestaña inicial por defecto
    }

    async render() {
        const template = await uiService.fetchTemplate(this.templatePath);
        return template || '';
    }

    init() {

        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.onclick = () => this.switchTab(btn);
        });

        const backBtn = document.getElementById('btn-back-to-info');
        if (backBtn) {
            backBtn.onclick = () => this.exitStudyMode();
        }

        window.addEventListener('resize', () => this.handleResponsiveChange());

        const routeData = routerService.parseCurrentHash();
        const tabToLoad = routeData?.tab || this.activeTab;
        
        const initialBtn = document.querySelector(`.tab-btn[data-tab="${tabToLoad}"]`);
        if (initialBtn) {
            this.switchTab(initialBtn);
        } else {
            const defaultBtn = document.querySelector('.tab-btn[data-tab="presentacion"]');
            if (defaultBtn) this.switchTab(defaultBtn);
        }
    }

    handleResponsiveChange() {
        const currentlyMobile = window.innerWidth <= 1024;
        if (currentlyMobile !== this.isMobile) {
            this.isMobile = currentlyMobile;
            const activeBtn = document.querySelector('.tab-btn.active');
            
            if (!this.isMobile && activeBtn?.dataset.tab === 'recomendaciones') {
                const presBtn = document.querySelector('.tab-btn[data-tab="presentacion"]');
                if (presBtn) this.switchTab(presBtn);
            }
        }
    }

    async loadTabContent(tabName) {
        const viewport = document.getElementById('tab-content-viewport');
        if (!viewport) return;
        
        viewport.innerHTML = '';
        this.activeTab = tabName;

        switch (tabName) {
            case 'presentacion':
                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <div class="video-preview-container" style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; background: #000; aspect-ratio: 16/9;">
                            <iframe src="${this.course.introVideo}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <h3 class="tab-section-title">Descripción del curso</h3>
                        <div class="tab-text-content">${this.course.courseDesc || 'Sin descripción disponible.'}</div>
                    </div>`;
                break;

            case 'temario':
                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <h3 class="tab-section-title">Contenido del curso</h3><br>
                        ${this._renderAccordion(false)}
                    </div>`;
                this._initAccordionLogic(true);
                break;

            case 'calificaciones':
                const promedio = this._calcularPromedio();
                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <div class="average-banner" style="background: var(--accent); color: white; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center;">
                            <span style="font-size: 0.9rem; opacity: 0.9;">Promedio General del Curso</span>
                            <h2 style="font-size: 2rem; font-weight: 800;">${promedio}</h2>
                        </div>
                        ${this._renderAccordion(true)}
                    </div>`;
                this._initAccordionLogic(false);
                break;

            case 'clase':
                if (this.currentLesson) {
                    viewport.innerHTML = `
                        <div class="animate-fade-in">
                            <h3 class="tab-section-title">${this.currentLesson.title}</h3><br>
                            <div class="video-preview-container" style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; background: #000; aspect-ratio: 16/9;">
                                <iframe src="${this.currentLesson.video}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div class="tab-text-content">${this.currentLesson.descHTML || ''}</div>
                        </div>`;
                }
                break;

            case 'notas':
                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <h3 class="tab-section-title">Notas de la lección</h3>
                        <div class="tab-text-content">${this.currentLesson?.resumenHTML || 'No hay notas disponibles para esta lección.'}</div>
                    </div>`;
                break;

case 'actividad':
                const actHTML = this.currentLesson?.actividadesHTML || this.currentLesson?.actividadHTML;
                const hasRes = this.currentLesson?.resources && this.currentLesson.resources.length > 0;

                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <div class="tab-text-content">
                            ${actHTML ? `<section style="margin-bottom: 2rem;">${actHTML}</section>` : '<p>No hay actividades específicas para esta clase.</p>'}
                            
                            ${hasRes ? `
                                <div class="resources-container">
                                    ${this.currentLesson.resources.map(r => `
                                        <a href="${r.url}" target="_blank" class="resource-download-card">
                                            <span>${r.name}</span>
                                        </a>
                                    `).join('')}
                                </div>` : ''}
                        </div>
                    </div>`;

                this._initResourceIcons();
                break;

            case 'examen':
                const b1 = this._renderQuizQuestions(this.currentLesson?.quiz, 'q1', this.currentLesson?.quizMsg);
                const b2 = (this.currentLesson?.quiz2) ? this._renderQuizQuestions(this.currentLesson.quiz2, 'q2', this.currentLesson.quizMsg2) : '';

                viewport.innerHTML = `
                    <div class="animate-fade-in">
                        <div class="tab-text-content">
                            <h1 class="examen-titulo-master">Evaluación de Conocimientos</h1>
                            <div class="quiz-container">
                                ${b1} ${b2 ? `<div class="quiz-section-divider"></div>${b2}` : ''}
                                <div class="quiz-actions-footer">
                                    <button id="btn-grade-quiz" class="btn-primary">CALIFICAR EXAMEN</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                this._initQuizLogic();
                break;

            case 'recomendaciones':
                viewport.innerHTML = `
                    <div class="animate-fade-in" style="text-align: center; padding: 4rem; opacity: 0.5;">
                        <i data-lucide="sparkles" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i>
                        <p>Contenido recomendado próximamente.</p>
                    </div>`;
                break;
        }
        uiService.refreshIcons();
    }

    async _initResourceIcons() {
        try {

            const { initResourceIcons } = await import('../../utils/resource-icons.js');
            initResourceIcons();
        } catch (error) {
            console.error("Error cargando los iconos de recursos:", error);
        }
    }

    enterStudyMode(mod, les) {
        this._toggleTabGroups(true);

        const header = document.querySelector('.course-modal-header');
        const viewport = document.getElementById('tab-content-viewport');

        if (header) {

            const activeAccent = getComputedStyle(header).getPropertyValue('--accent').trim() || '#2563eb';
            
            header.style.setProperty('background-color', activeAccent, 'important');
            header.style.setProperty('background', activeAccent, 'important');
            header.classList.add('study-mode-active');
        }

        if (viewport) {
            viewport.classList.remove('animate-slide-out');
            viewport.classList.add('animate-slide-in');
        }

        document.getElementById('btn-back-to-info')?.classList.remove('hidden');
        document.getElementById('close-course-modal')?.classList.add('study-active');
        
        const b = document.getElementById('study-mode-breadcrumb');
        if (b) {
            b.classList.remove('hidden');
            document.getElementById('modal-module-title').innerText = mod;
            document.getElementById('modal-lesson-title').innerText = les;
            document.getElementById('modal-course-title')?.classList.add('hidden');
        }

        const claseBtn = document.querySelector('.tab-btn[data-tab="clase"]');
        this.switchTab(claseBtn);
    }

    exitStudyMode() {
        const header = document.querySelector('.course-modal-header');
        const viewport = document.getElementById('tab-content-viewport');

        if (viewport) {
            viewport.classList.remove('animate-slide-in');
            viewport.classList.add('animate-slide-out');
        }

        setTimeout(() => {
            if (header) {
                header.style.removeProperty('background-color');
                header.style.removeProperty('background');
                header.classList.remove('study-mode-active');
            }

            this._toggleTabGroups(false);
            this.currentLesson = null;
            document.getElementById('btn-back-to-info')?.classList.add('hidden');
            document.getElementById('close-course-modal')?.classList.remove('study-active');
            document.getElementById('study-mode-breadcrumb')?.classList.add('hidden');
            document.getElementById('modal-course-title')?.classList.remove('hidden');

            const temarioBtn = document.querySelector('.tab-btn[data-tab="temario"]');
            this.switchTab(temarioBtn || document.querySelector('.tab-btn[data-tab="presentacion"]'));
        }, 250);
    }

    switchTab(button) {
        if (!button) return;
        const tabName = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        this.loadTabContent(tabName);

        const lessonId = this.currentLesson ? this.currentLesson.lessonId : null;
        routerService.updateState(this.course.id, lessonId, tabName);
    }

    _toggleTabGroups(isStudy) {
        const info = ['presentacion', 'temario', 'calificaciones', 'recomendaciones'];
        const study = ['clase', 'notas', 'actividad', 'examen'];
        document.querySelectorAll('.tab-btn').forEach(btn => {
            const t = btn.dataset.tab;
            if (info.includes(t)) isStudy ? btn.classList.add('hidden') : btn.classList.remove('hidden');
            if (study.includes(t)) isStudy ? btn.classList.remove('hidden') : btn.classList.add('hidden');
        });
    }

    _renderAccordion(isGrades) {
        return `<div class="course-accordion">
            ${this.course.modules.map(m => `
                <div class="accordion-group">
                    <div class="accordion-header">
                        <span>${m.moduleTitle}</span>
                        <i data-lucide="chevron-down" class="acc-icon"></i>
                    </div>
                    <div class="accordion-content" style="display: none;">
                        ${m.lessons.map(l => {
                            const isDone = progressService.isLessonCompleted(this.course.id, l.lessonId);
                            const savedGrade = progressService.getLessonGrade(this.course.id, l.lessonId);
                            const isFailed = savedGrade !== null && savedGrade < 70;
                            
                            let statusText = l.duration || 'Clase'; 
                            let textColor = 'inherit'; 
                            let iconName = 'play-circle';
                            let iconColor = 'var(--accent)';

                            if (isDone) {
                                statusText = 'Aprobado';
                                textColor = '#10b981'; 
                                iconColor = '#10b981';
                                iconName = 'check-circle';
                            } else if (isFailed) {
                                statusText = 'Reprobado';
                                textColor = '#ef4444'; 
                                iconColor = '#ef4444';
                                iconName = 'alert-circle';
                            }

                            const gradeTextColor = isFailed ? '#ef4444' : (isDone ? '#10b981' : 'var(--accent)');

                            const hasDivider = l.title.includes(':');
                            const titleParts = hasDivider ? l.title.split(':') : [l.title, ''];
                            const prefix = titleParts[0].trim() + ':';
                            const content = titleParts[1].trim();

                            return `
                            <div class="lesson-row ${!isGrades ? 'study-trigger' : ''}" data-lesson-id="${l.lessonId}">
                                <div class="lesson-info-main">
                                    <div class="lesson-icon-wrapper">
                                        ${isGrades 
                                            ? (isDone ? `<i data-lucide="award" style="width:20px; height:20px; color:var(--accent);"></i>` : '')
                                            : `<i data-lucide="${iconName}" style="width:20px; height:20px; color:${iconColor};"></i>`
                                        }
                                    </div>
                                    
                                    <div class="alternating-title-container">
                                        ${hasDivider && content ? `
                                            <span class="part-a">${prefix}</span>
                                            <span class="part-b truncate" style="${!isGrades ? `color: ${textColor};` : ''}">
                                                ${content}
                                            </span>
                                        ` : `
                                            <span class="static-title truncate" style="${!isGrades ? `color: ${textColor};` : ''}">
                                                ${l.title}
                                            </span>
                                        `}
                                    </div>
                                </div>

                                <div class="lesson-status-badge">
                                    <b style="font-weight: 600; color: ${isGrades ? gradeTextColor : (isDone || isFailed ? iconColor : 'var(--accent)')};">
                                        ${isGrades 
                                            ? (savedGrade !== null ? savedGrade : '---') 
                                            : statusText 
                                        }
                                    </b>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>`).join('')}
        </div>`;
    }

    _initAccordionLogic(allowStudy) {
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.onclick = () => {
                const c = h.nextElementSibling;
                const isOpen = c.style.display === 'block';
                c.style.display = isOpen ? 'none' : 'block';
                h.querySelector('.acc-icon').style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
            };
        });

        if (allowStudy) {
            document.querySelectorAll('.study-trigger').forEach(t => {
                t.onclick = () => {
                    const id = t.dataset.lessonId;
                    this.course.modules.forEach(m => {
                        const l = m.lessons.find(less => less.lessonId === id);
                        if (l) {
                            this.currentLesson = l;
                            this.enterStudyMode(m.moduleTitle, l.title);
                        }
                    });
                };
            });
        }
    }

    _renderQuizQuestions(questions, idPrefix, msg) {
        if (!questions) return '';
        const banner = msg ? `<div class="quiz-instruction-banner animate-fade-in">${msg}</div>` : '';
        const qs = questions.map((q, i) => `
            <div class="question-item animate-fade-in" data-correct="${q.c}" style="animation-delay: ${i * 0.1}s">
                <span class="question-text">${i + 1}. ${q.q}</span>
                <div class="quiz-options">
                    ${q.a.map((opt, ai) => `
                        <label class="quiz-opt">
                            <input type="radio" name="${idPrefix}-${i}" value="${ai}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>`).join('');
        return banner + qs;
    }


_initQuizLogic() {
    const btn = document.getElementById('btn-grade-quiz');
    if (!btn) return;

    btn.onclick = async () => {
        const all = document.querySelectorAll('.question-item');
        const checkedInputs = document.querySelectorAll('.question-item input:checked');
        const answered = checkedInputs.length;
        const totalQuestions = all.length;

        if (answered === 0) {
            return uiService.showToast('Por favor, responde las preguntas antes de calificar.', 'info');
        }

        let correct = 0;
        all.forEach(q => {
            const sel = q.querySelector('input:checked');
            if (sel && sel.value == q.dataset.correct) {
                correct++;
            }
        });

        const grade = Math.round((correct / totalQuestions) * 100);

        if (this.currentLesson) {
            this.currentLesson.grade = grade;
            progressService.saveLessonActivity(
                this.course.id, 
                this.currentLesson.lessonId, 
                grade
            );
        }

        uiService.closeModal();

        const { ExamResults } = await import('../exam-results/exam-results.js');

        const resultsModal = new ExamResults(
            grade, 
            this.course.palette, 
            correct, 
            totalQuestions, 
            this.course.id 
        );
        
        resultsModal.show();

        routerService.reset();
    };
}

    _calcularPromedio() {
        let s = 0, c = 0;
        
        this.course.modules.forEach(m => {
            m.lessons.forEach(l => {
                const savedGrade = progressService.getLessonGrade(this.course.id, l.lessonId);
                if (savedGrade !== null) {
                    s += parseFloat(savedGrade);
                    c++;
                }
            });
        });

        if (c > 0) {
            return Math.round(s / c);
        }

        return 0;
    }

}