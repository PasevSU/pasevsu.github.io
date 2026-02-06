// static/load-docs.js
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация на документационния модал
    initDocsModal();
    
    // Слушател за смяна на език - обновява модала ако е отворен
    document.addEventListener('languageChanged', function() {
        const docsModal = document.getElementById('docs-modal');
        if (docsModal && docsModal.style.display === 'block') {
            loadDocsIntoModal();
        }
    });
});

function initDocsModal() {
    const docsContainer = document.getElementById('docs-modal-content');
    if (!docsContainer) return;
    
    // Ако allDocs не е зареден, зареди го
    if (!window.allDocs) {
        console.error('allDocs не е зареден. Моля, проверете дали all-docs.js е включен.');
        docsContainer.innerHTML = '<div class="error-message">Грешка при зареждане на документите.</div>';
        return;
    }
    
    // Първоначално зареждане
    loadDocsIntoModal();
}

function loadDocsIntoModal() {
    const docsContainer = document.getElementById('docs-modal-content');
    const docsModal = document.getElementById('docs-modal');
    
    // Проверка дали модалът е видим
    if (!docsContainer) {
        return;
    }
    
    const currentLang = getCurrentLanguage();
    
    // Изчистване на контейнера
    docsContainer.innerHTML = '';
    
    // Зареждане на всеки документ
    window.allDocs.documents.forEach(doc => {
        const docItem = createDocListItem(doc, currentLang);
        docsContainer.appendChild(docItem);
    });
}

function createDocListItem(doc, lang) {
    const docDiv = document.createElement('div');
    docDiv.className = 'doc-item';
    
    // Създаване на хиперлинк за документа
    const docLink = document.createElement('a');
    docLink.href = doc.link || '#';
    docLink.className = 'doc-link-item';
    docLink.style.cssText = `
        display: block;
        text-decoration: none;
        color: inherit;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    `;
    
    // Ако няма линк, добавяме click event за отваряне на модал
    if (!doc.link || doc.link === '#') {
        docLink.addEventListener('click', function(e) {
            e.preventDefault();
            openDocModal(doc, lang);
        });
    } else {
        // Ако има линк, отваряме в нов таб
        docLink.target = '_blank';
        docLink.rel = 'noopener';
    }
    
    // Добавяне на hover ефект
    docLink.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        this.style.borderColor = 'var(--primary-color)';
    });
    
    docLink.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        this.style.borderColor = 'transparent';
    });
    
    // Използваме превод от JSON или fallback
    const title = doc.title[lang] || doc.title.en || doc.title.bg || 'Без заглавие';
    const description = doc.description[lang] || doc.description.en || doc.description.bg || 'Без описание';
    const linkText = doc.link ? '🔗 ' + getLinkText(lang) : '';
    
    docLink.innerHTML = `
        <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">
            ${title}
        </h4>
        <p style="color: #666; font-size: 0.95rem; margin: 0; line-height: 1.5;">
            ${description}
        </p>
        ${linkText ? `<div style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--primary-color);">${linkText}</div>` : ''}
    `;
    
    docDiv.appendChild(docLink);
    return docDiv;
}

function openDocModal(doc, lang) {
    // Създаване на модал за преглед на документа
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'doc-view-modal';
    modal.style.cssText = `
        display: block;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        overflow-y: auto;
    `;
    
    // Използваме превод от JSON или fallback
    const title = doc.title[lang] || doc.title.en || doc.title.bg || 'Без заглавие';
    const content = doc.content[lang] || doc.content.en || doc.content.bg || '<p>Няма налично съдържание.</p>';
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background-color: white;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 12px;
            width: 90%;
            max-width: 800px;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        ">
            <span class="close-doc" style="
                position: absolute;
                right: 1.5rem;
                top: 1rem;
                font-size: 2rem;
                font-weight: bold;
                color: #666;
                cursor: pointer;
                line-height: 1;
            ">&times;</span>
            
            <h3 style="color: var(--primary-color); margin-bottom: 1.5rem; padding-right: 2rem;">
                ${title}
            </h3>
            
            <div class="doc-content" style="
                max-height: 60vh;
                overflow-y: auto;
                padding-right: 10px;
                line-height: 1.6;
            ">
                ${content}
            </div>
            
            ${doc.link ? `
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">
                <a href="${doc.link}" target="_blank" style="
                    display: inline-block;
                    background: var(--primary-color);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: 600;
                ">
                    📄 ${getLinkText(lang)}
                </a>
            </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Затваряне на модала
    const closeBtn = modal.querySelector('.close-doc');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    });
    
    // Затваряне при клик извън модала
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    });
    
    // Затваряне с ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('doc-view-modal')) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    });
}

function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'bg';
}

function getLinkText(lang) {
    // Текст за линка в зависимост от езика
    const texts = {
        'en': 'Open full documentation',
        'bg': 'Отвори пълната документация',
        'de': 'Vollständige Dokumentation öffnen'
    };
    return texts[lang] || texts['bg'];
}

// Експорт на функциите за глобална употреба
window.loadDocsIntoModal = loadDocsIntoModal;
window.openDocModal = openDocModal;