// ===================================================================================
// ФАЙЛ ЗА ЗАРЕЖДАНЕ И УПРАВЛЕНИЕ НА ДОКУМЕНТАЦИЯТА
// ===================================================================================
// Този файл се използва за:
// 1. Зареждане на документационните данни от all-docs.js
// 2. Показване на документите в модален прозорец
// 3. Управление на интерактивността (клик за показване на пълно съдържание)
// 4. Интеграция с езиковата система за автоматични преводи
// 5. Създаване на втори модален прозорец за пълно съдържание на документите
// ===================================================================================
// 000.02.0 ГЛОБАЛНИ КОМЕНТАРИ И НАСТРОЙКИ
// Този файл вече работи с преводите от translations.js
// ===================================================================================

// 000.02.1 ИНИЦИАЛИЗАЦИЯ ПРИ ЗАРЕЖДАНЕ НА DOM
document.addEventListener('DOMContentLoaded', function() {
    // 000.02.1.1 Инициализиране на документационния модал
    initDocsModal();
    
    // 000.02.1.2 Слушател за събитието "languageChanged" (от language-manager.js)
    document.addEventListener('languageChanged', function() {
        const docsModal = document.getElementById('docs-modal');
        if (docsModal && docsModal.style.display === 'block') {
            loadDocsIntoModal(); // Презареждане на документацията с новия език
        }
    });
});

// 000.02.2 ФУНКЦИЯ ЗА ИНИЦИАЛИЗИРАНЕ НА ДОКУМЕНТАЦИОННИЯ МОДАЛ
/**
 * Функцията инициализира документационния модал:
 * - Проверява дали контейнерът за документи съществува
 * - Проверява дали данните за документацията са заредени (allDocs)
 * - Извиква основната функция за зареждане на документите
 */
function initDocsModal() {
    const docsContainer = document.getElementById('docs-modal-content');
    if (!docsContainer) return;
    
    // 000.02.2.1 Проверка дали данните за документацията са заредени
    if (!window.allDocs) {
        console.error('allDocs не е зареден. Моля, проверете дали all-docs.js е включен.');
        docsContainer.innerHTML = '<div class="error-message">Грешка при зареждане на документите.</div>';
        return;
    }
    
    // 000.02.2.2 Първоначално зареждане на документацията
    loadDocsIntoModal();
}

// 000.02.3 ОСНОВНА ФУНКЦИЯ ЗА ЗАРЕЖДАНЕ НА ДОКУМЕНТИТЕ В МОДАЛА
/**
 * Основна функция за зареждане на всички документи в модала:
 * - Изчиства контейнера
 * - Определя текущия език
 * - Итерира през всички документи от allDocs
 * - Създава визуални елементи за всеки документ
 */
function loadDocsIntoModal() {
    const docsContainer = document.getElementById('docs-modal-content');
    const docsModal = document.getElementById('docs-modal');
    
    if (!docsContainer) return;
    
    const currentLang = getCurrentLanguage(); // Определяне на текущия език
    
    // 000.02.3.1 Изчистване на контейнера
    docsContainer.innerHTML = '';
    
    // 000.02.3.2 ИТЕРИРАНЕ ПРЕЗ ВСИЧКИ ДОКУМЕНТИ
    window.allDocs.documents.forEach(doc => {
        // 000.02.3.2.1 Създаване на елемент за всеки документ
        const docItem = createDocListItem(doc, currentLang);
        docsContainer.appendChild(docItem);
    });
}

// 000.02.4 ФУНКЦИЯ ЗА СЪЗДАВАНЕ НА ЕЛЕМЕНТ ЗА ДОКУМЕНТ
/**
 * Функция за създаване на визуален елемент за документ:
 * - Използва преводите от translations.js
 * - Създава карта за документа с заглавие, описание и връзка
 * - Добавя интерактивност (клик за отваряне на пълно съдържание)
 * - Добавя CSS анимации при ховър
 */
function createDocListItem(doc, lang) {
    const docDiv = document.createElement('div');
    docDiv.className = 'doc-item';
    
    // 000.02.4.1 КЛЮЧОВЕ ЗА ПРЕВОДИ (мапиране на ID към ключове за превод)
    const docKeys = {
        'repositories': 'doc.repositories',
        'automations': 'doc.automations',
        'config-methods': 'doc.config-methods'
    };
    
    const docKey = docKeys[doc.id] || doc.id;
    const langData = translations[lang];
    
    // 000.02.4.2 ВЗИМАНЕ НА ПРЕВОДИ ЗА СЕКЦИИТЕ
    const title = langData ? (langData[`${docKey}.title`] || doc.title) : doc.title;
    const description = langData ? (langData[`${docKey}.description`] || doc.description) : doc.description;
    const content = langData ? (langData[`${docKey}.content`] || doc.content) : doc.content;
    const linkText = doc.link ? '🔗 ' + getLinkText(lang) : '';
    
    // 000.02.4.3 СЪЗДАВАНЕ НА ХИПЕРЛИНК ЗА ДОКУМЕНТА
    const docLink = document.createElement('a');
    docLink.href = doc.link || '#';
    docLink.className = 'doc-link-item';
    
    // 000.02.4.3.1 ИНЛАЙН СТИЛОВЕ ЗА КАРТАТА НА ДОКУМЕНТА
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
    
    // 000.02.4.4 ПРОВЕРКА ЗА ЛИНК И ДОБАВЯНЕ НА СЛУШАТЕЛИ
    if (!doc.link || doc.link === '#') {
        docLink.addEventListener('click', function(e) {
            e.preventDefault();
            openDocModal(doc, lang, content); // Подаваме и съдържанието
        });
    } else {
        docLink.target = '_blank';
        docLink.rel = 'noopener';
    }
    
    // 000.02.4.5 АНИМАЦИЯ ПРИ ХОВЪР
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
    
    // 000.02.4.6 СЪЗДАВАНЕ НА СЪДЪРЖАНИЕТО НА КАРТАТА
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

// 000.02.5 ФУНКЦИЯ ЗА ОТВАРЯНЕ НА МОДАЛ СЪС СЪДЪРЖАНИЕТО НА ДОКУМЕНТ
/**
 * Функция за отваряне на втори модален прозорец с пълното съдържание на документа:
 * - Създава нов модален елемент
 * - Показва заглавие и пълно съдържание на документа
 * - Добавя връзка към пълната документация (ако има)
 * - Добавя бутон за затваряне и функционалност за навигация
 */
function openDocModal(doc, lang, content) {
    // 000.02.5.1 КЛЮЧОВЕ ЗА ПРЕВОДИ
    const docKeys = {
        'repositories': 'doc.repositories',
        'automations': 'doc.automations',
        'config-methods': 'doc.config-methods'
    };
    
    const docKey = docKeys[doc.id] || doc.id;
    const langData = translations[lang];
    
    // 000.02.5.2 ВЗИМАНЕ НА ПРЕВОДИ
    const title = langData ? (langData[`${docKey}.title`] || doc.title) : doc.title;
    const docContent = content || doc.content;
    
    // 000.02.5.3 СЪЗДАВАНЕ НА МОДАЛЕН ЕЛЕМЕНТ
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'doc-view-modal';
    
    // 000.02.5.3.1 ИНЛАЙН СТИЛОВЕ ЗА МОДАЛА
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
    
    // 000.02.5.3.2 СЪЗДАВАНЕ НА СЪДЪРЖАНИЕТО НА МОДАЛА
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
                ${docContent}
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
    
    // 000.02.5.3.3 ДОБАВЯНЕ НА МОДАЛА КЪМ ДОКУМЕНТА
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // 000.02.5.4 СЛУШАТЕЛИ ЗА ЗАТВАРЯНЕ НА МОДАЛА
    const closeBtn = modal.querySelector('.close-doc');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    });
    
    // 000.02.5.5 ЗАТВАРЯНЕ ПРИ КЛИК ИЗВЪН МОДАЛА
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    });
    
    // 000.02.5.6 ЗАТВАРЯНЕ С ESC КЛАВИШ
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('doc-view-modal')) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    });
}

// 000.02.6 ПОМОЩНИ ФУНКЦИИ
/**
 * ПОМОЩНА ФУНКЦИЯ ЗА ВЗИМАНЕ НА ТЕКУЩИЯ ЕЗИК
 * Връща текущия език от localStorage или 'bg' по подразбиране
 */
function getCurrentLanguage() {
    return localStorage.getItem('preferred-language') || 'bg';
}

/**
 * ПОМОЩНА ФУНКЦИЯ ЗА ТЕКСТ НА ЛИНКА
 * Връща преведения текст за връзката към документацията
 */
function getLinkText(lang) {
    const langData = translations[lang];
    return langData ? (langData['doc.fullDocumentation'] || 'Отвори пълната документация') : 'Отвори пълната документация';
}

// 000.02.7 ЕКСПОРТ НА ФУНКЦИИ ЗА ГЛОБАЛНА УПОТРЕБА
// Прави функциите достъпни от други скриптове (например от index.html inline script)
window.loadDocsIntoModal = loadDocsIntoModal;
window.openDocModal = openDocModal;