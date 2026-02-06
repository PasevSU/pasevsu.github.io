// static/load-projects.js - АКТУАЛИЗИРАН

const projectFiles = [
    'projects/project1_zigbee.json',
    'projects/project2_shopping.json',
    'projects/project3_wled.json',
    'projects/project4_tasmota.json',
    'projects/project5_hass2zigbee.json',
    'projects/project6_voice.json',
    'projects/project7_fingerbot.json',
    'projects/project8_eco.json',
    'projects/project9_away.json',
    'projects/project10_timer.json'
];

let currentLanguage = 'bg';
let allProjects = [];

// ПРЕИМЕНУВАНО от "translations" на "projectTranslations"
const projectTranslations = {
    "projects.advantages": {
        "bg": "Предимства:",
        "en": "Advantages:",
        "de": "Vorteile:"
    },
    "platforms.homeassistant": {
        "bg": "HomeAssistant",
        "en": "HomeAssistant",
        "de": "HomeAssistant"
    },
    "platforms.web": {
        "bg": "WEB",
        "en": "WEB",
        "de": "WEB"
    },
    "platforms.android": {
        "bg": "ANDROID",
        "en": "ANDROID",
        "de": "ANDROID"
    },
    "projects.title": {
        "bg": "🛠️ ПРОЕКТИ",
        "en": "🛠️ PROJECTS",
        "de": "🛠️ PROJEKTE"
    }
};

async function loadAllProjects() {
    const container = document.getElementById('projects-container');
    
    // Проверка на локацията
    const isFileProtocol = window.location.protocol === 'file:';
    
    for (const file of projectFiles) {
        try {
            let fileUrl = file;
            
            // Ако сме в file:// протокол, променяме пътя
            if (isFileProtocol) {
                // Премахваме 'static/' от началото
                fileUrl = file.replace('static/', '');
            }
            
            const response = await fetch(fileUrl);
            // ... останалия код ...
        } catch (error) {
            console.error(`❌ Грешка при зареждане на ${file}:`, error);
        }
    }
}    
    // Сортиране по ID
    allProjects.sort((a, b) => a.id - b.id);
    
    console.log(`✅ Заредени общо ${allProjects.length} проекта`);
    renderProjects();
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const projectsSection = document.getElementById('projects');
    
    if (!container) return;
    
    if (allProjects.length === 0) {
        container.innerHTML = '<div class="error-message">Няма заредени проекти</div>';
        return;
    }
    
    // Актуализиране на заглавието на секцията
    if (projectsSection) {
        const title = projectsSection.querySelector('h2');
        if (title && projectTranslations["projects.title"]) {
            title.textContent = projectTranslations["projects.title"][currentLanguage] || projectTranslations["projects.title"].bg;
        }
    }
    
    // Генериране на HTML за всички проекти
    container.innerHTML = allProjects.map(project => generateProjectHTML(project)).join('');
}

function generateProjectHTML(project) {
    const title = project.title[currentLanguage] || project.title.bg;
    const imageAlt = project.imageAlt[currentLanguage] || project.imageAlt.bg;
    const buttonText = project.buttonText[currentLanguage] || project.buttonText.bg;
    
    const platformsHTML = generatePlatformsHTML(project.platforms);
    const advantagesHTML = generateAdvantagesHTML(project.advantages);
    
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
                    <h4>${projectTranslations["projects.advantages"][currentLanguage] || projectTranslations["projects.advantages"].bg}</h4>
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

function generatePlatformsHTML(platforms) {
    if (!platforms || platforms.length === 0) return '';
    
    return platforms.map(platform => {
        const isActive = !platform.includes('inactive');
        const platformClass = isActive ? 'platform-badge' : 'platform-badge inactive';
        const platformKey = platform.replace('_inactive', '').toLowerCase();
        const platformText = projectTranslations[`platforms.${platformKey}`] ? 
            projectTranslations[`platforms.${platformKey}`][currentLanguage] || 
            projectTranslations[`platforms.${platformKey}`].bg : platformKey.toUpperCase();
        
        return `<span class="${platformClass}">${platformText}</span>`;
    }).join('');
}

function generateAdvantagesHTML(advantages) {
    if (!advantages || advantages.length === 0) {
        return '<li>Няма информация за предимства</li>';
    }
    
    return advantages.map(advantage => {
        const text = advantage[currentLanguage] || advantage.bg || advantage;
        return `<li>${text}</li>`;
    }).join('');
}

function setLanguage(lang) {
    if (currentLanguage === lang) return;
    
    currentLanguage = lang;
    console.log(`🌍 Сменен език на: ${lang}`);
    
    // Актуализиране на бутоните за език
    updateLanguageButtons(lang);
    
    // Рендиране на проектите с новия език
    renderProjects();
    
    // Актуализиране на други елементи от страницата (ако са се заредили)
    setTimeout(() => {
        updatePageLanguage(lang);
    }, 100);
}

function updateLanguageButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === activeLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updatePageLanguage(lang) {
    // Тук може да добавите актуализация на други елементи, ако е необходимо
    // Внимание: Не използвайте 'translations' тук, защото може да е вече дефиниран в друг файл
    console.log('Актуализиран език на страницата:', lang);
}

// Инициализация при зареждане на страницата
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Зареждане на проекти...');
    
    // Свързване на бутоните за език
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Поставяне на активния език (по подразбиране BG)
    setTimeout(() => {
        const bgBtn = document.querySelector('.lang-btn[data-lang="bg"]');
        if (bgBtn) {
            bgBtn.classList.add('active');
        }
    }, 100);
    
    // Зареждане на проектите
    setTimeout(() => {
        loadAllProjects();
    }, 500);
});

// Експорт на функции за достъп от други скриптове
window.ProjectManager = {
    loadAllProjects,
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getAllProjects: () => allProjects
};