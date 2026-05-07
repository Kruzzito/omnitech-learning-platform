import { uiService } from '../../core/ui.service.js';

export class ViewerModal {
    constructor(course) {
        this.course = course;
        this.currentLesson = course.lessons[0];
        this.templatePath = './assets/scripts/modules/viewer-modal/viewer-modal.html';
    }

    async show() {
        let template = await uiService.fetchTemplate(this.templatePath);
        if (!template) return;

        uiService.openModal(template, this.course.palette || 'palette-emerald');

        this.hydrate();
        this.initEvents();
    }

    hydrate() {
        const lesson = this.currentLesson;
        document.getElementById('view-category').innerText = this.course.category;
        document.getElementById('view-title').innerText = lesson.title;
        document.getElementById('main-video').src = lesson.video;
        document.getElementById('view-desc').innerHTML = lesson.descHTML;
        document.getElementById('view-resumen').innerHTML = lesson.resumenHTML;
        document.getElementById('view-res-msg').innerHTML = `<p>${lesson.resMsg}</p>`;
        this.renderResources(lesson.resources);

        document.getElementById('view-quiz-msg').innerHTML = `<p>${lesson.quizMsg}</p>`;
        this.renderQuiz(lesson.quiz);

        uiService.refreshIcons();
    }

    renderResources(resources) {
        const list = document.getElementById('view-resources-list');
        if (!resources || resources.length === 0) {
            list.innerHTML = "<p class='empty-msg'>No hay archivos para esta lección.</p>";
            return;
        }

        list.innerHTML = resources.map(url => {
            const fileName = url.split('/').pop();
            return `
                <a href="${url}" class="resource-item" target="_blank" download>
                    <div class="resource-icon-box"><img src="./assets/icons/pdf.svg"></div>
                    <div class="resource-info">
                        <span class="res-name">${fileName}</span>
                    </div>
                    <i data-lucide="download"></i>
                </a>
            `;
        }).join('');
    }

    renderQuiz(questions) {
        const container = document.getElementById('quiz-container');
        if (!questions || questions.length === 0) return;

        container.innerHTML = questions.map((q, index) => `
            <div class="quiz-item">
                <p class="quiz-question"><strong>${index + 1}. ${q.q}</strong></p>
                <div class="quiz-options">
                    ${q.a.map((opt, i) => `
                        <label class="quiz-opt">
                            <input type="radio" name="q${index}" value="${i}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('') + `<button class="btn btn-primary" style="margin-top:2rem">Enviar Respuestas</button>`;
    }

    initEvents() {
        document.getElementById('close-viewer').onclick = () => uiService.closeModal();
        document.getElementById('close-viewer-x').onclick = () => uiService.closeModal();

        const tabs = document.querySelectorAll('.tab-link');
        tabs.forEach(tab => {
            tab.onclick = () => this.switchTab(tab.getAttribute('data-tab'));
        });
    }

    switchTab(tabId) {
        document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(`tab-${tabId}`).classList.add('active');
        uiService.refreshIcons();
    }
}