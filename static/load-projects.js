// static/load-projects.js - КОРИГИРАН ВАРИАНТ

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

// Локални преводи само за проектите
const localProjectTranslations = {
    "projects.advantages": {
        "bg": "Предимства:",
        "en": "Advantages:",
        "de": "Vorteile:"
    },
    "platforms.ha": {
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
    "platforms.alexa": {
        "bg": "Alexa",
        "en": "Alexa",
        "de": "Alexa"
    },
    "platforms.google": {
        "bg": "Google",
        "en": "Google",
        "de": "Google"
    }
};

async function loadAllProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) {
        console.error('Не е намерен контейнер за проекти!');
        return;
    }
    
    // Показване на съобщение за зареждане
    container.innerHTML = '<div class="loading-projects">Зареждане на проектите...</div>';
    
    allProjects = []; // Изчистване на старите проекти
    
    // Зареждане на всички JSON файлове
    for (const file of projectFiles) {
        try {
            console.log(`Зареждане на: ${file}`);
            const response = await fetch(file);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const projectData = await response.json();
            allProjects.push(projectData);
            console.log(`✅ Успешно зареден: ${projectData.title?.bg || file}`);
            
        } catch (error) {
            console.error(`❌ Грешка при зареждане на ${file}:`, error);
            
            // Показване на грешка в контейнера
            const errorDiv = document.createElement('div');
            errorDiv.className = 'project-error';
            errorDiv.innerHTML = `<strong>Грешка при зареждане на ${file}:</strong> ${error.message}`;
            container.appendChild(errorDiv);
        }
    }
    
    // Сортиране по ID
    allProjects.sort((a, b) => (a.id || 0) - (b.id || 0));
    
    console.log(`✅ Заредени общо ${allProjects.length} проекта`);
    renderProjects();
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const projectsSection = document.getElementById('projects');
    
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
    const title = project.title?.[currentLanguage] || project.title?.bg || 'Без заглавие';
    const imageAlt = project.imageAlt?.[currentLanguage] || project.imageAlt?.bg || 'Изображение';
    const buttonText = project.buttonText?.[currentLanguage] || project.buttonText?.bg || 'Към проекта';
    
    const platformsHTML = generatePlatformsHTML(project.platforms || []);
    const advantagesHTML = generateAdvantagesHTML(project.advantages || []);
    
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
                    <h4>${localProjectTranslations["projects.advantages"]?.[currentLanguage] || "Предимства:"}</h4>
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
        const isActive = !platform.includes('_inactive');
        const platformClass = isActive ? 'platform-badge' : 'platform-badge inactive';
        const platformKey = platform.replace('_inactive', '').toLowerCase();
        const platformText = localProjectTranslations[`platforms.${platformKey}`]?.[currentLanguage] || 
                           localProjectTranslations[`platforms.${platformKey}`]?.bg || 
                           platformKey.toUpperCase();
        
        return `<span class="${platformClass}">${platformText}</span>`;
    }).join('');
}

function generateAdvantagesHTML(advantages) {
    if (!advantages || advantages.length === 0) {
        return '<li>Няма информация за предимства</li>';
    }
    
    return advantages.map(advantage => {
        // Проверка дали advantage е обект или низ
        if (typeof advantage === 'object') {
            const text = advantage[currentLanguage] || advantage.bg || JSON.stringify(advantage);
            return `<li>${text}</li>`;
        } else {
            return `<li>${advantage}</li>`;
        }
    }).join('');
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
    }, 1000);
});

// Експорт на функции за достъп от други скриптове
window.ProjectManager = {
    loadAllProjects,
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getAllProjects: () => allProjects
};