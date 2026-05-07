import { uiService } from '../core/ui.service.js';

export const authHandler = {
    init() {
        this.render();
        window.addEventListener('perfilActualizado', () => this.render());
    },

    closeMobileMenu() {
        const drawer = document.getElementById('mobile-drawer');
        const overlay = document.getElementById('drawer-overlay');
        if (drawer && drawer.classList.contains('open')) {
            drawer.classList.remove('open');
            overlay?.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    },

    render() {
        const desktopPlaceholder = document.getElementById('auth-placeholder');
        const themeToggle = document.getElementById('theme-toggle');
        const mobileContainer = document.getElementById('drawer-actions');       
        const user = JSON.parse(localStorage.getItem('omnitech_perfil'));
        const existingAvatar = document.getElementById('nav-user-avatar-btn');
        if (existingAvatar) existingAvatar.remove();

        if (user && themeToggle) {
            const avatarBtn = document.createElement('button');
            avatarBtn.id = 'nav-user-avatar-btn';
            avatarBtn.className = 'nav-avatar-btn';
            avatarBtn.title = `Panel de ${user.nombres}`;
            
            avatarBtn.innerHTML = `
                <div class="nav-avatar-circle">
                    <img src="${user.foto || ''}" class="${user.foto ? '' : 'hidden'}">
                    <i data-lucide="user" class="${user.foto ? 'hidden' : ''}"></i>
                </div>`;

            themeToggle.parentNode.insertBefore(avatarBtn, themeToggle);

            avatarBtn.onclick = async () => {
                this.closeMobileMenu();
                
                try {
                    const { StudentModal } = await import('../modules/student-modal/student-modal.js');
                    const panel = new StudentModal();
                    panel.show();
                } catch (err) {
                    console.error("Error al cargar StudentModal:", err);
                }
            };
        }

        const youtubeLink = (suffix) => `
            <a href="https://www.youtube.com/@OmniTechLearning/playlists" target="_blank" class="btn btn-youtube" id="yt-btn${suffix}">
                <i data-lucide="youtube"></i> <span class="nav-label">YouTube</span>
            </a>`;

        const authBtn = (idSuffix) => user 
            ? ''
            : `<button class="btn btn-primary" id="login-trigger${idSuffix}">
                    <i data-lucide="log-in"></i> <span class="nav-label">Entrar</span>
               </button>`;

        if (desktopPlaceholder) {
            desktopPlaceholder.innerHTML = `
                <div class="desktop-only-actions" style="display: flex; align-items: center; gap: 10px;">
                    ${authBtn('')}
                    ${youtubeLink('-desktop')}
                </div>`;
        }

        if (mobileContainer) {
            const sectionTitle = user ? `Hola, ${user.nombres}` : 'Mi Cuenta';

            mobileContainer.innerHTML = `
                <div class="mobile-drawer-top-actions">
                    <p class="drawer-section-title" style="font-size: 0.7rem; opacity: 0.5; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">${sectionTitle}</p>
                    <div class="drawer-btns-stack" style="display: flex; flex-direction: column; gap: 10px;">
                        ${authBtn('-mobile')}
                        ${youtubeLink('-mobile')}
                    </div>
                    <div class="drawer-separator" style="height: 1px; background: var(--border-color); margin: 1.5rem 0; width: 100%;"></div>
                </div>`;
        }

        this.bindEvents();
        uiService.refreshIcons();
    },

    bindEvents() {
        const suffixes = ['', '-mobile'];

        suffixes.forEach(suffix => {
            const login = document.getElementById(`login-trigger${suffix}`);
            const yt = document.getElementById(`yt-btn${suffix}`);

            if (login) {
                login.onclick = async () => {
                    if (suffix === '-mobile') this.closeMobileMenu();
                    
                    const { PerfilModal } = await import('../modules/perfil-modal/perfil-modal.js');
                    const modal = new PerfilModal();
                    uiService.openModal(await modal.render());
                    modal.init();
                };
            }

            if (yt && suffix === '-mobile') {
                yt.onclick = () => this.closeMobileMenu();
            }
        });
    }
};