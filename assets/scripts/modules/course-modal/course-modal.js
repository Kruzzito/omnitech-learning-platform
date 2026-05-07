import { uiService } from '../../core/ui.service.js';
import { TabsCourse } from '../tabs-course/tabs-course.js';

export class CourseModal {
    constructor(courseData) {
        this.data = courseData;
        this.templatePath = './assets/scripts/modules/course-modal/course-modal.html';
        this.tabsComponent = null;
    }

    async show() {
        const template = await uiService.fetchTemplate(this.templatePath);
        if (!template) return;

        const coursePalette = this.data.palette || 'palette-ocean';
        uiService.openModal(template, coursePalette);

        await this.hydrate();
        this.initEvents();
    }

    async hydrate() {

        const titleElem = document.getElementById('modal-course-title');
        const btnBack = document.getElementById('btn-back-to-info');
        const breadcrumb = document.getElementById('study-mode-breadcrumb');

        if (titleElem) {
            titleElem.innerText = this.data.courseName;
            titleElem.classList.remove('hidden');
        }

        if (btnBack) btnBack.classList.add('hidden');
        if (breadcrumb) breadcrumb.classList.add('hidden');
        
        const contentArea = document.getElementById('courseContent');
        if (contentArea) {
            try {

                this.tabsComponent = new TabsCourse(this.data);
                

                contentArea.innerHTML = await this.tabsComponent.render();
                
                this.tabsComponent.init();
            } catch (error) {
                console.error("Error al inicializar TabsCourse:", error);
                contentArea.innerHTML = `
                    <div style="padding: 3rem; text-align: center; opacity: 0.5;">
                        <i data-lucide="alert-circle" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i>
                        <p>No se pudo cargar la estructura del curso.</p>
                    </div>`;
            }
        }

        const recomContainer = document.getElementById('recomContent');
        if (recomContainer) {
            recomContainer.innerHTML = '';
        }

        if (window.lucide) {
            uiService.refreshIcons();
        }
    }

    initEvents() {
  
        const closeBtn = document.getElementById('close-course-modal');
        if (closeBtn) {
            closeBtn.onclick = () => {

                uiService.closeModal();

                if (typeof routerService !== 'undefined' && routerService.reset) {
                    routerService.reset();
                } else {

                    window.location.hash = '#mis-cursos';
                }
            };
        }

        this._resizeHandler = () => {
            if (this.tabsComponent) {
                this.tabsComponent.handleResponsiveChange();
            }
        };

        window.addEventListener('resize', this._resizeHandler);

        window.addEventListener('popstate', () => {
            const currentHash = window.location.hash;

            if (!currentHash.includes('#curso/')) {
                uiService.closeModal();
            }
        }, { once: true });
    }
}