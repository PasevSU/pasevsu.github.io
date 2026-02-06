// static/language-manager.js
class LanguageManager {
    constructor() {
        this.currentLang = this.getSavedLanguage();
        this.init();
    }

    getSavedLanguage() {
        const saved = localStorage.getItem('preferred-language');
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && translations[urlLang]) return urlLang;
        if (saved && translations[saved]) return saved;
        
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) return browserLang;
        
        return 'bg'; // default to Bulgarian
    }

    saveLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    init() {
        this.loadLanguage(this.currentLang);
        this.setupEventListeners();
    }

    loadLanguage(lang) {
        if (!translations[lang]) {
            console.error('Language not found:', lang);
            return;
        }

        document.documentElement.lang = lang;
        const langData = translations[lang];

        // Update text content
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                element.textContent = langData[key];
            } else {
                console.warn('Missing translation for key:', key, 'in language:', lang);
            }
        });

        // Update alt attributes
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (langData[key]) {
                element.alt = langData[key];
            } else {
                console.warn('Missing alt translation for key:', key, 'in language:', lang);
            }
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            } else {
                console.warn('Missing placeholder translation for key:', key, 'in language:', lang);
            }
        });

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update page title
        if (langData['footer.title']) {
            document.title = langData['footer.title'];
        }

        this.currentLang = lang;
        this.saveLanguage(lang);
        
        console.log('Language changed to:', lang);
    }

    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                if (translations[lang]) {
                    this.loadLanguage(lang);
                    
                    // Update URL
                    const url = new URL(window.location);
                    url.searchParams.set('lang', lang);
                    window.history.replaceState({}, '', url);
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// В края на файла language-manager.js добавете:
document.addEventListener('DOMContentLoaded', function() {
    // При смяна на език, проверяваме дали документационния модал е отворен
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(() => {
                const docsModal = document.getElementById('docs-modal');
                if (docsModal && docsModal.style.display === 'block') {
                    // Изпращаме събитие за обновяване на документацията
                    document.dispatchEvent(new Event('languageChanged'));
                }
            }, 100);
        });
    });
});