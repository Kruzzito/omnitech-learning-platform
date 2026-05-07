class UiService {
    constructor() {

        this.viewport = document.getElementById('app-viewport');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalHolder = document.getElementById('modal-holder');
        this.toastContainer = document.getElementById('toast-container');

        this.initViewportAdjustment();
    }

    initViewportAdjustment() {

        window.addEventListener('load', () => this.updateViewportMargin());
        
        window.addEventListener('resize', () => this.updateViewportMargin());
        
        this.updateViewportMargin();
    }

    updateViewportMargin() {
        const header = document.querySelector('.main-header');
        if (header && this.viewport) {
            const headerHeight = header.offsetHeight;
            this.viewport.style.marginTop = `${headerHeight}px`;
            
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        }
    }

    async fetchTemplate(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error al cargar: ${url}`);
            return await response.text();
        } catch (error) {
            console.error("UiService Error:", error);
            return null;
        }
    }

    renderView(html) {
        if (this.viewport) {
            this.viewport.innerHTML = html;
            this.refreshIcons();
            this.updateViewportMargin(); 
            window.scrollTo(0, 0); 
        }
    }

    showToast(message, icon = 'info') {
        if (!this.toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i data-lucide="${icon}"></i>
            <span>${message}</span>
        `;
        
        this.toastContainer.appendChild(toast);
        this.refreshIcons();

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    openModal(contentHtml, paletteClass = 'palette-ocean') {
        if (!this.modalHolder || !this.modalOverlay) return;

        this.modalHolder.innerHTML = contentHtml;
        this.modalHolder.className = `modal-content-wrapper ${paletteClass}`;
        
        this.modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
        
        this.refreshIcons();
    }

    closeModal() {
        if (!this.modalOverlay) return;
        
        this.modalOverlay.classList.add('hidden');
        this.modalHolder.innerHTML = '';
        document.body.style.overflow = ''; 
    }

    refreshIcons() {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

export const uiService = new UiService();