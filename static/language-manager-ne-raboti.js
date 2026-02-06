// static/language-manager.js
document.addEventListener('DOMContentLoaded', function() {
    // Зареждане на предпочитания език
    const preferredLang = localStorage.getItem('preferredLanguage') || 'bg';
    setLanguage(preferredLang);
    
    // Слушатели за бутоните за смяна на език
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

function setLanguage(lang) {
    // Запазване на избрания език
    localStorage.setItem('preferredLanguage', lang);
    
    // Обновяване на активния бутон
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Превод на всички елементи с data-translate атрибут
    translatePage(lang);
    
    // Изпращане на събитие за смяна на език
    document.dispatchEvent(new Event('languageChanged'));
}

function translatePage(lang) {
    // 1. Превод на статични елементи чрез translations.js (ако съществува)
    if (window.translations && window.translations[lang]) {
        // Превод на обикновените елементи
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (window.translations[lang][key]) {
                element.textContent = window.translations[lang][key];
            }
        });
        
        // Превод на placeholder текстове
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (window.translations[lang][key]) {
                element.setAttribute('placeholder', window.translations[lang][key]);
            }
        });
        
        // Превод на title атрибути
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (window.translations[lang][key]) {
                element.setAttribute('title', window.translations[lang][key]);
            }
        });
    }
    
    // 2. Превод на проектите (ако съществуват)
    if (window.allProjectsData) {
        translateProjects(lang);
    }
}

function translateProjects(lang) {
    // Обхождане на всички проекти в DOM и превод на съдържанието им
    document.querySelectorAll('.project-card').forEach((card, index) => {
        const projectId = parseInt(card.getAttribute('data-project-id') || (index + 1));
        const project = window.allProjectsData.find(p => p.id === projectId);
        
        if (!project) return;
        
        // Превод на заглавието
        const titleElement = card.querySelector('.project-title');
        if (titleElement && project.title && project.title[lang]) {
            titleElement.textContent = project.title[lang];
        }
        
        // Превод на alt текста за изображението
        const imageElement = card.querySelector('.project-image');
        if (imageElement && project.imageAlt && project.imageAlt[lang]) {
            imageElement.setAttribute('alt', project.imageAlt[lang]);
        }
        
        // Превод на предимствата
        const advantagesList = card.querySelector('.project-advantages-list');
        if (advantagesList && project.advantages) {
            advantagesList.innerHTML = '';
            project.advantages.forEach(advantage => {
                const li = document.createElement('li');
                li.textContent = advantage[lang] || advantage.en || advantage.bg || '';
                advantagesList.appendChild(li);
            });
        }
        
        // Превод на текста на бутона
        const buttonElement = card.querySelector('.project-button');
        if (buttonElement && project.buttonText && project.buttonText[lang]) {
            buttonElement.textContent = project.buttonText[lang];
        }
    });
}