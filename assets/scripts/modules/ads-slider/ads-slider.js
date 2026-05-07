import { uiService } from '../../core/ui.service.js';

export class AdsSlider {
    constructor(adsData) {
        this.adsData = adsData;
        this.templatePath = './assets/scripts/modules/ads-slider/ads-slider.html';
        this.intervals = [];

        this.storeLogos = {
            "MERCADO LIBRE": "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png",
            "AMAZON": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "SAMSUNG": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/960px-Samsung_old_logo_before_year_2015.svg.png",
            "DEFAULT": "https://via.placeholder.com/150x50?text=OmniTech+Partner"
        };
    }

    getStoreLogo(storeName) {
        const normalized = storeName.trim().toUpperCase();
        return this.storeLogos[normalized] || this.storeLogos["DEFAULT"];
    }

    async render() {
        const template = await uiService.fetchTemplate(this.templatePath);
        if (!template) return '';

        const groups = this.adsData.reduce((acc, ad) => {
            if (!acc[ad.store]) acc[ad.store] = [];
            acc[ad.store].push(ad);
            return acc;
        }, {});

        let finalHTML = '';

        for (const storeName in groups) {
            const ads = groups[storeName];
            const logoUrl = this.getStoreLogo(storeName);
            
            let storeHTML = `
                <div class="store-ads-group" data-store="${storeName}">
                    <div class="store-header">
                        <img src="${logoUrl}" alt="Logo de ${storeName}" class="store-logo">
                    </div>
                    <div class="ads-slider-container">
                        <div class="ads-track">
                            ${this._renderAdItems(ads)}
                        </div>
                        <div class="ads-controls">
                            <button class="ad-prev"><i data-lucide="chevron-left"></i></button>
                            <button class="ad-next"><i data-lucide="chevron-right"></i></button>
                        </div>
                    </div>
                </div>`;
            
            finalHTML += storeHTML;
        }

        return finalHTML;
    }

    _renderAdItems(ads) {
        return ads.map(ad => `
            <div class="ad-item">
                <a href="${ad.url}" target="_blank" class="ad-link">
                    <div class="ad-image-wrapper">
                        <img src="${ad.image}" alt="${ad.product}" loading="lazy">
                    </div>
                    <div class="ad-info">
                        <h4>${ad.product}</h4>
                        <p>${ad.description}</p>
                    </div>
                </a>
            </div>
        `).join('');
    }

    init() {
        const groups = document.querySelectorAll('.store-ads-group');
        
        groups.forEach(group => {
            const track = group.querySelector('.ads-track');
            const items = group.querySelectorAll('.ad-item');
            const nextBtn = group.querySelector('.ad-next');
            const prevBtn = group.querySelector('.ad-prev');
            let currentIdx = 0;

            const updateSlider = () => {
                track.style.transform = `translateX(-${currentIdx * 100}%)`;
            };

            const nextSlide = () => {
                currentIdx = (currentIdx + 1) % items.length;
                updateSlider();
            };

            const prevSlide = () => {
                currentIdx = (currentIdx - 1 + items.length) % items.length;
                updateSlider();
            };

            nextBtn.onclick = () => { nextSlide(); resetAutoplay(); };
            prevBtn.onclick = () => { prevSlide(); resetAutoplay(); };

            let autoPlayInterval = setInterval(nextSlide, 5000);

            const resetAutoplay = () => {
                clearInterval(autoPlayInterval);
                autoPlayInterval = setInterval(nextSlide, 5000);
            };

            this.intervals.push(autoPlayInterval);
        });

        uiService.refreshIcons();
    }
}