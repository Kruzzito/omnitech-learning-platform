import { uiService } from '../../core/ui.service.js';

export class StudentPanelEdit {
    constructor(user, onUpdate) {
        this.user = user;
        this.onUpdate = onUpdate;
        this.initialColor = user.headerBgColor || '#2563eb';
        this.tempColor = this.initialColor;
    }

    init() {
        uiService.refreshIcons();

        const hueSlider = document.getElementById('hue-slider');
        const previewCircle = document.getElementById('color-preview-circle');
        const confirmBtn = document.getElementById('btn-confirm-style');
        const closeX = document.getElementById('st-close-edit-panel');

        if (hueSlider) {
            hueSlider.oninput = (e) => {
                const hue = e.target.value;
                this.tempColor = `hsl(${hue}, 70%, 50%)`;

                previewCircle.style.background = this.tempColor;
                this.onUpdate({ color: this.tempColor, image: null, persist: false });
            };
        }

        if (confirmBtn) {
            confirmBtn.onclick = () => {
                this.onUpdate({ color: this.tempColor, image: null, persist: true });
                this._destroy();
            };
        }

        if (closeX) {
            closeX.onclick = () => {
                this.onUpdate({ color: this.initialColor, image: this.user.headerBgImage, persist: false });
                this._destroy();
            };
        }

        this._initFileLogic();
    }

    _destroy() {
        const container = document.getElementById('student-panel-edit-container');
        if (container) container.remove();
    }
    
    _initFileLogic() {
        const fileBtn = document.getElementById('btn-trigger-file');
        const fileInput = document.getElementById('panel-file-input');
        if (fileBtn && fileInput) {
            fileBtn.onclick = () => fileInput.click();
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        this.onUpdate({ color: null, image: ev.target.result, persist: true });
                        this._destroy();
                    };
                    reader.readAsDataURL(file);
                }
            };
        }
    }
}