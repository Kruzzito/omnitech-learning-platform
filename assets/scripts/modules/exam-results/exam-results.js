import { uiService } from '../../core/ui.service.js';
import { progressService } from '../../core/progress.service.js';
import { courseService } from '../../core/course.service.js';

export class ExamResults {
    constructor(grade, coursePalette, correctCount, totalQuestions, courseId = null, lessonTitle = '') {
        this.grade = grade;
        this.palette = (typeof coursePalette === 'string') ? coursePalette : (coursePalette?.name || 'palette-blue');
        this.correctCount = correctCount;
        this.totalQuestions = totalQuestions;
        this.isPassed = grade >= 70;
        this.courseId = courseId;
        this.lessonTitle = lessonTitle;
        this.templatePath = './assets/scripts/modules/exam-results/exam-results.html';
    }

    async show(forceFinishedView = false) {
        try {
  
            let html = await uiService.fetchTemplate(this.templatePath);
            const user = JSON.parse(localStorage.getItem('omnitech_perfil'));
            const course = courseService.getCourseById(this.courseId);

            const rawProgress = progressService._getRawProgress();
            const courseData = rawProgress[this.courseId] || { grades: {} };
            const gradesArray = Object.values(courseData.grades);
            
            const avg = gradesArray.length > 0 
                ? Math.round(gradesArray.reduce((a, b) => a + b, 0) / gradesArray.length) 
                : this.grade;

            let medalClass = 'medal-bronze';
            if (avg >= 95) medalClass = 'medal-gold';
            else if (avg >= 86) medalClass = 'medal-silver';

            const firstName = user?.nombres ? user.nombres.trim().split(' ')[0].toUpperCase() : 'ESTUDIANTE';

            const getShortTag = (text) => text ? text.split(':')[0].trim() : '';

            const cleanCourseTag = getShortTag(course?.courseName || 'Curso OmniTech');
            const fullLessonName = this.lessonTitle || 'Lección';

            const motivator = this.isPassed 
                ? "¡Sigue así! Cada paso te acerca más a tu certificación profesional." 
                : "No te detengas. El aprendizaje es un camino de persistencia, ¡tú puedes!";

            const config = {
                'status-class': this.isPassed ? 'status-pass' : 'status-fail',
                'emoji': this.isPassed ? '😎' : '🤯',
                'status-title': this.isPassed ? 'EXCELENTE' : 'ÁNIMO',
                'user-name': firstName,
                'course-image': course?.image || './assets/img/default-course.jpg',
                'course-name': cleanCourseTag,
                'lesson-name': fullLessonName, 
                'status-message': this.isPassed ? 'Aprobaste con éxito' : 'Sigue practicando en',
                'grade': this.grade,
                'correct-text': `${this.correctCount}/${this.totalQuestions} respuestas correctas`,
                'motivator': motivator,
                'btn-text': this.isPassed ? 'CONTINUAR' : 'REINTENTAR',
                
                'share-hidden': this.isPassed ? '' : 'hidden',
                'view-exam-hidden': forceFinishedView ? 'hidden' : '',
                'view-finished-hidden': forceFinishedView ? '' : 'hidden',
                
                'user-foto': user?.foto || '',
                'final-avg': avg,
                'medal-class': medalClass
            };

            Object.keys(config).forEach(key => {
                const regex = new RegExp(`{{${key}}}`, 'g');
                html = html.replace(regex, config[key]);
            });

            uiService.openModal(html, this.palette);

            if (forceFinishedView || (this.isPassed && this.grade >= 90)) {
                this._playSuccessSound();
                if (typeof confetti === 'function') {
                    this._launchConfetti(['#FFD700', '#C0C0C0', '#CD7F32']);
                }
            }

            setTimeout(() => {
                const btnAction = document.getElementById('btn-result-action');
                const btnFinish = document.getElementById('btn-finish-all');
                const btnShareExam = document.getElementById('btn-share-exam');
                const btnShareFinal = document.getElementById('btn-share-results');

                if (btnAction) {
                    btnAction.onclick = () => {
                        if (this.isPassed && this._checkIfCourseFinished()) {
                            uiService.closeModal();
                            setTimeout(() => this.show(true), 300);
                        } else {
                            uiService.closeModal();
                        }
                    };
                }

                if (btnFinish) btnFinish.onclick = () => uiService.closeModal();

                if (btnShareExam) {
                    btnShareExam.onclick = async () => {
                        uiService.showToast("Preparando kit de compartido...", "info");

                        await this._shareAchievement(firstName, fullLessonName, 'view-exam-result');
                    };
                }

                if (btnShareFinal) {
                    btnShareFinal.onclick = async () => {
                        uiService.showToast("Preparando kit de graduación...", "info");
                        await this._shareAchievement(firstName, cleanCourseTag, 'view-course-finished');
                    };
                }

                uiService.refreshIcons();
            }, 200);

        } catch (err) {
            console.error("Error crítico en ExamResults.show():", err);
        }
    }

    async _shareAchievement(name, title, elementId) {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        try {

            const promoLink = document.createElement('div');
            promoLink.style.cssText = "color:#2563eb; font-size:11px; margin-top:10px; font-weight:bold; opacity:0.8; text-align:center;";
            promoLink.innerText = "Aprende gratis en: omnitech-learning.web.app";
            targetElement.appendChild(promoLink);

            const canvas = await html2canvas(targetElement, {
                backgroundColor: '#0a0a0f',
                scale: 2,
                useCORS: true
            });

            targetElement.removeChild(promoLink);

            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            const file = new File([blob], `Logro_OmniTech_${name}.png`, { type: 'image/png' });

            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Mi Progreso en OmniTech',
                    text: `¡Mira mi avance en el curso de ${title}! 🚀\nCapacítate tú también en: ${window.location.origin}`
                });
            } else {
                const link = document.createElement('a');
                link.download = `Logro_OmniTech_${name}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
                uiService.showToast("Imagen guardada. ¡Compártela!", "success");
            }
        } catch (err) {
            console.error("Error al compartir:", err);
        }
    }

    _checkIfCourseFinished() {
        if (!this.courseId) return false;
        const course = courseService.getCourseById(this.courseId);
        if (!course) return false;
        let totalLessons = 0;
        course.modules.forEach(m => totalLessons += (m.lessons?.length || 0));
        return progressService.getCoursePercentage(this.courseId, totalLessons) === 100;
    }

    _playSuccessSound() {
        const audio = new Audio('./assets/audio/success.mp3');
        audio.volume = 0.4;
        audio.play().catch(() => {});
    }

    _launchConfetti(colors) {
        if (typeof confetti !== 'function') return;
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 5000, 
            colors: colors
        });
    }
}