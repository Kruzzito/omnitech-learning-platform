import { uiService } from './ui.service.js';

export const viewService = {
    
    renderHome(sliderHTML) {
        const html = `
            <section class="hero-container">${sliderHTML}</section>
            <section class="welcome-section">
                <div class="welcome-content">
                    <span class="slogan-badge">"Capacítate hoy para liderar mañana"</span>
                    <h2 class="section-title">Impulsa tu Futuro Profesional</h2>
                    <p class="section-text">
                        Bienvenido a <strong>OmniTech Learning</strong>, tu plataforma de capacitación técnica de alto nivel. 
                        Nuestros cursos están diseñados por expertos para brindarte las herramientas necesarias 
                        que demanda el mercado laboral actual.
                    </p>
                    <div class="cta-group">
                        <button class="btn btn-primary btn-lg" id="home-register-btn">
                            <i data-lucide="user-plus"></i> Registrarse ahora
                        </button>
                    </div>
                </div>
            </section>`;
        uiService.renderView(html);
    },

    renderAbout() {
        const html = `
            <section class="about-section">
                <div class="welcome-section">
                    <div class="welcome-content">
                        <span class="slogan-badge">Nuestra Esencia</span>
                        <h2 class="section-title">Quiénes Somos</h2>
                        <div class="section-text about-main-text">
                            <p>En <strong>OmniTech Learning</strong>, somos un equipo apasionado por la convergencia entre la tecnología y la operatividad industrial. Nacimos de la observación de una necesidad clara en el entorno laboral actual: la falta de espacios que enseñen, de forma sencilla y gratuita, cómo dominar las herramientas digitales (software) sin descuidar los estándares y realidades del campo laboral.</p>
                            <p>No ofrecemos solo un canal de tutoriales; somos una comunidad de aprendizaje continuo. Creemos firmemente que el acceso al conocimiento técnico de calidad es el motor principal para que cualquier persona pueda mejorar su perfil profesional y ser más competitiva en el campo laboral.</p>
                        </div>
                    </div>
                </div>
                <div class="about-container">
                    <div class="mission-vision-grid">
                        <div class="mv-card">
                            <div class="mv-icon"><i data-lucide="target"></i></div>
                            <h3>Misión</h3>
                            <p>Impulsar el crecimiento de nuestra comunidad mediante el acceso gratuito a formación técnica de calidad, enfocada en desarrollar las habilidades digitales más solicitadas para destacar en el campo laboral actual.</p>
                        </div>
                        <div class="mv-card">
                            <div class="mv-icon"><i data-lucide="eye"></i></div>
                            <h3>Visión</h3>
                            <p>Ser el canal de aprendizaje líder para quienes buscan mejorar su perfil profesional.</p>
                        </div>
                    </div>
                    <div class="pillars-section">
                        <h3 class="pillars-title">Nuestros Pilares</h3>
                        <div class="pillars-grid">
                            ${this._getPillarItem('unlock', 'Acceso Libre', 'Educación técnica sin barreras económicas para todos.')}
                            ${this._getPillarItem('shield-check', 'Calidad Técnica', 'Contenido validado bajo estándares del mundo laboral real.')}
                            ${this._getPillarItem('users', 'Comunidad', 'Crecemos juntos mediante el aprendizaje colaborativo.')}
                        </div>
                    </div>
                </div>
            </section>`;
        uiService.renderView(html);
        uiService.refreshIcons();
    },

    async renderCatalog(courses, onFilterChange) {

        const { Filtro } = await import('../modules/filtro/filtro.js');
        const filtroComponent = new Filtro(courses, onFilterChange);
        
        const filtroHTML = await filtroComponent.render();

        const html = `
            <header class="section-header">
                <h2 class="section-title">Catálogo Completo</h2>
                <p class="section-subtitle">Explora toda nuestra oferta educativa profesional.</p>
            </header>
            
            <div id="catalog-filter-container">
                ${filtroHTML}
            </div>

            <div class="courses-grid" id="main-grid"></div>
        `;

        uiService.renderView(html);

        filtroComponent.init();
        
        uiService.refreshIcons();
    },

    async renderMyCoursesView(myCourses, onFilterChange) {
        const { Filtro } = await import('../modules/filtro/filtro.js');
        const filtroComponent = new Filtro(myCourses, onFilterChange);
        const filtroHTML = await filtroComponent.render();

        const html = `
            <header class="section-header">
                <h2 class="section-title">Mis Estudios</h2>
                <p class="section-subtitle">Continúa tu formación y alcanza tus metas profesionales.</p>
            </header>
            
            <div id="my-studies-filter-container">
                ${filtroHTML}
            </div>

            <div class="courses-grid" id="main-grid"></div>
        `;

        uiService.renderView(html);
        
        filtroComponent.init();
        uiService.refreshIcons();
    },

    updateNavbar(user) {
        const authPlaceholder = document.getElementById('auth-placeholder');
        const drawerActions = document.getElementById('drawer-actions');
        if (!authPlaceholder) return;

        const youtubeLink = `
            <a href="https://www.youtube.com/@OmniTechLearning/playlists" target="_blank" class="btn btn-youtube">
                <i data-lucide="youtube"></i> <span class="nav-label">YouTube</span>
            </a>`;

        const loginBtn = user 
            ? `<button class="icon-btn" title="Perfil"><i data-lucide="user"></i></button>`
            : `<button class="btn btn-primary" id="login-trigger"><i data-lucide="log-in"></i> <span class="nav-label">Entrar</span></button>`;

        authPlaceholder.innerHTML = `
            <div class="desktop-only-actions" style="display: flex; align-items: center; gap: 10px;">
                ${loginBtn}
                ${youtubeLink}
            </div>`;
        
        if (drawerActions) {
            drawerActions.innerHTML = `
                <div class="mobile-drawer-cta">
                    <p class="drawer-section-title" style="font-size: 0.7rem; opacity: 0.5; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Acceso rápido</p>
                    ${loginBtn}
                    ${youtubeLink}
                </div>`;
        }

        const triggers = document.querySelectorAll('#login-trigger');
        triggers.forEach(btn => btn.onclick = () => uiService.showToast("Módulo de Login en desarrollo", "info"));
        
        uiService.refreshIcons();
    },

    _getPillarItem(icon, title, desc) {
        return `
            <div class="pillar-item">
                <i data-lucide="${icon}"></i>
                <h4>${title}</h4>
                <p>${desc}</p>
            </div>`;
    }
};