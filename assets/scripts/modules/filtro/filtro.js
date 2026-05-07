export class Filtro {
    constructor(courses, onFilterChange) {
        this.courses = courses;
        this.onFilterChange = onFilterChange;
        this.categories = this._extractCategories(courses);
    }

    _extractCategories(courses) {
        const cats = [...new Set(courses.map(c => c.category))];
        return ['Todos', ...cats];
    }

    async render() {
          const response = await fetch('./assets/scripts/modules/filtro/filtro.html');
        const template = await response.text();

        const placeholder = document.createElement('div');
        placeholder.innerHTML = template;

        const btnContainer = placeholder.querySelector('#filter-btns');
        btnContainer.innerHTML = this.categories.map(cat => `
            <button class="filter-btn ${cat === 'Todos' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        const selectContainer = placeholder.querySelector('#filter-select');
        selectContainer.innerHTML = this.categories.map(cat => `
            <option value="${cat}">${cat}</option>
        `).join('');

        return placeholder.innerHTML;
    }

    init() {
        const btns = document.querySelectorAll('.filter-btn');
        const select = document.getElementById('filter-select');

        btns.forEach(btn => {
            btn.onclick = (e) => {
                btns.forEach(b => b.classList.remove('active'));
                const target = e.currentTarget;
                target.classList.add('active');

                if(select) select.value = target.dataset.category;
                
                this.onFilterChange(target.dataset.category);
            };
        });

        if (select) {
            select.onchange = (e) => {
                const val = e.target.value;

                btns.forEach(b => {
                    b.classList.toggle('active', b.dataset.category === val);
                });

                this.onFilterChange(val);
            };
        }
    }
}