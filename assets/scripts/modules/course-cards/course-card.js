import { progressService } from '../../core/progress.service.js';

export class CourseCard {
    constructor(courseData) {
        this.data = courseData;
        this.currentHash = window.location.hash || '#home';
    }

    async render() {

        const response = await fetch('./assets/scripts/modules/course-cards/course-card.html');
        let html = await response.text();
        const enrolled = JSON.parse(localStorage.getItem('omnitech_enrolled')) || [];
        const isEnrolled = enrolled.includes(this.data.id);
        const btnConfig = this._getButtonConfig(isEnrolled);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.data.courseDesc;
        const plainDescription = tempDiv.textContent || tempDiv.innerText || "";

        html = html
            .replace(/{{id}}/g, this.data.id.trim())
            .replace(/{{image}}/g, this.data.image)
            .replace(/{{title}}/g, this.data.courseName)
            .replace(/{{category}}/g, this.data.category)
            .replace(/{{description}}/g, plainDescription)
            .replace(/{{duration}}/g, this.data.duration)
            .replace('{{btnText}}', btnConfig.text)
            .replace('{{btnClass}}', btnConfig.class);

        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const cardElement = wrapper.firstElementChild;

        const progressArea = cardElement.querySelector('.progress-area');
        const unsubBtn = cardElement.querySelector('.btn-unsubscribe');

        if (this.currentHash === '#mis-cursos' && isEnrolled) {

            if (unsubBtn) unsubBtn.style.display = 'flex';

            const totalLessons = this.data.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
            const percentage = progressService.getCoursePercentage(this.data.id, totalLessons);

            const fill = cardElement.querySelector('.progress-fill');
            const text = cardElement.querySelector('.progress-text');

            if (fill) fill.style.width = `${percentage}%`;
            if (text) text.innerText = `${percentage}% completado`;
        } else {
            if (progressArea) progressArea.style.display = 'none';
        }

        return cardElement.outerHTML;
    }

    _getButtonConfig(isEnrolled) {

        if (this.currentHash === '#mis-cursos') {
            return { text: 'Continuar', class: 'btn-primary' };
        }
        
        if (isEnrolled) {
            return { text: 'Ya inscrito', class: 'btn-secondary' };
        }

        return { text: 'Inscribirse', class: 'btn-primary' };
    }
}