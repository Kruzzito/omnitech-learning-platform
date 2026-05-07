import { uiService } from '../../core/ui.service.js';
import { progressService } from '../../core/progress.service.js';

export class DeleteCourse {
    constructor(course, onDeleteSuccess) {
        this.course = course;
        this.onDeleteSuccess = onDeleteSuccess;
        this.templatePath = './assets/scripts/modules/delete-course/delete-course.html';
    }

    async show() {
        try {
            let template = await uiService.fetchTemplate(this.templatePath);
            if (!template) return;

            uiService.openModal(template, 'palette-warning'); 

            this.hydrate();
            this.initEvents();
        } catch (error) {
            console.error("Error al cargar el modal de eliminación:", error);
        }
    }

    hydrate() {
        const titleElem = document.getElementById('delete-course-name');
        if (titleElem) {
            titleElem.innerText = this.course.courseName || this.course.title;
        }
    }

    initEvents() {
        const cancelBtn = document.getElementById('cancel-delete');
        if (cancelBtn) {
            cancelBtn.onclick = () => uiService.closeModal();
        }

        const confirmBtn = document.getElementById('confirm-delete');
        if (confirmBtn) {
            confirmBtn.onclick = () => this.executeDeletion();
        }
    }

    executeDeletion() {

        progressService.deleteCourseData(this.course.id);

        const name = this.course.courseName || this.course.title;
        uiService.showToast(`Se ha eliminado "${name}" y todo su progreso`, "trash-2");

        uiService.closeModal();

        if (this.onDeleteSuccess) {
            this.onDeleteSuccess();
        }
    }
}