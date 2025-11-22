// Simple language translations
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.projects": "Projects", 
        "nav.about": "About",
        "nav.documentation": "Documentation",
        "nav.contact": "Contact",
        "nav.support": "Support",
        
        // Hero
        "hero.title": "🏠 HOME ASSISTANT PROJECTS AND DEVELOPMENTS",
        "hero.badge1": "🔧 Smart Home",
        "hero.badge2": "🧠 Automations", 
        "hero.badge3": "🌐 IoT Integrations",
        "hero.description": "Welcome to my Home Assistant repository! Here you'll find a collection of my personal Home Assistant projects, automations, configurations, and integrations — all carefully developed to simplify daily routines, enhance comfort, and save energy in the smart home environment.",
        "hero.cta": "Explore Projects",
        
        // Summary
        "summary.title": "💬 SUMMARY",
        "summary.item1.title": "Responsive Design",
        "summary.item1.text": "All elements and text automatically scale based on screen size while maintaining readability.",
        "summary.item2.title": "Clean Layout", 
        "summary.item2.text": "Easy to understand by both adults and children with minimal navigation.",
        "summary.item3.title": "Resource Optimization",
        "summary.item3.text": "Reduce household energy consumption through automation.",
        "summary.item4.title": "Structured Management",
        "summary.item4.text": "Divide home into zones and group sensors for simplified automations.",
        "summary.item5.title": "Security",
        "summary.item5.text": "Utilize existing devices for home protection when no one is home.",
        "summary.item6.title": "Offline Functionality", 
        "summary.item6.text": "Everything operates without internet access.",
        
        // Projects
        "projects.title": "🛠️ PROJECTS",
        "projects.advantages": "Advantages:",
        "projects.goto": "↪️ GO TO PROJECT ▶️",
        // Zigbee project (EN)
        "projects.zigbee.title": "🛜 Creating/Integrating a Zigbee Network",
        "projects.zigbee.imageAlt": "Zigbee Network",
        "projects.zigbee.li1": "Internet-independent with Zigbee2MQTT",
        "projects.zigbee.li2": "Doesn't overload your internet network",
        "projects.zigbee.li3": "Easy device installation and migration",
        "projects.zigbee.li4": "Zigbee devices act as repeaters",
        "projects.zigbee.li5": "Affordable Zigbee hardware",
        "projects.zigbee.li6": "Upgradable when the network gets busy",
        // Shopping project image alt
        "projects.shopping.imageAlt": "Shopping List",

        // Additional project translations
        "projects.wled.title": "🎤🔉 WLED SoundReactive Intelligent Light Show",
        "projects.wled.imageAlt": "WLED SoundReactive animation",
        "projects.wled.li1": "Real-time reaction beyond human perception",
        "projects.wled.li2": "Automatic microphone sensitivity adjustment",
        "projects.wled.li3": "Low-cost and energy-efficient",
        "projects.wled.li4": "Full WLED mod with official firmware features",
        "projects.wled.li5": "Web interface and mobile apps — Home Assistant compatible",

        "projects.tasmota.title": "🤖 TASMOTA – Integration and Devices",
        "projects.tasmota.imageAlt": "Tasmota devices",
        "projects.tasmota.li1": "Full device control",
        "projects.tasmota.li2": "Independent of internet connection",
        "projects.tasmota.li3": "Instant control via TASMOTA, Home Assistant and Alexa",
        "projects.tasmota.li4": "Does not burden your internet network",

        "projects.hass2zigbee.title": "🏠 HASS with Two Zigbee Networks",
        "projects.hass2zigbee.imageAlt": "Two Zigbee networks",
        "projects.hass2zigbee.li1": "Supports more devices",
        "projects.hass2zigbee.li2": "Load and function separation",
        "projects.hass2zigbee.li3": "Enhanced compatibility testing",
        "projects.hass2zigbee.li4": "Flexible migration and experimentation",

        "projects.voice.title": "🎙️ Voice Control of HASS Devices (Alexa / Google Home)",
        "projects.voice.imageAlt": "Voice control integration",
        "projects.voice.li1": "Control automations and scripts via voice",
        "projects.voice.li2": "Control devices and monitor sensors by voice",
        "projects.voice.li3": "Easily add and remove devices",

        "projects.fingerbot.title": "🖲️ Zigbee Fingerbot Control via NFC & Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC door",
        "projects.fingerbot.li1": "Contactless access",
        "projects.fingerbot.li2": "Integration with Home Assistant",
        "projects.fingerbot.li3": "Local and offline control",
        "projects.fingerbot.li4": "Compatible with any NFC-enabled device",

        "projects.eco.title": "🌿 Eco Mode for Thermostats in Home Assistant",
        "projects.eco.imageAlt": "Eco mode thermostat",
        "projects.eco.li1": "Energy savings",
        "projects.eco.li2": "Comfort without compromise",
        "projects.eco.li3": "Easy integration and customization",

        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Away mode banner",
        "projects.away.li1": "Automated away mode management",
        "projects.away.li2": "Home Assistant integration",
        "projects.away.li3": "Flexible scenarios with input booleans",

        "projects.timer.title": "⏱️ Home Assistant - Flexible Timer Automation",
        "projects.timer.imageAlt": "Flexible timer banner",
        "projects.timer.li1": "Set interval via UI (hours, minutes, seconds)",
        "projects.timer.li2": "Execute actions after interval ends",
        "projects.timer.li3": "Prevents premature triggering",

        // About
        "about.title": "About",
        "about.description": "This repository contains my personal Home Assistant projects, automations, configurations, and integrations. Most projects include support in both English and Bulgarian, and I continuously update the repository with new features and improvements.",
        // Documentation
        "documentation.title": "Documentation",
        "documentation.link1": "Add-on repository list",
        "documentation.link2": "Types of automation",
        "documentation.link3": "HOME-ASSISTANT-AUTOMATIONS",
        // Contact
        "contact.title": "Contact",
        "contact.description": "If you need help or have questions, feel free to contact me.",
        // Support
        "support.title": "Support",
        "support.description": "If you like this project, check out more of my repositories here.",
        "support.generators.title": "Generators",
        "support.generators.item1": "ntfy notifications generator",
        "support.generators.item2": "Mobile app notification generator",
        "support.generators.item3": "Command shell code generator",
        // Footer
        "footer.title": "Home Assistant Projects",
        "footer.description": "Simplifying daily routines, enhancing comfort, and saving energy in the smart home environment.",
        "footer.links": "Links",
        "footer.connect": "Connect",
        "footer.donate": "Donate",
        "footer.copyright": "© 2023 Home Assistant Projects. All rights reserved."
    },
    
    bg: {
        // Navigation
        "nav.home": "Начало",
        "nav.projects": "Проекти",
        "nav.about": "За нас", 
        "nav.documentation": "Документация",
        "nav.contact": "Контакт",
        "nav.support": "Поддръжка",
        
        // Hero
        "hero.title": "🏠 HOME ASSISTANT ПРОЕКТИ И РАЗРАБОТКИ",
        "hero.badge1": "🔧 Умен дом",
        "hero.badge2": "🧠 Автоматизации",
        "hero.badge3": "🌐 IoT Интеграции", 
        "hero.description": "Добре дошли в моето хранилище за Home Assistant! Тук ще откриете колекция от мои проекти, автоматизации, конфигурации и интеграции, създадени с цел да улеснят ежедневието, да повишат комфорта и да спестят енергия в интелигентния дом.",
        "hero.cta": "Разгледай Проекти",
        
        // Summary
        "summary.title": "💬 ОБОБЩЕНИЕ", 
        "summary.item1.title": "Адаптивен Дизайн",
        "summary.item1.text": "Всички елементи и текст се мащабират автоматично според размера на екрана, като се поддържа четливост.",
        "summary.item2.title": "Чист Интерфейс",
        "summary.item2.text": "Лесен за разбиране както от възрастни, така и от деца с минимална навигация.",
        "summary.item3.title": "Оптимизация на Ресурсите", 
        "summary.item3.text": "Намаляване на потреблението на енергия в домакинството чрез автоматизации.",
        "summary.item4.title": "Структурирано Управление",
        "summary.item4.text": "Разделяне на зони и групиране на сензори за опростени автоматизации.",
        "summary.item5.title": "Сигурност",
        "summary.item5.text": "Използване на съществуващи устройства за защита на дома, когато никой не е вкъщи.",
        "summary.item6.title": "Офлайн Функционалност",
        "summary.item6.text": "Всичко функционира без интернет връзка.",
        
        // Projects
        "projects.title": "🛠️ ПРОЕКТИ", 
        "projects.advantages": "Предимства:",
        "projects.goto": "↪️ КЪМ ПРОЕКТА ▶️",
        // Zigbee project (BG)
        "projects.zigbee.title": "🛜 Създаване и интегриране на Zigbee мрежа",
        "projects.zigbee.imageAlt": "Zigbee мрежа",
        "projects.zigbee.li1": "Работи без интернет с Zigbee2MQTT",
        "projects.zigbee.li2": "Не натоварва интернет мрежата",
        "projects.zigbee.li3": "Лесна инсталация и преместване на устройства",
        "projects.zigbee.li4": "Zigbee устройствата действат като ретранслатори",
        "projects.zigbee.li5": "Достъпен Zigbee хардуер",
        "projects.zigbee.li6": "Възможност за ъпгрейд при натоварване на мрежата",
        "projects.shopping.imageAlt": "Списък за пазаруване",

        // Допълнителни преводи за проекти
        "projects.wled.title": "🎤🔉 WLED SoundReactive Интелигентно светлинно шоу",
        "projects.wled.imageAlt": "WLED SoundReactive анимация",
        "projects.wled.li1": "Реакция в реално време извън човешкото възприятие",
        "projects.wled.li2": "Автоматично регулиране на чувствителността на микрофона",
        "projects.wled.li3": "Ниска цена и енергийна ефективност",
        "projects.wled.li4": "Пълен WLED мод с официални функции на фърмуера",
        "projects.wled.li5": "Уеб интерфейс и мобилни приложения — съвместими с Home Assistant",

        "projects.tasmota.title": "🤖 TASMOTA – Интеграция и устройства",
        "projects.tasmota.imageAlt": "Tasmota устройства",
        "projects.tasmota.li1": "Пълен контрол върху устройствата",
        "projects.tasmota.li2": "Независимо от интернет връзка",
        "projects.tasmota.li3": "Моментален контрол чрез TASMOTA, Home Assistant и Alexa",
        "projects.tasmota.li4": "Не натоварва интернет мрежата",

        "projects.hass2zigbee.title": "🏠 HASS с две Zigbee мрежи",
        "projects.hass2zigbee.imageAlt": "Две Zigbee мрежи",
        "projects.hass2zigbee.li1": "Поддържа повече устройства",
        "projects.hass2zigbee.li2": "Разделяне на товар/функции",
        "projects.hass2zigbee.li3": "Подобрено тестване за съвместимост",
        "projects.hass2zigbee.li4": "Гъвкава миграция и експериментиране",

        "projects.voice.title": "🎙️ Гласово управление на HASS устройства (Alexa / Google Home)",
        "projects.voice.imageAlt": "Гласово управление интеграция",
        "projects.voice.li1": "Управление на автоматизации и скриптове с глас",
        "projects.voice.li2": "Управление на устройства и мониторинг чрез глас",
        "projects.voice.li3": "Лесно добавяне и премахване на устройства",

        "projects.fingerbot.title": "🖲️ Управление на Zigbee Fingerbot чрез NFC и Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC врата",
        "projects.fingerbot.li1": "Безконтактен достъп",
        "projects.fingerbot.li2": "Интеграция с Home Assistant",
        "projects.fingerbot.li3": "Локален и офлайн контрол",
        "projects.fingerbot.li4": "Съвместим с всяко NFC устройство",

        "projects.eco.title": "🌿 Eco режим за термостати в Home Assistant",
        "projects.eco.imageAlt": "Еко режим термостат",
        "projects.eco.li1": "Спестяване на енергия",
        "projects.eco.li2": "Комфорт без компромис",
        "projects.eco.li3": "Лесна интеграция и персонализация",

        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Банер Away Mode",
        "projects.away.li1": "Автоматизирано управление на away режима",
        "projects.away.li2": "Интеграция с Home Assistant",
        "projects.away.li3": "Гъвкави сценарии с input booleans",

        "projects.timer.title": "⏱️ Home Assistant - Гъвкава таймер автоматизация",
        "projects.timer.imageAlt": "Банер гъвкав таймер",
        "projects.timer.li1": "Настройка на интервал чрез UI (часове, минути, секунди)",
        "projects.timer.li2": "Изпълнява действия след изтичане на интервала",
        "projects.timer.li3": "Предотвратява преждевременно задействане",

        // About
        "about.title": "За нас",
        "about.description": "Това хранилище съдържа моите персонални проекти за Home Assistant, автоматизации, конфигурации и интеграции. Повечето проекти имат поддръжка на английски и български и редовно добавям нови функции и подобрения.",
        // Documentation
        "documentation.title": "Документация",
        "documentation.link1": "Списък с add-on хранилища",
        "documentation.link2": "Видове автоматизации",
        "documentation.link3": "HOME-ASSISTANT-AUTOMATIONS",
        // Contact
        "contact.title": "Контакт",
        "contact.description": "Ако имате нужда от помощ или въпроси, свържете се с мен.",
        // Support
        "support.title": "Поддръжка",
        "support.description": "Ако харесвате проекта, разгледайте още мои хранилища тук.",
        "support.generators.title": "Генератори",
        "support.generators.item1": "Генератор за ntfy известия",
        "support.generators.item2": "Генератор на известия до mobile app",
        "support.generators.item3": "Генератор на command shell кодове",
        // Footer
        "footer.title": "Home Assistant Проекти",
        "footer.description": "Оптимизиране на ежедневието, повишаване на комфорта и пестене на енергия в интелигентния дом.",
        "footer.links": "Връзки",
        "footer.connect": "Свържи се",
        "footer.donate": "Дарение",
        "footer.copyright": "© 2023 Home Assistant Projects. Всички права запазени."
    },
    
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.projects": "Projekte",
        "nav.about": "Über uns", 
        "nav.documentation": "Dokumentation",
        "nav.contact": "Kontakt",
        "nav.support": "Unterstützung",
        
        // Hero
        "hero.title": "🏠 HOME ASSISTANT PROJEKTE UND ENTWICKLUNGEN",
        "hero.badge1": "🔧 Smart Home", 
        "hero.badge2": "🧠 Automatisierungen",
        "hero.badge3": "🌐 IoT-Integrationen",
        "hero.description": "Willkommen in meinem Home Assistant Repository! Hier finden Sie eine Sammlung meiner Projekte, Automatisierungen, Konfigurationen und Integrationen, die dazu dienen, den Alltag zu erleichtern, den Komfort zu erhöhen und Energie im smarten Zuhause zu sparen.",
        "hero.cta": "Projekte Erkunden",
        
        // Summary
        "summary.title": "💬 ZUSAMMENFASSUNG",
        "summary.item1.title": "Responsives Design", 
        "summary.item1.text": "Alle Elemente und Texte passen sich automatisch an die Bildschirmgröße an und bleiben lesbar.",
        "summary.item2.title": "Übersichtliches Layout",
        "summary.item2.text": "Einfach verständlich für Erwachsene und Kinder mit minimaler Navigation.",
        "summary.item3.title": "Ressourcenoptimierung",
        "summary.item3.text": "Reduzierung des Energieverbrauchs im Haushalt durch Automatisierung.", 
        "summary.item4.title": "Strukturierte Verwaltung",
        "summary.item4.text": "Unterteilung in Zonen und Gruppierung von Sensoren für vereinfachte Automatisierungen.",
        "summary.item5.title": "Sicherheit",
        "summary.item5.text": "Nutzung vorhandener Geräte zum Schutz des Hauses, wenn niemand anwesend ist.",
        "summary.item6.title": "Offline-Funktionalität",
        "summary.item6.text": "Alles funktioniert ohne Internetverbindung.",
        
        // Projects
        "projects.title": "🛠️ PROJEKT",
        "projects.advantages": "Vorteile:",
        "projects.goto": "↪️ ZUM PROJEKT ▶️",
        // Zigbee project (DE)
        "projects.zigbee.title": "🛜 Erstellen/Integration eines Zigbee-Netzwerks",
        "projects.zigbee.imageAlt": "Zigbee Netzwerk",
        "projects.zigbee.li1": "Internet-unabhängig mit Zigbee2MQTT",
        "projects.zigbee.li2": "Belastet nicht Ihr Internetnetzwerk",
        "projects.zigbee.li3": "Einfache Installation und Migration von Geräten",
        "projects.zigbee.li4": "Zigbee-Geräte fungieren als Repeater",
        "projects.zigbee.li5": "Erschwingliche Zigbee-Hardware",
        "projects.zigbee.li6": "Aufrüstbar bei hoher Netzbelastung",
        "projects.shopping.imageAlt": "Einkaufsliste",

        // Zusätzliche Projektübersetzungen
        "projects.wled.title": "🎤🔉 WLED SoundReactive Intelligente Lichtshow",
        "projects.wled.imageAlt": "WLED SoundReactive Animation",
        "projects.wled.li1": "Echtzeitreaktion jenseits der menschlichen Wahrnehmung",
        "projects.wled.li2": "Automatische Mikrofon-Sensitivitätsanpassung",
        "projects.wled.li3": "Kostengünstig und energieeffizient",
        "projects.wled.li4": "Vollständiger WLED-Mod mit offiziellen Firmware-Funktionen",
        "projects.wled.li5": "Webinterface und mobile Apps — Home Assistant kompatibel",

        "projects.tasmota.title": "🤖 TASMOTA – Integration und Geräte",
        "projects.tasmota.imageAlt": "Tasmota Geräte",
        "projects.tasmota.li1": "Vollständige Geräteverwaltung",
        "projects.tasmota.li2": "Unabhängig von Internetverbindung",
        "projects.tasmota.li3": "Sofortige Steuerung über TASMOTA, Home Assistant und Alexa",
        "projects.tasmota.li4": "Belastet Ihr Internetnetzwerk nicht",

        "projects.hass2zigbee.title": "🏠 HASS mit zwei Zigbee-Netzwerken",
        "projects.hass2zigbee.imageAlt": "Zwei Zigbee Netzwerke",
        "projects.hass2zigbee.li1": "Unterstützt mehr Geräte",
        "projects.hass2zigbee.li2": "Trennung von Last und Funktion",
        "projects.hass2zigbee.li3": "Verbesserte Kompatibilitätstests",
        "projects.hass2zigbee.li4": "Flexible Migration und Experimente",

        "projects.voice.title": "🎙️ Sprachsteuerung von HASS-Geräten (Alexa / Google Home)",
        "projects.voice.imageAlt": "Sprachsteuerungsintegration",
        "projects.voice.li1": "Steuerung von Automatisierungen und Skripten per Sprache",
        "projects.voice.li2": "Geräte steuern und Sensoren per Sprache überwachen",
        "projects.voice.li3": "Einfaches Hinzufügen und Entfernen von Geräten",

        "projects.fingerbot.title": "🖲️ Zigbee Fingerbot Steuerung via NFC & Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC Tür",
        "projects.fingerbot.li1": "Kontaktloser Zugang",
        "projects.fingerbot.li2": "Integration mit Home Assistant",
        "projects.fingerbot.li3": "Lokale und Offline-Steuerung",
        "projects.fingerbot.li4": "Kompatibel mit jedem NFC-fähigen Gerät",

        "projects.eco.title": "🌿 Eco Modus für Thermostate in Home Assistant",
        "projects.eco.imageAlt": "Eco Modus Thermostat",
        "projects.eco.li1": "Energieeinsparung",
        "projects.eco.li2": "Komfort ohne Kompromisse",
        "projects.eco.li3": "Einfache Integration und Anpassung",

        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Away Mode Banner",
        "projects.away.li1": "Automatisiertes Away-Mode-Management",
        "projects.away.li2": "Home Assistant Integration",
        "projects.away.li3": "Flexible Szenarien mit Input-Booleans",

        "projects.timer.title": "⏱️ Home Assistant - Flexible Timer Automation",
        "projects.timer.imageAlt": "Flexibler Timer Banner",
        "projects.timer.li1": "Intervall über UI einstellen (Stunden, Minuten, Sekunden)",
        "projects.timer.li2": "Aktionen nach Ablauf des Intervalls ausführen",
        "projects.timer.li3": "Verhindert vorzeitiges Auslösen",

        // About
        "about.title": "Über uns",
        "about.description": "Dieses Repository enthält meine persönlichen Home Assistant Projekte, Automatisierungen, Konfigurationen und Integrationen. Die meisten Projekte unterstützen Englisch und Bulgarisch und werden laufend erweitert.",
        // Documentation
        "documentation.title": "Dokumentation",
        "documentation.link1": "Add-on Repository Liste",
        "documentation.link2": "Arten von Automatisierungen",
        "documentation.link3": "HOME-ASSISTANT-AUTOMATIONS",
        // Contact
        "contact.title": "Kontakt",
        "contact.description": "Wenn Sie Hilfe benötigen oder Fragen haben, kontaktieren Sie mich gerne.",
        // Support
        "support.title": "Support",
        "support.description": "Wenn Ihnen dieses Projekt gefällt, schauen Sie sich weitere meiner Repositories an.",
        "support.generators.title": "Generatoren",
        "support.generators.item1": "Generator für ntfy-Benachrichtigungen",
        "support.generators.item2": "Generator für Mobile-App-Benachrichtigungen",
        "support.generators.item3": "Generator für command shell-Code",
        // Footer
        "footer.title": "Home Assistant Projekte",
        "footer.description": "Vereinfachung des Alltags, Erhöhung des Komforts und Einsparung von Energie im Smart Home.",
        "footer.links": "Links",
        "footer.connect": "Verbinden",
        "footer.donate": "Spenden",
        "footer.copyright": "© 2023 Home Assistant Projects. Alle Rechte vorbehalten."
    }
};

// Auto-fill missing English translations (copy from bg or de as fallback)
(function ensureEnTranslations() {
    if (!translations || !translations.en) return;
    const otherLocales = Object.keys(translations).filter(l => l !== 'en');
    const added = [];
    otherLocales.forEach(locale => {
        const src = translations[locale] || {};
        Object.keys(src).forEach(key => {
            if (!(key in translations.en)) {
                // copy fallback from bg/de (locale order matters)
                translations.en[key] = src[key];
                added.push(key);
            }
        });
    });
    if (added.length) {
        console.warn('Auto-filled missing en translation keys:', added);
    }
})();

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = this.getSavedLanguage();
        this.init();
    }

    getSavedLanguage() {
        return localStorage.getItem('preferred-language') || 'en';
    }

    saveLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    init() {
        this.loadLanguage(this.currentLang);
        this.setupEventListeners();
    }

    loadLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update translatable attributes (alt, href, placeholder, value)
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('alt', translations[lang][key]);
            }
        });
        document.querySelectorAll('[data-translate-href]').forEach(element => {
            const key = element.getAttribute('data-translate-href');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('href', translations[lang][key]);
            }
        });
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
        document.querySelectorAll('[data-translate-value]').forEach(element => {
            const key = element.getAttribute('data-translate-value');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('value', translations[lang][key]);
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        this.currentLang = lang;
        this.saveLanguage(lang);
    }

    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.loadLanguage(lang);
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const languageManager = new LanguageManager();
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});