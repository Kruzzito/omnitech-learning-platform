
import { uiService } from '../../core/ui.service.js';

export class PerfilModal {
    constructor() {
        this.photoBase64 = null;

        this.existingData = JSON.parse(localStorage.getItem('omnitech_perfil')) || null;
        if (this.existingData) {
            this.photoBase64 = this.existingData.foto || null;
        }
    }

    async render() {
        const template = await uiService.fetchTemplate('./assets/scripts/modules/perfil-modal/perfil-modal.html');
        const container = document.createElement('div');
        container.innerHTML = template;


        if (this.existingData) {
            const d = this.existingData;
            

            const titleEl = container.querySelector('#perfil-title');
            const submitBtn = container.querySelector('.btn-save-perfil');
            if (titleEl) titleEl.innerText = 'Editar Perfil Estudiantil';
            if (submitBtn) submitBtn.innerHTML = '<i data-lucide="refresh-cw"></i> ACTUALIZAR PERFIL';

            container.querySelector('[name="nombres"]').value = d.nombres || '';
            container.querySelector('[name="apellidoPaterno"]').value = d.apellidoPaterno || '';
            container.querySelector('[name="apellidoMaterno"]').value = d.apellidoMaterno || '';
            container.querySelector('[name="edad"]').value = d.edad || '';
            container.querySelector('[name="pais"]').value = d.pais || '';
            container.querySelector('[name="ciudad"]').value = d.ciudad || '';

            if (d.foto) {
                const img = container.querySelector('#img-preview');
                const icon = container.querySelector('#icon-placeholder');
                if (img && icon) {
                    img.src = d.foto;
                    img.classList.remove('hidden');
                    icon.classList.add('hidden');
                }
            }
        }

        return container.innerHTML;
    }

    init() {
        const form = document.getElementById('perfil-form');
        const modalContainer = document.getElementById('perfil-modal-container');
        const photoInput = document.getElementById('input-photo');
        const cancelBtn = document.getElementById('btn-cancelar-perfil');

        if (!form) return;

        if (modalContainer) {
            modalContainer.onclick = (e) => e.stopPropagation();
        }

        if (cancelBtn) {
            cancelBtn.onclick = () => uiService.closeModal();
        }

        if (photoInput) {
            photoInput.onchange = (e) => this.handlePhotoSelection(e);
        }

        form.onsubmit = (e) => this.saveProfile(e);

        uiService.refreshIcons();
    }

    handlePhotoSelection(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 1048576) {
            uiService.showToast("La imagen es muy pesada (máx 1MB)", "error");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            this.photoBase64 = event.target.result;
            const imgPreview = document.getElementById('img-preview');
            const iconPlaceholder = document.getElementById('icon-placeholder');
            
            if (imgPreview && iconPlaceholder) {
                imgPreview.src = this.photoBase64;
                imgPreview.classList.remove('hidden');
                iconPlaceholder.classList.add('hidden');
            }
        };
        reader.readAsDataURL(file);
    }

    saveProfile(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const studentData = {
            nombres: formData.get('nombres').trim(),
            apellidoPaterno: formData.get('apellidoPaterno').trim(),
            apellidoMaterno: formData.get('apellidoMaterno').trim(),
            edad: formData.get('edad'),
            pais: formData.get('pais').trim(),
            ciudad: formData.get('ciudad').trim(),
            foto: this.photoBase64,
            fechaRegistro: this.existingData ? this.existingData.fechaRegistro : new Date().toLocaleDateString()
        };

        localStorage.setItem('omnitech_perfil', JSON.stringify(studentData));

        uiService.showToast("¡Perfil guardado con éxito!", "success");

        window.dispatchEvent(new CustomEvent('perfilActualizado', { detail: studentData }));

        setTimeout(() => {
            uiService.closeModal();
        }, 600);
    }
}