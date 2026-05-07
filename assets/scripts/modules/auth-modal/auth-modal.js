import { uiService } from '../../core/ui.service.js';
import { firebaseService } from '../../core/firebase.service.js';

export class Auth {
    constructor() {
        this.templatePath = './assets/scripts/modules/auth/auth-modal.html';
    }

    async showLogin() {
        try {
            const html = await uiService.fetchTemplate(this.templatePath);
            uiService.openModal(html, 'palette-blue');

            setTimeout(() => {
                const btnGoogle = document.getElementById('btn-google-auth');
                if (btnGoogle) {
                    btnGoogle.onclick = async () => {
                        try {
                            uiService.showToast("Conectando con Google...", "info");
                            await firebaseService.loginWithGoogle();
                            uiService.closeModal();
                            uiService.showToast("¡Sesión iniciada correctamente!", "success");
                            
                            setTimeout(() => location.reload(), 1000);
                        } catch (err) {
                            console.error(err);
                            uiService.showToast("No se pudo iniciar sesión", "error");
                        }
                    };
                }
            }, 200);
        } catch (error) {
            console.error("Error al cargar modal de auth:", error);
        }
    }
}