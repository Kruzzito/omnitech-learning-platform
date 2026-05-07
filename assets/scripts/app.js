import { uiService } from './core/ui.service.js';
import { courseService } from './core/course.service.js';
import { routerService } from './core/router.service.js';
import { authHandler } from './utils/auth-handler.js';
import { DeleteCourse } from './modules/delete-course/delete-course.js';

class App {
    constructor() {
        this.currentViewer = null;
        this.init();
    }
    async init() {
        this.initTheme();
        this.initMobileMenu();
        authHandler.init();
        routerService.handleRoute();
        window.addEventListener('hashchange', () => routerService.handleRoute());
        this.initGlobalInscriptions();
        uiService.refreshIcons();
    }

    initGlobalInscriptions() {
        document.addEventListener('click', async (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            const card = btn.closest('.course-card');
            if (!card) return;

            const courseId = card.getAttribute('data-id');
            const storageKey = 'omnitech_enrolled';
            const btnText = btn.innerText.trim().toUpperCase();


            if (btnText === 'INSCRIBIRSE') {
                try {
                    let enrolled = JSON.parse(localStorage.getItem(storageKey)) || [];
                    if (!enrolled.includes(courseId)) {
                        enrolled.push(courseId);
                        localStorage.setItem(storageKey, JSON.stringify(enrolled));                        
                        uiService.showToast("¡Inscripción exitosa! Redirigiendo...", "success");
                        btn.innerText = 'YA INSCRITO';
                        btn.className = 'btn btn-secondary';
                        setTimeout(() => {
                            window.location.hash = '#mis-cursos';
                        }, 1000); 
                    }
                } catch (err) {
                    console.error("Error en inscripción:", err);
                }
            } 
            
            else if (btnText === 'YA INSCRITO') {
                uiService.showToast("Ya estás inscrito. ¡A estudiar!", "info");
                window.location.hash = '#mis-cursos';
            }

            else if (btnText === 'CONTINUAR') {
                window.location.hash = `#curso/${courseId}`;
            }

            else if (btn.classList.contains('btn-unsubscribe')) {
                const courseData = courseService.getCourseById(courseId);
                if (courseData) {
                    const deleteModal = new DeleteCourse(courseData, () => {
                        if (window.location.hash === '#mis-cursos') {
                            routerService.handleRoute();
                        }
                    });
                    await deleteModal.show();
                }
            }
        });
    }

    initTheme() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        const toggleTheme = () => {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            uiService.refreshIcons();
        };

        btn.onclick = toggleTheme;

        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    initMobileMenu() {
        const btnOpen = document.getElementById('mobile-menu-btn');
        const btnClose = document.getElementById('close-drawer');
        const drawer = document.getElementById('mobile-drawer');
        const overlay = document.getElementById('drawer-overlay');
        
        const openMenu = () => {
            if (drawer && overlay) {
                drawer.classList.add('open');
                overlay.classList.remove('hidden');
                document.body.classList.add('no-scroll');
            }
        };

const closeMenu = () => {
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        document.documentElement.style.overflow = '';
    }
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 1250) {
        if (drawer.classList.contains('open')) {
            closeMenu();
        }
    }
});

        if (btnOpen) btnOpen.onclick = (e) => { e.preventDefault(); openMenu(); };
        if (btnClose) btnClose.onclick = closeMenu;
        if (overlay) overlay.onclick = closeMenu;
        document.querySelectorAll('.drawer-item').forEach(link => {
            link.onclick = closeMenu;
        });
    }
}
document.addEventListener('DOMContentLoaded', () => { 
    window.omniApp = new App(); 
});