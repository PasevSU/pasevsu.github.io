//---------------------------------------------------------------------------------------- 
// В този файл се съхраняват всички преводи за различните езици, използвани в index.html
//----------------------------------------------------------------------------------------
// Simple language translations
const translations = {
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // English translations
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    en: {
        // Navigation (съществуващи)
        "nav.home": "Home",
        "nav.projects": "Projects", 
        "nav.about": "About",
        "nav.documentation": "Documentation",
        "nav.contact": "Contact",
        "nav.generators": "Generators",
        
        // Hero (съществуващи)
        "hero.title": "🏠 HOME ASSISTANT PROJECTS AND DEVELOPMENTS",
        "hero.badge1": "🔧 Smart Home",
        "hero.badge2": "🧠 Automations", 
        "hero.badge3": "🌐 IoT Integrations",
        "hero.description": "Welcome to my Home Assistant repository! Here you'll find a collection of my personal Home Assistant projects, automations, configurations, and integrations — all carefully developed to simplify daily routines, enhance comfort, and save energy in the smart home environment.",
        "hero.cta": "Explore Projects",
        
        // Summary (съществуващи)
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
        
        // Platforms (съществуващи)
        "platforms.homeassistant": "HomeAssistant",
        "platforms.web": "WEB", 
        "platforms.android": "ANDROID",
        
        // Projects (съществуващи)
        "projects.title": "🛠️ PROJECTS",
        "projects.advantages": "Advantages:",
        "projects.goto": "↪️ GO TO PROJECT ▶️",
        
        // Zigbee project (EN) (съществуващ)
        "projects.zigbee.title": "🛜 Creating/Integrating a Zigbee Network",
        "projects.zigbee.imageAlt": "Zigbee Network",
        "projects.zigbee.li1": "Internet-independent with Zigbee2MQTT",
        "projects.zigbee.li2": "Doesn't overload your internet network",
        "projects.zigbee.li3": "Easy device installation and migration",
        "projects.zigbee.li4": "Zigbee devices act as repeaters",
        "projects.zigbee.li5": "Affordable Zigbee hardware",
        "projects.zigbee.li6": "Upgradable when the network gets busy",
        
        // Shopping project (съществуващ)
        "projects.shopping.title": "🛒 Shopping List with Images",
        "projects.shopping.imageAlt": "Shopping List",
        "projects.shopping.li1": "Quickly find items by categories",
        "projects.shopping.li2": "Visual identification through images", 
        "projects.shopping.li3": "Household members receive notifications for new items",
        "projects.shopping.li4": "Automatically removes checked items",
        
        // WLED project (съществуващ)
        "projects.wled.title": "🎤🔉 WLED SoundReactive Intelligent Light Show",
        "projects.wled.imageAlt": "WLED SoundReactive animation",
        "projects.wled.li1": "Real-time reaction beyond human perception",
        "projects.wled.li2": "Automatic microphone sensitivity adjustment",
        "projects.wled.li3": "Low-cost and energy-efficient",
        "projects.wled.li4": "Full WLED mod with official firmware features",
        "projects.wled.li5": "Web interface and mobile apps — Home Assistant compatible",

        // Tasmota project (съществуващ)
        "projects.tasmota.title": "🤖 TASMOTA – Integration and Devices",
        "projects.tasmota.imageAlt": "Tasmota devices",
        "projects.tasmota.li1": "Full device control",
        "projects.tasmota.li2": "Independent of internet connection",
        "projects.tasmota.li3": "Instant control via TASMOTA, Home Assistant and Alexa",
        "projects.tasmota.li4": "Does not burden your internet network",

        // HASS 2 Zigbee project (съществуващ)
        "projects.hass2zigbee.title": "🏠 HASS with Two Zigbee Networks",
        "projects.hass2zigbee.imageAlt": "Two Zigbee networks",
        "projects.hass2zigbee.li1": "Supports more devices",
        "projects.hass2zigbee.li2": "Load and function separation",
        "projects.hass2zigbee.li3": "Enhanced compatibility testing",
        "projects.hass2zigbee.li4": "Flexible migration and experimentation",

        // Voice control project (съществуващ)
        "projects.voice.title": "🎙️ Voice Control of HASS Devices (Alexa / Google Home)",
        "projects.voice.imageAlt": "Voice control integration",
        "projects.voice.li1": "Control automations and scripts via voice",
        "projects.voice.li2": "Control devices and monitor sensors by voice",
        "projects.voice.li3": "Easily add and remove devices",

        // Fingerbot project (съществуващ)
        "projects.fingerbot.title": "🖲️ Zigbee Fingerbot Control via NFC & Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC door",
        "projects.fingerbot.li1": "Contactless access",
        "projects.fingerbot.li2": "Integration with Home Assistant",
        "projects.fingerbot.li3": "Local and offline control",
        "projects.fingerbot.li4": "Compatible with any NFC-enabled device",

        // Eco mode project (съществуващ)
        "projects.eco.title": "🌿 Eco Mode for Thermostats in Home Assistant",
        "projects.eco.imageAlt": "Eco mode thermostat",
        "projects.eco.li1": "Energy savings",
        "projects.eco.li2": "Comfort without compromise",
        "projects.eco.li3": "Easy integration and customization",

        // Dual Zigbee project (NEW) (съществуващ)
        "projects.dualzigbee.title": "🏠 HOME ASSISTANT with Dual Zigbee Networks via Zigbee2MQTT",
        "projects.dualzigbee.imageAlt": "Two Zigbee networks",
        "projects.dualzigbee.li1": "Two Independent Zigbee Networks",
        "projects.dualzigbee.li2": "Zigbee2MQTT Integration", 
        "projects.dualzigbee.li3": "Enhanced Performance",
        "projects.dualzigbee.li4": "Flexibility and Scalability",
        "projects.dualzigbee.li5": "Local Control",
        "projects.dualzigbee.li6": "Comprehensive Documentation",

        // Away mode project (съществуващ)
        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Away mode banner",
        "projects.away.li1": "Automated away mode management",
        "projects.away.li2": "Home Assistant integration",
        "projects.away.li3": "Flexible scenarios with input booleans",

        // Timer project (съществуващ)
        "projects.timer.title": "⏱️ Home Assistant - Flexible Timer Automation",
        "projects.timer.imageAlt": "Flexible timer banner",
        "projects.timer.li1": "Set interval via UI (hours, minutes, seconds)",
        "projects.timer.li2": "Execute actions after interval ends",
        "projects.timer.li3": "Prevents premature triggering",

        // About (съществуващ)
        "about.title": "About",
        "about.description": "This repository contains my personal Home Assistant projects, automations, configurations, and integrations. Most projects include support in both English and Bulgarian, and I continuously update the repository with new features and improvements.",
        
        // Documentation - НОВИ ПРЕВОДИ
        "documentation.title": "Documentation",
        "documentation.description": "Documentation for Home Assistant projects",
        "documentation.modalTitle": "Documentation",
        "documentation.docsDescription": "Click on any document to view its full content.",
        "documentation.loading": "Loading documents...",
        "documentation.link1": "List of add-on repositories",
        "documentation.link2": "Types of automations",
        "documentation.link3": "Configuration methods",
        "documentation.viewAll": "View all documents",
        
        // Документация - съдържание (НОВО)
        "doc.repositories.title": "Add-on Repositories List",
        "doc.repositories.description": "Complete list of useful add-on repositories for Home Assistant",
        "doc.repositories.content": `
          <h3>Official Repositories</h3>
          <ul>
            <li><strong>Home Assistant Core</strong> - Official add-ons from Home Assistant</li>
            <li><strong>Community Add-ons</strong> - Community maintained add-ons</li>
            <li><strong>Supervisor</strong> - System management add-ons</li>
          </ul>
          
          <h3>Community Repositories</h3>
          <ul>
            <li><strong>ESPHome</strong> - For ESP8266/ESP32 devices</li>
            <li><strong>Node-RED</strong> - Visual programming tool</li>
            <li><strong>Mosquitto</strong> - MQTT broker</li>
            <li><strong>Zigbee2MQTT</strong> - Zigbee to MQTT bridge</li>
          </ul>
          
          <h3>Specialized Repositories</h3>
          <ul>
            <li><strong>Database Add-ons</strong> - MariaDB, InfluxDB, PostgreSQL</li>
            <li><strong>Media Add-ons</strong> - Plex, Jellyfin, AirSonos</li>
            <li><strong>Security Add-ons</strong> - AdGuard, Pi-hole, VPN</li>
          </ul>
        `,
        
        "doc.automations.title": "Types of Automations",
        "doc.automations.description": "Overview of different automation types and their applications",
        "doc.automations.content": `
          <h3>Time-Based Automations</h3>
          <ul>
            <li><strong>Simple Time</strong> - Execute at specific time</li>
            <li><strong>Sunrise/Sunset</strong> - Based on sun position</li>
            <li><strong>Recurring</strong> - Daily, weekly, monthly schedules</li>
          </ul>
          
          <h3>Event-Based Automations</h3>
          <ul>
            <li><strong>Device State</strong> - When device changes state</li>
            <li><strong>Motion Detection</strong> - When motion is detected</li>
            <li><strong>Door/Window</strong> - When opened or closed</li>
          </ul>
          
          <h3>Condition-Based Automations</h3>
          <ul>
            <li><strong>Weather Conditions</strong> - Based on weather data</li>
            <li><strong>Presence Detection</strong> - When someone is home/away</li>
            <li><strong>Device Conditions</strong> - Based on device status</li>
          </ul>
          
          <h3>Advanced Automations</h3>
          <ul>
            <li><strong>Script Sequences</strong> - Complex multi-step automations</li>
            <li><strong>Blueprints</strong> - Reusable automation templates</li>
            <li><strong>Node-RED</strong> - Visual flow-based automations</li>
          </ul>
        `,
        
        "doc.config-methods.title": "Configuration Methods",
        "doc.config-methods.description": "Different ways to configure Home Assistant and add-ons",
        "doc.config-methods.content": `
          <h3>YAML Configuration</h3>
          <ul>
            <li><strong>Configuration.yaml</strong> - Main configuration file</li>
            <li><strong>Packages</strong> - Modular configuration structure</li>
            <li><strong>Includes</strong> - Splitting configuration into multiple files</li>
          </ul>
          
          <h3>UI Configuration</h3>
          <ul>
            <li><strong>Settings Panel</strong> - Visual configuration interface</li>
            <li><strong>Integrations</strong> - Adding devices via UI</li>
            <li><strong>Automations Editor</strong> - Creating automations visually</li>
          </ul>
          
          <h3>Advanced Configuration</h3>
          <ul>
            <li><strong>Command Line</strong> - Using terminal/SSH</li>
            <li><strong>API</strong> - REST API for remote configuration</li>
            <li><strong>Templates</strong> - Dynamic configurations using Jinja2</li>
          </ul>
          
          <h3>Backup & Migration</h3>
          <ul>
            <li><strong>Snapshots</strong> - Full system backups</li>
            <li><strong>Configuration Export</strong> - Export specific configurations</li>
            <li><strong>Version Control</strong> - Using Git for configuration management</li>
          </ul>
        `,
        
        "doc.fullDocumentation": "Open full documentation",
        
        // Support (съществуващ)
        "support.title": "Generators",
        "support.description": "If you encounter any problems with the generators, feel free to contact me using our contact form. In case of difficulties, we hope you will look for me, even for criticisms, they are important to me in order not to stop my aspiration to improve and learn every day.",
        "support.generators.title": "Generators",
        "support.generators.description": "In case of problems with the generators, write to me at pasevdenislav@gmail.com with the subject 'HASS Generators' or via the contact form on the site.",
        "support.generators.ntfy": "ntfy notifications generator",
        "support.generators.mobile": "Mobile app notification generator",
        "support.generators.shell": "Command shell code generator",
        
        // Generators buttons (съществуващ)
        "generator.ntfy": "ntfy notifications generator",
        "generator.mobile": "Mobile app notification generator", 
        "generator.shell": "Command shell code generator",
        "generators.title": "Generators",
        "generators.description": "If you encounter any issues with the generators, please contact me using the contact form with the subject 'HASS Generators'.",

        // Contact (съществуващ)
        "contact.title": "Contact",
        "contact.description": "Send us a message and we'll respond as soon as possible.",
        "contact.form.name": "Name",
        "contact.form.email": "Email", 
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.form.loading": "Sending...",
        "contact.form.success": "Message sent successfully! We'll contact you soon.",
        "contact.form.error": "Error sending message. Please try again.",
        "contact.form.validation": "Please fill in all fields.",
        
        // Contact form placeholders (съществуващ)
        "contact.form.namePlaceholder": "Enter your name",
        "contact.form.emailPlaceholder": "Enter your email address",
        "contact.form.subjectPlaceholder": "Message subject",
        "contact.form.messagePlaceholder": "Write your message here...",
        
        // Contact info (съществуващ)
        "contact.info.title": "Alternative ways to contact us",
        "contact.info.email": "Email:",
        "contact.info.github": "GitHub:",
        "contact.info.donate": "Donate:",
        
        // Footer (съществуващ)
        "footer.title": "Home Assistant Projects",
        "footer.description": "Simplifying daily routines, enhancing comfort, and saving energy in the smart home environment.",
        "footer.links": "Links",
        "footer.connect": "Connect",
        "footer.donate": "Donate",
        "footer.copyright": "© 2023 Home Assistant Projects. All rights reserved."
    },
    
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // български преводи
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    bg: {
        // Навигация (съществуващ)
        "nav.home": "Начало",
        "nav.projects": "Проекти",
        "nav.about": "За нас", 
        "nav.documentation": "Документация",
        "nav.contact": "Контакт",
        "nav.generators": "Генератори",
        
        // Hero (съществуващ)
        "hero.title": "🏠 HOME ASSISTANT ПРОЕКТИ И РАЗРАБОТКИ",
        "hero.badge1": "🔧 Умен дом",
        "hero.badge2": "🧠 Автоматизации",
        "hero.badge3": "🌐 IoT Интеграции", 
        "hero.description": "Добре дошли в моето хранилище за Home Assistant! Тук ще откриете колекция от мои проекти, автоматизации, конфигурации и интеграции, създадени с цел да улеснят ежедневието, да повишат комфорта и да спестят енергия в интелигентния дом.",
        "hero.cta": "Разгледай Проекти",
        
        // Резюме (съществуващ)
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
        
        // Platforms (съществуващ)
        "platforms.homeassistant": "HomeAssistant",
        "platforms.web": "WEB",
        "platforms.android": "ANDROID",
        
        // Проекти (съществуващ)
        "projects.title": "🛠️ ПРОЕКТИ", 
        "projects.advantages": "Предимства:",
        "projects.goto": "↪️ КЪМ ПРОЕКТА ▶️",
        
        // Проект Zigbee (BG) (съществуващ)
        "projects.zigbee.title": "🛜 Създаване и интегриране на Zigbee мрежа",
        "projects.zigbee.imageAlt": "Zigbee мрежа",
        "projects.zigbee.li1": "Работи без интернет с Zigbee2MQTT",
        "projects.zigbee.li2": "Не натоварва интернет мрежата",
        "projects.zigbee.li3": "Лесна инсталация и преместване на устройства",
        "projects.zigbee.li4": "Zigbee устройствата действат като ретранслатори",
        "projects.zigbee.li5": "Достъпен Zigbee хардуер",
        "projects.zigbee.li6": "Възможност за ъпгрейд при натоварване на мрежата",
        
        // Проект пазаруване (съществуващ)
        "projects.shopping.title": "🛒 Списък за пазаруване с изображения",
        "projects.shopping.imageAlt": "Списък за пазаруване",
        "projects.shopping.li1": "Бързо намиране на артикули по категории",
        "projects.shopping.li2": "Визуална идентификация чрез изображения",
        "projects.shopping.li3": "Членовете на домакинството получават известия за нови артикули",
        "projects.shopping.li4": "Автоматично премахва отметнати артикули",

        // WLED проект (съществуващ)
        "projects.wled.title": "🎤🔉 WLED SoundReactive Интелигентно светлинно шоу",
        "projects.wled.imageAlt": "WLED SoundReactive анимация",
        "projects.wled.li1": "Реакция в реално време извън човешкото възприятие",
        "projects.wled.li2": "Автоматично регулиране на чувствителността на микрофона",
        "projects.wled.li3": "Ниска цена и енергийна ефективност",
        "projects.wled.li4": "Пълен WLED мод с официални функции на фърмуера",
        "projects.wled.li5": "Уеб интерфейс и мобилни приложения — съвместими с Home Assistant",

        // Tasmota проект (съществуващ)
        "projects.tasmota.title": "🤖 TASMOTA – Интеграция и устройства",
        "projects.tasmota.imageAlt": "Tasmota устройства",
        "projects.tasmota.li1": "Пълен контрол върху устройствата",
        "projects.tasmota.li2": "Независимо от интернет връзка",
        "projects.tasmota.li3": "Моментален контрол чрез TASMOTA, Home Assistant и Alexa",
        "projects.tasmota.li4": "Не натоварва интернет мрежата",

        // HASS 2 Zigbee проект (съществуващ)
        "projects.hass2zigbee.title": "🏠 HASS с две Zigbee мрежи",
        "projects.hass2zigbee.imageAlt": "Две Zigbee мрежи",
        "projects.hass2zigbee.li1": "Поддържа повече устройства",
        "projects.hass2zigbee.li2": "Разделяне на товар/функции",
        "projects.hass2zigbee.li3": "Подобрено тестване за съвместимост",
        "projects.hass2zigbee.li4": "Гъвкава миграция и експериментиране",

        // Гласово управление проект (съществуващ)
        "projects.voice.title": "🎙️ Гласово управление на HASS устройства (Alexa / Google Home)",
        "projects.voice.imageAlt": "Гласово управление интеграция",
        "projects.voice.li1": "Управление на автоматизации и скриптове с глас",
        "projects.voice.li2": "Управление на устройства и мониторинг чрез глас",
        "projects.voice.li3": "Лесно добавяне и премахване на устройства",

        // Fingerbot проект (съществуващ)
        "projects.fingerbot.title": "🖲️ Управление на Zigbee Fingerbot чрез NFC и Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC врата",
        "projects.fingerbot.li1": "Безконтактен достъп",
        "projects.fingerbot.li2": "Интеграция с Home Assistant",
        "projects.fingerbot.li3": "Локален и офлайн контрол",
        "projects.fingerbot.li4": "Съвместим с всяко NFC устройство",

        // Eco режим проект (съществуващ)
        "projects.eco.title": "🌿 Eco режим за термостати в Home Assistant",
        "projects.eco.imageAlt": "Еко режим термостат",
        "projects.eco.li1": "Спестяване на енергия",
        "projects.eco.li2": "Комфорт без компромис",
        "projects.eco.li3": "Лесна интеграция и персонализация",

        // Dual Zigbee проект (НОВ) (съществуващ)
        "projects.dualzigbee.title": "🏠 HOME ASSISTANT с две Zigbee мрежи чрез Zigbee2MQTT",
        "projects.dualzigbee.imageAlt": "Две Zigbee мрежи",
        "projects.dualzigbee.li1": "Две независими Zigbee мрежи",
        "projects.dualzigbee.li2": "Интеграция с Zigbee2MQTT",
        "projects.dualzigbee.li3": "Подобрена производителност",
        "projects.dualzigbee.li4": "Гъвкавост и мащабируемост",
        "projects.dualzigbee.li5": "Локално управление",
        "projects.dualzigbee.li6": "Подробна документация",

        // Away режим проект (съществуващ)
        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Банер Away Mode",
        "projects.away.li1": "Автоматизирано управление на away режима",
        "projects.away.li2": "Интеграция с Home Assistant",
        "projects.away.li3": "Гъвкави сценарии с input booleans",

        // Таймер проект (съществуващ)
        "projects.timer.title": "⏱️ Home Assistant - Гъвкава таймер автоматизация",
        "projects.timer.imageAlt": "Банер гъвкав таймер",
        "projects.timer.li1": "Настройка на интервал чрез UI (часове, минути, секунди)",
        "projects.timer.li2": "Изпълнява действия след изтичане на интервала",
        "projects.timer.li3": "Предотвратява преждевременно задействане",

        // За нас (съществуващ)
        "about.title": "За нас",
        "about.description": "Това хранилище съдържа моите персонални проекти за Home Assistant, автоматизации, конфигурации и интеграции. Повечето проекти имат поддръжка на английски и български и редовно добавям нови функции и подобрения.",
        
        // Документация - НОВИ ПРЕВОДИ
        "documentation.title": "Документация",
        "documentation.description": "Документация за Home Assistant проекти",
        "documentation.modalTitle": "Документация",
        "documentation.docsDescription": "Кликнете върху всеки документ за да видите пълното му съдържание.",
        "documentation.loading": "Зареждане на документи...",
        "documentation.link1": "Списък с add-on хранилища",
        "documentation.link2": "Видове автоматизации", 
        "documentation.link3": "Методи на конфигуриране",
        "documentation.viewAll": "Виж всички документи",
        
        // Документация - съдържание (НОВО)
        "doc.repositories.title": "Списък с add-on хранилища",
        "doc.repositories.description": "Пълен списък на полезни add-on хранилища за Home Assistant",
        "doc.repositories.content": `
          <h3>Официални хранилища</h3>
          <ul>
            <li><strong>Home Assistant Core</strong> - Официални добавки от Home Assistant</li>
            <li><strong>Community Add-ons</strong> - Добавки поддържани от общността</li>
            <li><strong>Supervisor</strong> - Добавки за системен мениджмънт</li>
          </ul>
          
          <h3>Хранилища от общността</h3>
          <ul>
            <li><strong>ESPHome</strong> - За ESP8266/ESP32 устройства</li>
            <li><strong>Node-RED</strong> - Визуален инструмент за програмиране</li>
            <li><strong>Mosquitto</strong> - MQTT брокер</li>
            <li><strong>Zigbee2MQTT</strong> - Zigbee към MQTT мост</li>
          </ul>
          
          <h3>Специализирани хранилища</h3>
          <ul>
            <li><strong>Бази данни</strong> - MariaDB, InfluxDB, PostgreSQL</li>
            <li><strong>Медия</strong> - Plex, Jellyfin, AirSonos</li>
            <li><strong>Сигурност</strong> - AdGuard, Pi-hole, VPN</li>
          </ul>
        `,
        
        "doc.automations.title": "Видове автоматизации",
        "doc.automations.description": "Преглед на различни видове автоматизации и тяхното приложение",
        "doc.automations.content": `
          <h3>Времеви автоматизации</h3>
          <ul>
            <li><strong>Просто време</strong> - Изпълнение в определен час</li>
            <li><strong>Изгрев/Залез</strong> - Въз основа на позицията на слънцето</li>
            <li><strong>Повтарящи се</strong> - Ежедневни, седмични, месечни графици</li>
          </ul>
          
          <h3>Събитийни автоматизации</h3>
          <ul>
            <li><strong>Състояние на устройство</strong> - Когато устройството промени състояние</li>
            <li><strong>Детекция на движение</strong> - Когато се засече движение</li>
            <li><strong>Врата/Прозорец</strong> - Когато се отвори или затвори</li>
          </ul>
          
          <h3>Условни автоматизации</h3>
          <ul>
            <li><strong>Времеви условия</strong> - Въз основа на метеорологични данни</li>
            <li><strong>Детекция на присъствие</strong> - Когато някой е вкъщи/извън</li>
            <li><strong>Условия на устройство</strong> - Въз основа на статуса на устройството</li>
          </ul>
          
          <h3>Разширени автоматизации</h3>
          <ul>
            <li><strong>Последователности</strong> - Комплексни многостепенни автоматизации</li>
            <li><strong>Шаблони</strong> - Повторно използваеми шаблони за автоматизации</li>
            <li><strong>Node-RED</strong> - Визуални автоматизации базирани на потоци</li>
          </ul>
        `,
        
        "doc.config-methods.title": "Методи на конфигуриране",
        "doc.config-methods.description": "Различни начини за конфигуриране на Home Assistant и добавки",
        "doc.config-methods.content": `
          <h3>YAML конфигурация</h3>
          <ul>
            <li><strong>Configuration.yaml</strong> - Основен конфигурационен файл</li>
            <li><strong>Packages</strong> - Модулна конфигурационна структура</li>
            <li><strong>Includes</strong> - Разделяне на конфигурацията в множество файлове</li>
          </ul>
          
          <h3>UI конфигурация</h3>
          <ul>
            <li><strong>Панел за настройки</strong> - Визуал интерфейс за конфигурация</li>
            <li><strong>Интеграции</strong> - Добавяне на устройства чрез UI</li>
            <li><strong>Редактор на автоматизации</strong> - Визуално създаване на автоматизации</li>
          </ul>
          
          <h3>Разширена конфигурация</h3>
          <ul>
            <li><strong>Команден ред</strong> - Използване на терминал/SSH</li>
            <li><strong>API</strong> - REST API за отдалечена конфигурация</li>
            <li><strong>Шаблони</strong> - Динамични конфигурации с Jinja2</li>
          </ul>
          
          <h3>Бекъп и миграция</h3>
          <ul>
            <li><strong>Снимки</strong> - Пълни системни бекъпи</li>
            <li><strong>Експорт на конфигурация</strong> - Експорт на конкретни конфигурации</li>
            <li><strong>Версионен контрол</strong> - Използване на Git за управление на конфигурация</li>
          </ul>
        `,
        
        "doc.fullDocumentation": "Отвори пълната документация",
        
        // Поддръжка (съществуващ)
        "support.title": "Генератори",
        "support.description": "Ако срещнете проблеми с генераторите, не се колебайте да се свържете с мен с помощта на контактната ни форма. В случай на трудности с се надяваме да ме потърсите, дори и за критики, те са важни за мен за да не спира стремежа ми да се подобрявам и уча със всеки ден.",
        "support.generators.title": "Генератори",
        "support.generators.description": "В случай на проблеми с генераторите, пишете ми на pasevdenislav@gmail.com със тема 'HASS Генератори' или чрез контактната форма на сайта.",
        "support.generators.ntfy": "Генератор за ntfy известия",
        "support.generators.mobile": "Генератор на известия до mobile app", 
        "support.generators.shell": "Генератор на command shell кодове",
        
        // Генератори бутони (съществуващ)
        "generator.ntfy": "Генератор за ntfy известия",
        "generator.mobile": "Генератор на известия до mobile app",
        "generator.shell": "Генератор на command shell кодове",
        "generators.title": "Генератори",
        "generators.description": "При нередности с генераторите ми пишете на контактната форма с тема 'HASS Генератори'.",
        
        // Контакт (съществуващ)
        "contact.title": "Контакт",
        "contact.description": "Изпратете ни съобщение и ще ви отговорим възможно най-бързо.",
        "contact.form.name": "Име",
        "contact.form.email": "Имейл", 
        "contact.form.subject": "Тема",
        "contact.form.message": "Съобщение",
        "contact.form.submit": "Изпрати съобщение",
        "contact.form.loading": "Изпращане...",
        "contact.form.success": "Съобщението е изпратено успешно! Ще се свържем с вас скоро.",
        "contact.form.error": "Грешка при изпращане. Моля, опитайте отново.",
        "contact.form.validation": "Моля, попълнете всички полета.",
        
        // Placeholder текстове за контактната форма (съществуващ)
        "contact.form.namePlaceholder": "Въведете вашето име",
        "contact.form.emailPlaceholder": "Въведете вашия имейл адрес",
        "contact.form.subjectPlaceholder": "Тема на съобщението",
        "contact.form.messagePlaceholder": "Напишете вашето съобщение тук...",
        
        // Контакт информация (съществуващ)
        "contact.info.title": "Алтернативни начини за връзка",
        "contact.info.email": "Имейл:",
        "contact.info.github": "GitHub:",
        "contact.info.donate": "Дарение:",
        
        // Footer (съществуващ)
        "footer.title": "Home Assistant Проекти",
        "footer.description": "Оптимизиране на ежедневието, повишаване на комфорта и пестене на енергия в интелигентния дом.",
        "footer.links": "Връзки",
        "footer.connect": "Свържи се",
        "footer.donate": "Дарение",
        "footer.copyright": "© 2023 Home Assistant Projects. Всички права запазени."
    },
    
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // Deutsche Übersetzungen
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    de: {
        // Navigation (съществуващ)
        "nav.home": "Startseite",
        "nav.projects": "Projekte",
        "nav.about": "Über uns", 
        "nav.documentation": "Dokumentation",
        "nav.contact": "Kontakt",
        "nav.generators": "Generatoren",
        
        // Hero (съществуващ)
        "hero.title": "🏠 HOME ASSISTANT PROJEKTE UND ENTWICKLUNGEN",
        "hero.badge1": "🔧 Smart Home", 
        "hero.badge2": "🧠 Automatisierungen",
        "hero.badge3": "🌐 IoT-Integrationen",
        "hero.description": "Willkommen in meinem Home Assistant Repository! Hier finden Sie eine Sammlung meiner Projekte, Automatisierungen, Konfigurationen und Integrationen, die dazu dienen, den Alltag zu erleichtern, den Komfort zu erhöhen und Energie im smarten Zuhause zu sparen.",
        "hero.cta": "Projekte Erkunden",
        
        // Summary (съществуващ)
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
        
        // Platforms (съществуващ)
        "platforms.homeassistant": "HomeAssistant", 
        "platforms.web": "WEB",
        "platforms.android": "ANDROID",
        
        // Projekte (съществуващ)
        "projects.title": "🛠️ PROJEKT",
        "projects.advantages": "Vorteile:",
        "projects.goto": "↪️ ZUM PROJEKT ▶️",
        
        // Zigbee Projekt (DE) (съществуващ)
        "projects.zigbee.title": "🛜 Erstellen/Integration eines Zigbee-Netzwerks",
        "projects.zigbee.imageAlt": "Zigbee Netzwerk",
        "projects.zigbee.li1": "Internet-unabhängig mit Zigbee2MQTT",
        "projects.zigbee.li2": "Belastet nicht Ihr Internetnetzwerk",
        "projects.zigbee.li3": "Einfache Installation und Migration von Geräten",
        "projects.zigbee.li4": "Zigbee-Geräte fungieren als Repeater",
        "projects.zigbee.li5": "Erschwingliche Zigbee-Hardware",
        "projects.zigbee.li6": "Aufrüstbar bei hoher Netzbelastung",
        
        // Einkaufsliste Projekt (съществуващ)
        "projects.shopping.title": "🛒 Einkaufsliste mit Bildern", 
        "projects.shopping.imageAlt": "Einkaufsliste",
        "projects.shopping.li1": "Schnelles Finden von Artikeln nach Kategorien",
        "projects.shopping.li2": "Visuelle Identifikation durch Bilder",
        "projects.shopping.li3": "Haushaltsmitglieder erhalten Benachrichtigungen für neue Artikel",
        "projects.shopping.li4": "Entfernt automatisch abgehakte Artikel",

        // WLED Projekt (съществуващ)
        "projects.wled.title": "🎤🔉 WLED SoundReactive Intelligente Lichtshow",
        "projects.wled.imageAlt": "WLED SoundReactive Animation",
        "projects.wled.li1": "Echtzeitreaktion jenseits der menschlichen Wahrnehmung",
        "projects.wled.li2": "Automatische Mikrofon-Sensitivitätsanpassung",
        "projects.wled.li3": "Kostengünstig und energieeffizient",
        "projects.wled.li4": "Vollständiger WLED-Mod mit offiziellen Firmware-Funktionen",
        "projects.wled.li5": "Webinterface und mobile Apps — Home Assistant kompatibel",

        // TASMOTA Projekt (съществуващ)
        "projects.tasmota.title": "🤖 TASMOTA – Integration und Geräte",
        "projects.tasmota.imageAlt": "Tasmota Geräte",
        "projects.tasmota.li1": "Vollständige Geräteverwaltung",
        "projects.tasmota.li2": "Unabhängig von Internetverbindung",
        "projects.tasmota.li3": "Sofortige Steuerung über TASMOTA, Home Assistant und Alexa",
        "projects.tasmota.li4": "Belastet Ihr Internetnetzwerk nicht",

        // HASS mit zwei Zigbee-Netzwerken Projekt (съществуващ)
        "projects.hass2zigbee.title": "🏠 HASS mit zwei Zigbee-Netzwerken",
        "projects.hass2zigbee.imageAlt": "Zwei Zigbee Netzwerke",
        "projects.hass2zigbee.li1": "Unterstützt mehr Geräte",
        "projects.hass2zigbee.li2": "Trennung von Last und Funktion",
        "projects.hass2zigbee.li3": "Verbesserte Kompatibilitätstests",
        "projects.hass2zigbee.li4": "Flexible Migration und Experimente",

        // Sprachsteuerung Projekt (съществуващ)
        "projects.voice.title": "🎙️ Sprachsteuerung von HASS-Geräten (Alexa / Google Home)",
        "projects.voice.imageAlt": "Sprachsteuerungsintegration",
        "projects.voice.li1": "Steuerung von Automatisierungen und Skripten per Sprache",
        "projects.voice.li2": "Geräte steuern und Sensoren per Sprache überwachen",
        "projects.voice.li3": "Einfaches Hinzufügen und Entfernen von Geräten",

        // Fingerbot Projekt (съществуващ)
        "projects.fingerbot.title": "🖲️ Zigbee Fingerbot Steuerung via NFC & Home Assistant",
        "projects.fingerbot.imageAlt": "Fingerbot NFC Tür",
        "projects.fingerbot.li1": "Kontaktloser Zugang",
        "projects.fingerbot.li2": "Integration mit Home Assistant",
        "projects.fingerbot.li3": "Lokale und Offline-Steuerung",
        "projects.fingerbot.li4": "Kompatibel mit jedem NFC-fähigen Gerät",

        // Eco Modus Projekt (съществуващ)
        "projects.eco.title": "🌿 Eco Modus für Thermostate in Home Assistant",
        "projects.eco.imageAlt": "Eco Modus Thermostat",
        "projects.eco.li1": "Energieeinsparung",
        "projects.eco.li2": "Komfort ohne Kompromisse",
        "projects.eco.li3": "Einfache Integration und Anpassung",

        // Dual Zigbee Projekt (NEU) (съществуващ)
        "projects.dualzigbee.title": "🏠 HOME ASSISTANT mit zwei Zigbee-Netzwerken über Zigbee2MQTT",
        "projects.dualzigbee.imageAlt": "Zwei Zigbee Netzwerke",
        "projects.dualzigbee.li1": "Zwei unabhängige Zigbee-Netzwerke",
        "projects.dualzigbee.li2": "Integration mit Zigbee2MQTT",
        "projects.dualzigbee.li3": "Verbesserte Leistung",
        "projects.dualzigbee.li4": "Flexibilität und Skalierbarkeit",
        "projects.dualzigbee.li5": "Lokale Steuerung",
        "projects.dualzigbee.li6": "Detaillierte Dokumentation",

        // Away Mode Projekt (съществуващ)
        "projects.away.title": "🔋 HASS-AWAY-MODE / AWAY MODE",
        "projects.away.imageAlt": "Away Mode Banner",
        "projects.away.li1": "Automatisiertes Away-Mode-Management",
        "projects.away.li2": "Home Assistant Integration",
        "projects.away.li3": "Flexible Szenarien mit Input-Booleans",

        // Timer Projekt (съществуващ)
        "projects.timer.title": "⏱️ Home Assistant - Flexible Timer Automation",
        "projects.timer.imageAlt": "Flexibler Timer Banner",
        "projects.timer.li1": "Intervall über UI einstellen (Stunden, Minuten, Sekunden)",
        "projects.timer.li2": "Aktionen nach Ablauf des Intervalls ausführen",
        "projects.timer.li3": "Verhindert vorzeitiges Auslösen",

        // Über uns (съществуващ)
        "about.title": "Über uns",
        "about.description": "Dieses Repository enthält meine persönlichen Home Assistant Projekte, Automatisierungen, Konfigurationen und Integrationen. Die meisten Projekte unterstützen Englisch und Bulgarisch und werden laufend erweitert.",
        
        // Документация - НОВИ ПРЕВОДИ
        "documentation.title": "Dokumentation",
        "documentation.description": "Dokumentation für Home Assistant Projekte",
        "documentation.modalTitle": "Dokumentation",
        "documentation.docsDescription": "Klicken Sie auf ein Dokument, um den vollständigen Inhalt anzuzeigen.",
        "documentation.loading": "Dokumente werden geladen...",
        "documentation.link1": "Liste der Add-on-Repositorys",
        "documentation.link2": "Arten von Automatisierungen",
        "documentation.link3": "Konfigurationsmethoden",
        "documentation.viewAll": "Alle Dokumente ansehen",
        
        // Документация - съдържание (НОВО)
        "doc.repositories.title": "Liste der Add-on-Repositorys",
        "doc.repositories.description": "Vollständige Liste nützlicher Add-on-Repositorys für Home Assistant",
        "doc.repositories.content": `
          <h3>Offizielle Repositorys</h3>
          <ul>
            <li><strong>Home Assistant Core</strong> - Offizielle Add-ons von Home Assistant</li>
            <li><strong>Community Add-ons</strong> - Community-gepflegte Add-ons</li>
            <li><strong>Supervisor</strong> - Systemverwaltungs-Add-ons</li>
          </ul>
          
          <h3>Community-Repositorys</h3>
          <ul>
            <li><strong>ESPHome</strong> - Für ESP8266/ESP32 Geräte</li>
            <li><strong>Node-RED</strong> - Visuelles Programmiertool</li>
            <li><strong>Mosquitto</strong> - MQTT-Broker</li>
            <li><strong>Zigbee2MQTT</strong> - Zigbee zu MQTT Bridge</li>
          </ul>
          
          <h3>Spezialisierte Repositorys</h3>
          <ul>
            <li><strong>Datenbank Add-ons</strong> - MariaDB, InfluxDB, PostgreSQL</li>
            <li><strong>Medien Add-ons</strong> - Plex, Jellyfin, AirSonos</li>
            <li><strong>Sicherheits Add-ons</strong> - AdGuard, Pi-hole, VPN</li>
          </ul>
        `,
        
        "doc.automations.title": "Arten von Automatisierungen",
        "doc.automations.description": "Überblick über verschiedene Automatisierungsarten und ihre Anwendungen",
        "doc.automations.content": `
          <h3>Zeitbasierte Automatisierungen</h3>
          <ul>
            <li><strong>Einfache Zeit</strong> - Ausführung zu bestimmter Zeit</li>
            <li><strong>Sonnenaufgang/Sonnenuntergang</strong> - Basierend auf Sonnenposition</li>
            <li><strong>Wiederkehrend</strong> - Tägliche, wöchentliche, monatliche Zeitpläne</li>
          </ul>
          
          <h3>Ereignisbasierte Automatisierungen</h3>
          <ul>
            <li><strong>Gerätestatus</strong> - Wenn Gerät den Status ändert</li>
            <li><strong>Bewegungserkennung</strong> - Wenn Bewegung erkannt wird</li>
            <li><strong>Tür/Fenster</strong> - Wenn geöffnet oder geschlossen</li>
          </ul>
          
          <h3>Bedingungsbasierte Automatisierungen</h3>
          <ul>
            <li><strong>Wetterbedingungen</strong> - Basierend auf Wetterdaten</li>
            <li><strong>Anwesenheitserkennung</strong> - Wenn jemand zu Hause/weg ist</li>
            <li><strong>Gerätebedingungen</strong> - Basierend auf Gerätestatus</li>
          </ul>
          
          <h3>Erweiterte Automatisierungen</h3>
          <ul>
            <li><strong>Skript-Sequenzen</strong> - Komplexe mehrstufige Automatisierungen</li>
            <li><strong>Blueprints</strong> - Wiederverwendbare Automatisierungsvorlagen</li>
            <li><strong>Node-RED</strong> - Visuelle flussbasierte Automatisierungen</li>
          </ul>
        `,
        
        "doc.config-methods.title": "Konfigurationsmethoden",
        "doc.config-methods.description": "Verschiedene Möglichkeiten zur Konfiguration von Home Assistant und Add-ons",
        "doc.config-methods.content": `
          <h3>YAML-Konfiguration</h3>
          <ul>
            <li><strong>Configuration.yaml</strong> - Hauptkonfigurationsdatei</li>
            <li><strong>Packages</strong> - Modulare Konfigurationsstruktur</li>
            <li><strong>Includes</strong> - Aufteilung der Konfiguration in mehrere Dateien</li>
          </ul>
          
          <h3>UI-Konfiguration</h3>
          <ul>
            <li><strong>Einstellungs-Panel</strong> - Visuelle Konfigurationsoberfläche</li>
            <li><strong>Integrationen</strong> - Hinzufügen von Geräten über die Benutzeroberfläche</li>
            <li><strong>Automatisierungs-Editor</strong> - Visuelles Erstellen von Automatisierungen</li>
          </ul>
          
          <h3>Erweiterte Konfiguration</h3>
          <ul>
            <li><strong>Befehlszeile</strong> - Verwenden von Terminal/SSH</li>
            <li><strong>API</strong> - REST-API für Fernkonfiguration</li>
            <li><strong>Vorlagen</strong> - Dynamische Konfigurationen mit Jinja2</li>
          </ul>
          
          <h3>Sicherung & Migration</h3>
          <ul>
            <li><strong>Sicherungen</strong> - Vollständige Systemsicherungen</li>
            <li><strong>Konfigurationsexport</strong> - Export spezifischer Konfigurationen</li>
            <li><strong>Versionskontrolle</strong> - Verwenden von Git für Konfigurationsmanagement</li>
          </ul>
        `,
        
        "doc.fullDocumentation": "Vollständige Dokumentation öffnen",
        
        // Support (съществуващ)
        "support.title": "Generators",
        "support.description": "Sollten Sie Probleme mit den Generatoren haben, können Sie mich gerne über unser Kontaktformular kontaktieren. Bei Schwierigkeiten hoffen wir, dass Sie sich an mich wenden, auch bei Kritik, sie ist mir wichtig, um meinen Wunsch, mich jeden Tag zu verbessern und zu lernen, nicht zu stoppen.",
        "support.generators.title": "Generatoren",
        "support.generators.description": "Bei Problemen mit den Generatoren schreiben Sie mir an pasevdenislav@gmail.com mit dem Betreff 'HASS Generatoren' oder über das Kontaktformular auf der Website.",
        "support.generators.ntfy": "Generator für ntfy-Benachrichtigungen",
        "support.generators.mobile": "Generator für Mobile-App-Benachrichtigungen",
        "support.generators.shell": "Generator für Command-Shell-Code",
        
        // Generatoren Buttons (съществуващ)
        "generator.ntfy": "Generator für ntfy-Benachrichtigungen",
        "generator.mobile": "Generator für Mobile-App-Benachrichtigungen",
        "generator.shell": "Generator für Command-Shell-Code",
        "generators.title": "Generatoren",
        "generators.description": "Wenn Sie Probleme mit den Generatoren haben, kontaktieren Sie mich bitte über das Kontaktformular mit dem Betреф 'HASS Generatoren'.",
        
        // Kontakt (съществуващ)
        "contact.title": "Kontakt",
        "contact.description": "Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.",
        "contact.form.name": "Name",
        "contact.form.email": "E-Mail", 
        "contact.form.subject": "Betreff",
        "contact.form.message": "Nachricht",
        "contact.form.submit": "Nachricht Senden",
        "contact.form.loading": "Wird gesendet...",
        "contact.form.success": "Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
        "contact.form.error": "Fehler beim Senden. Bitte versuchen Sie es erneut.",
        "contact.form.validation": "Bitte füllen Sie alle Felder aus.",
        
        // Placeholder-Texte für das Kontaktformular (съществуващ)
        "contact.form.namePlaceholder": "Geben Sie Ihren Namen ein",
        "contact.form.emailPlaceholder": "Geben Sie Ihre E-Mail-Adresse ein",
        "contact.form.subjectPlaceholder": "Betreff der Nachricht",
        "contact.form.messagePlaceholder": "Schreiben Sie hier Ihre Nachricht...",
        
        // Kontaktinformationen (съществуващ)
        "contact.info.title": "Alternative Kontaktmöglichkeiten",
        "contact.info.email": "E-Mail:",
        "contact.info.github": "GitHub:",
        "contact.info.donate": "Spenden:",
        
        // Footer (съществуващ)
        "footer.title": "Home Assistant Projekte",
        "footer.description": "Vereinfachung des Alltags, Erhöhung des Komforts und Einsparung von Energie im Smart Home.",
        "footer.links": "Links",
        "footer.connect": "Verbinden",
        "footer.donate": "Spenden",
        "footer.copyright": "© 2023 Home Assistant Projects. Alle Rechte vorbehalten."
    }
};

// Auto-fill missing English translations
(function ensureEnTranslations() {
    if (!translations || !translations.en) return;
    const otherLocales = Object.keys(translations).filter(l => l !== 'en');
    const added = [];
    otherLocales.forEach(locale => {
        const src = translations[locale] || {};
        Object.keys(src).forEach(key => {
            if (!(key in translations.en)) {
                translations.en[key] = src[key];
                added.push(key);
            }
        });
    });
    if (added.length) {
        console.warn('Auto-filled missing en translation keys:', added);
    }
})();