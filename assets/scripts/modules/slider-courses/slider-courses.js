import { uiService } from '../../core/ui.service.js';

export class SliderCourses {
    constructor(courses) {
        this.courses = courses;
        this.currentIndex = 0;
        this.templatePath = './assets/scripts/modules/slider-courses/slider-courses.html';
        this.autoplayInterval = null;
    }

async render() {
        const template = await uiService.fetchTemplate(this.templatePath);
        if (!template) return '';

        let slidesHTML = '';
        let dotsHTML = '';

        this.courses.forEach((course, index) => {
            const activeClass = index === 0 ? 'active' : '';

            const titleParts = course.courseName.split(':');
            let formattedTitle = '';

            if (titleParts.length > 1) {
                formattedTitle = `
                    <span class="title-main">${titleParts[0].trim()}:</span>
                    <span class="title-sub">${titleParts[1].trim()}</span>
                `;
            } else {
                formattedTitle = `<span class="title-main">${course.courseName}</span>`;
            }

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = course.courseDesc;
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            
            slidesHTML += `
                <div class="slide ${activeClass}" 
                     style="background-image: url('${course.image}')" 
                     onclick="location.hash='#cursos'">
                    <div class="slide-info">
                        <h2 class="slide-title">
                            ${formattedTitle}
                        </h2>
                        <p class="slide-description">${plainText}</p>
                        <div class="slide-hint">Ver catálogo <i data-lucide="arrow-right"></i></div>
                    </div>
                </div>`;

            dotsHTML += `<span class="dot ${activeClass}" data-index="${index}"></span>`;
        });

        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        
        const container = doc.getElementById('slides-container');
        const dotsContainer = doc.getElementById('slider-dots');

        if (container) container.innerHTML = slidesHTML;
        if (dotsContainer) dotsContainer.innerHTML = dotsHTML;

        return doc.body.innerHTML;
    }
    
    init() {
        const next = document.getElementById('slider-next');
        const prev = document.getElementById('slider-prev');
        const dots = document.querySelectorAll('.dot');

        if (next) next.onclick = (e) => { e.stopPropagation(); this.move(1); this.resetAutoplay(); };
        if (prev) prev.onclick = (e) => { e.stopPropagation(); this.move(-1); this.resetAutoplay(); };

        dots.forEach(dot => {
            dot.onclick = (e) => {
                e.stopPropagation();
                const index = parseInt(dot.dataset.index);
                this.jumpTo(index);
                this.resetAutoplay();
            };
        });

        this.startAutoplay();
        uiService.refreshIcons();
    }

    move(step) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        if (slides.length === 0) return;

        slides[this.currentIndex].classList.remove('active');
        dots[this.currentIndex].classList.remove('active');

        this.currentIndex = (this.currentIndex + step + this.courses.length) % this.courses.length;

        slides[this.currentIndex].classList.add('active');
        dots[this.currentIndex].classList.add('active');
        uiService.refreshIcons();
    }

    jumpTo(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        
        slides[this.currentIndex].classList.remove('active');
        dots[this.currentIndex].classList.remove('active');

        this.currentIndex = index;

        slides[this.currentIndex].classList.add('active');
        dots[this.currentIndex].classList.add('active');
        uiService.refreshIcons();
    }

    startAutoplay() {
        if (this.autoplayInterval) clearInterval(this.autoplayInterval);
        this.autoplayInterval = setInterval(() => this.move(1), 7000);
    }

    resetAutoplay() {
        this.startAutoplay();
    }
}