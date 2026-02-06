// static/load-projects.js - АКТУАЛИЗИРАН ВАРИАНТ САМО С БЪЛГАРСКИ ПРЕВОДИ

let currentLanguage = 'bg';
let allProjects = [];

// Локални преводи само за проектите (само български)
const localProjectTranslations = {
    "projects.advantages": "Предимства:",
    "platforms.ha": "HomeAssistant",
    "platforms.web": "WEB",
    "platforms.android": "ANDROID",
    "platforms.alexa": "Alexa",
    "platforms.google": "Google"
};

function loadAllProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) {
        console.error('Не е намерен контейнер за проекти!');
        return;
    }
    
    // Показване на съобщение за зареждане
    container.innerHTML = '<div class="loading-projects">Зареждане на проектите...</div>';
    
    // Проверяваме дали има вградени данни
    if (window.allProjectsData && window.allProjectsData.length > 0) {
        allProjects = window.allProjectsData;
        console.log(`✅ Заредени ${allProjects.length} проекта от вградени данни`);
    } else {
        // Ако няма вградени данни, използваме тестови
        allProjects = getFallbackProjects();
        console.log(`⚠️ Използвани тестови проекти: ${allProjects.length}`);
    }
    
    // Сортиране по ID
    allProjects.sort((a, b) => (a.id || 0) - (b.id || 0));
    
    console.log(`✅ Заредени общо ${allProjects.length} проекта`);
    renderProjects();
}

// Тестови проекти за fallback
function getFallbackProjects() {
    return [
        {
            "id": 1,
            "title": "🛜 Zigbee мрежа (Тест)",
            "platforms": ["ha"],
            "image": "static/img/banner-w-bg.png",
            "imageAlt": "Zigbee мрежа",
            "advantages": [
                "Тестово предимство 1",
                "Тестово предимство 2",
                "Тестово предимство 3"
            ],
            "link": "#",
            "buttonText": "↪️ КЪМ ПРОЕКТА ▶️"
        },
        {
            "id": 2,
            "title": "🛒 Пазарна листа (Тест)",
            "platforms": ["ha", "android"],
            "image": "static/img/banner-w-bg.png",
            "imageAlt": "Списък за пазаруване",
            "advantages": [
                "Тестово предимство A",
                "Тестово предимство B"
            ],
            "link": "#",
            "buttonText": "↪️ КЪМ ПРОЕКТА ▶️"
        }
    ];
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) {
        console.error('Не е намерен контейнер за проекти!');
        return;
    }
    
    if (allProjects.length === 0) {
        container.innerHTML = '<div class="error-message">Няма заредени проекти</div>';
        return;
    }
    
    // Генериране на HTML за всички проекти
    container.innerHTML = allProjects.map(project => generateProjectHTML(project)).join('');
    
    console.log(`✅ Рендирани ${allProjects.length} проекта`);
}

function generateProjectHTML(project) {
    // Взимане на заглавие на текущия език
    const title = getProjectTranslation(project, 'title');
    const imageAlt = getProjectTranslation(project, 'imageAlt');
    const buttonText = getProjectTranslation(project, 'buttonText');
    
    const platformsHTML = generatePlatformsHTML(project.platforms || []);
    const advantagesHTML = generateAdvantagesHTML(project.advantages || [], project.id);
    
    return `
        <div class="project-card">
            <div class="project-header">
                <h3>${title}</h3>
                <div class="platform-badges">
                    ${platformsHTML}
                </div>
            </div>
            <div class="project-content">
                ${project.image ? `
                <div class="project-image">
                    <img src="${project.image}" alt="${imageAlt}" style="max-width:100%; height:auto; display:block;">
                </div>
                ` : ''}
                <div class="project-info">
                    <h4>${localProjectTranslations["projects.advantages"] || "Предимства:"}</h4>
                    <ul>
                        ${advantagesHTML}
                    </ul>
                    ${project.link ? `
                    <a class="project-link" href="${project.link}" target="_blank" rel="noopener">
                        ${buttonText}
                    </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function getProjectTranslation(project, field) {
    // Взимане на превод от translations.js
    const projectId = project.id;
    const translationKey = getTranslationKeyForProject(projectId, field);
    
    if (translations[currentLanguage] && translations[currentLanguage][translationKey]) {
        return translations[currentLanguage][translationKey];
    }
    
    // Връщане на българския превод ако няма за текущия език
    if (translations['bg'] && translations['bg'][translationKey]) {
        return translations['bg'][translationKey];
    }
    
    // Връщане на оригиналната стойност
    return project[field] || '';
}

function getTranslationKeyForProject(projectId, field) {
    // Мапване на ID на проекти към имена
    const projectNames = {
        1: 'zigbee',
        2: 'shopping',
        3: 'wled',
        4: 'tasmota',
        5: 'hass2zigbee',
        6: 'voice',
        7: 'fingerbot',
        8: 'eco',
        9: 'away',
        10: 'timer'
    };
    
    const projectName = projectNames[projectId] || `project${projectId}`;
    
    // Поле -> ключ за превод
    const fieldMap = {
        'title': 'title',
        'imageAlt': 'imageAlt',
        'buttonText': 'button'
    };
    
    const fieldKey = fieldMap[field] || field;
    
    return `projects.${projectName}.${fieldKey}`;
}

function generatePlatformsHTML(platforms) {
    if (!platforms || platforms.length === 0) return '';
    
    return platforms.map(platform => {
        const isActive = !platform.includes('_inactive');
        const platformClass = isActive ? 'platform-badge' : 'platform-badge inactive';
        const platformKey = platform.replace('_inactive', '').toLowerCase();
        const platformText = localProjectTranslations[`platforms.${platformKey}`] || 
                           platformKey.toUpperCase();
        
        return `<span class="${platformClass}">${platformText}</span>`;
    }).join('');
}

function generateAdvantagesHTML(advantages, projectId) {
    if (!advantages || advantages.length === 0) {
        return '<li>Няма информация за предимства</li>';
    }
    
    return advantages.map((advantage, index) => {
        // Опитваме първо да вземем превод от translations.js
        const projectName = getProjectNameById(projectId);
        const translationKey = `projects.${projectName}.adv${index + 1}`;
        
        if (translations[currentLanguage] && translations[currentLanguage][translationKey]) {
            return `<li>${translations[currentLanguage][translationKey]}</li>`;
        }
        
        // Ако няма превод, използваме оригиналния текст
        if (typeof advantage === 'string') {
            return `<li>${advantage}</li>`;
        } else {
            return `<li>${JSON.stringify(advantage)}</li>`;
        }
    }).join('');
}

function getProjectNameById(projectId) {
    const projectNames = {
        1: 'zigbee',
        2: 'shopping',
        3: 'wled',
        4: 'tasmota',
        5: 'hass2zigbee',
        6: 'voice',
        7: 'fingerbot',
        8: 'eco',
        9: 'away',
        10: 'timer'
    };
    
    return projectNames[projectId] || `project${projectId}`;
}

function setLanguage(lang) {
    if (currentLanguage === lang) return;
    
    currentLanguage = lang;
    console.log(`🌍 Сменен език на: ${lang}`);
    
    // Рендиране на проектите с новия език
    renderProjects();
}

// Инициализация при зареждане на страницата
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Инициализация на зареждане на проекти...');
    
    // Задаваме текущия език от languageManager
    if (window.languageManager && window.languageManager.currentLang) {
        currentLanguage = window.languageManager.currentLang;
    }
    
    // Свързване на бутоните за език
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Зареждане на проектите след малко забавяне
    setTimeout(() => {
        loadAllProjects();
    }, 500);
});

// Слушане за смяна на езика от language-manager
document.addEventListener('DOMContentLoaded', function() {
    // Слушане за смяна на езика
    document.addEventListener('languageChanged', function() {
        // Актуализиране на текущия език от languageManager
        if (window.languageManager && window.languageManager.currentLang) {
            currentLanguage = window.languageManager.currentLang;
            renderProjects();
        }
    });
});

// Експорт на функции за достъп от други скриптове
window.ProjectManager = {
    loadAllProjects,
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getAllProjects: () => allProjects
};