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
    // Проверка дали има преводи
    if (!translations || !translations[lang]) {
        console.error('Няма преводи за език:', lang);
        return;
    }
    
    // Превод на обикновените елементи
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Превод на placeholder текстове
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Превод на title атрибути
    document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });
}