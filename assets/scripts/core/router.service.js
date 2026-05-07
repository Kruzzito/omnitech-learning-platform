import { uiService } from './ui.service.js';
import { viewService } from './view.service.js';
import { courseService } from './course.service.js';
import { SliderCourses } from '../modules/slider-courses/slider-courses.js';
import { CourseCard } from '../modules/course-cards/course-card.js';
import { CourseModal } from '../modules/course-modal/course-modal.js';

export const routerService = {
    currentViewer: null,

    async handleRoute() {
        const hash = window.location.hash || '#home';
        const parts = hash.split('/');
        const rootHash = parts[0];

        window.scrollTo(0, 0);

        switch (rootHash) {
            case '#home':
                await this._renderHome();
                break;
            case '#nosotros':
                viewService.renderAbout();
                break;
            case '#cursos':
                await this._renderCatalog();
                break;
            case '#mis-cursos':
                await this._renderMyCourses();
                break;
            case '#curso':
                const params = this.parseCurrentHash();
                if (params) {
                    await this._openCourseViewer(params.courseId, params.lessonId, params.tab);
                }
                break;
            default:
                window.location.hash = '#home';
        }

        uiService.refreshIcons();
    },

async _renderHome() {
    const courses = courseService.getAllCourses();
    const slider = new SliderCourses(courses);
    const sliderHTML = await slider.render();
    
    viewService.renderHome(sliderHTML);
    
    slider.init();

    const registerBtn = document.getElementById('home-register-btn');
    if (registerBtn) {
        registerBtn.onclick = async () => {
            const isRegistered = localStorage.getItem('omnitech_perfil');
            
            if (isRegistered) {
                uiService.showToast("¡Ya eres parte de OmniTech! Revisa tu panel.", "info");
            } else {
                const { PerfilModal } = await import('../modules/perfil-modal/perfil-modal.js');
                const modal = new PerfilModal();
                uiService.openModal(await modal.render());
                modal.init();
            }
        };
    }

    uiService.refreshIcons();
},

    async _renderCatalog() {
        const allCourses = courseService.getAllCourses();
        const onFilterChange = async (category) => {
            await this._renderGridContent(allCourses, category);
        };
        await viewService.renderCatalog(allCourses, onFilterChange);
        await this._renderGridContent(allCourses, 'Todos');
    },

    async _renderMyCourses() {
        const enrolledIds = JSON.parse(localStorage.getItem('omnitech_enrolled')) || [];
        const allCourses = courseService.getAllCourses();
        const myEnrolled = allCourses.filter(c => enrolledIds.includes(c.id));

        const onFilterChange = async (category) => {
            await this._renderGridContent(myEnrolled, category);
        };

        await viewService.renderMyCoursesView(myEnrolled, onFilterChange);
        await this._renderGridContent(myEnrolled, 'Todos');
    },

    async _renderGridContent(courses, category = 'Todos') {
        const grid = document.getElementById('main-grid');
        if (!grid) return;

        grid.classList.remove('fade-in');
        
        const filtered = category === 'Todos' 
            ? courses 
            : courses.filter(c => c.category === category);

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:4rem; opacity:0.5;">
                    <i data-lucide="search-x" style="width:48px; height:48px; margin-bottom:1rem;"></i>
                    <p>No se encontraron cursos en esta sección.</p>
                </div>`;
        } else {
            const cardPromises = filtered.map(c => new CourseCard(c).render());
            const cardsHTML = await Promise.all(cardPromises);
            grid.innerHTML = cardsHTML.join('');
        }

        void grid.offsetWidth; 
        grid.classList.add('fade-in');
        uiService.refreshIcons();
    },


    async _openCourseViewer(courseId, lessonId = null, targetTab = null) {
        const modalContainer = document.querySelector('.course-modal-container');
        
        if (modalContainer && this.currentViewer && this.currentViewer.data.id === courseId) {
            this._syncInternalNavigation(lessonId, targetTab);
            return;
        }

        const data = courseService.getCourseById(courseId);
        if (data) {
            this.currentViewer = new CourseModal(data);
            await this.currentViewer.show();
            this._syncInternalNavigation(lessonId, targetTab);
        } else {
            uiService.showToast("Curso no encontrado", "error");
            window.location.hash = '#cursos';
        }
    },

    _syncInternalNavigation(lessonId, targetTab) {
        if (!this.currentViewer || !this.currentViewer.tabsComponent) return;
        const tabs = this.currentViewer.tabsComponent;

        if (lessonId) {

        } else if (targetTab) {

        }
    },

    updateState(courseId, lessonId = null, tab = null) {
        let newHash = `#curso/${courseId}`;
        if (lessonId) {
            newHash += `/leccion/${lessonId}`;
            if (tab && tab !== 'clase') newHash += `/${tab}`;
        } else if (tab && tab !== 'presentacion') {
            newHash += `/${tab}`;
        }

        if (window.location.hash !== newHash) {
            window.history.replaceState(null, null, newHash);
        }
    },

    parseCurrentHash() {
        const hash = window.location.hash;
        if (!hash.startsWith('#curso/')) return null;
        const parts = hash.split('/');
        const isLessonPath = parts[2] === 'leccion';

        return {
            courseId: parts[1] || null,
            lessonId: isLessonPath ? parts[3] : null,
            tab: isLessonPath ? parts[4] : parts[2]
        };
    },

    reset() {
        const defaultHash = '#mis-cursos';
        if (window.location.hash !== defaultHash) {
            window.location.hash = defaultHash;
        }
    }
};