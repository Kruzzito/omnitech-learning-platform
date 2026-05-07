
export const initResourceIcons = () => {
    const iconPath = 'assets/icons/';
    
    const fileConfig = {
        'pdf': { icon: 'pdf.svg', label: 'Documento PDF' },
        'texto': { icon: 'texto.svg', label: 'Procesador de Texto', ext: ['doc', 'docx', 'odt', 'txt'] },
        'calculo': { icon: 'calculo.svg', label: 'Hoja de Cálculo', ext: ['xls', 'xlsx', 'csv', 'ods'] },
        'presentaciones': { icon: 'presentaciones.svg', label: 'Presentación', ext: ['ppt', 'pptx', 'odp'] },
        'comprimidos': { icon: 'comprimidos.svg', label: 'Archivo Comprimido', ext: ['zip', 'rar', '7z', 'tar'] },
        'imagen': { icon: 'imagen.svg', label: 'Imagen o Gráfico', ext: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'] },
        'default': { icon: 'documento.svg', label: 'Recurso Académico' }
    };

    const cards = document.querySelectorAll('.resource-download-card');

    cards.forEach(card => {
        const url = card.getAttribute('href').toLowerCase();
        const extension = url.split('.').pop();
        
        let config = fileConfig.default;

        for (const key in fileConfig) {
            if (fileConfig[key].ext && fileConfig[key].ext.includes(extension)) {
                config = fileConfig[key];
                break;
            } else if (key === extension) { // Caso directo para PDF
                config = fileConfig[key];
                break;
            }
        }

        const fileName = card.querySelector('span')?.innerText || 'Descargar archivo';
        card.innerHTML = `
            <div class="resource-icon-frame">
                <img src="${iconPath}${config.icon}" alt="file-icon">
            </div>
            <div class="resource-info-text">
                <span class="resource-name">${fileName}</span>
                <span class="resource-type-label">${config.label}</span>
            </div>
        `;
    });
};