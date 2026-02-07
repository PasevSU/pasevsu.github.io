// YAML code examples
const yamlExamples = {
    single: `alias: "Single Mode Example - Alarm"
description: "Alarm that won't restart until previous completes"
mode: single
trigger:
  - platform: state
    entity_id: binary_sensor.motion
    to: "on"
action:
  - service: alarm_control_panel.alarm_trigger
    target:
      entity_id: alarm_control_panel.house_alarm
  - delay: "00:05:00"  # Wait 5 minutes
  - service: alarm_control_panel.alarm_disarm
    target:
      entity_id: alarm_control_panel.house_alarm`,

    restart: `alias: "Restart Mode Example - Light Timer"
description: "Light timer that restarts on new motion"
mode: restart
trigger:
  - platform: state
    entity_id: binary_sensor.motion
    to: "on"
action:
  - service: light.turn_on
    target:
      entity_id: light.corridor
  - delay: "00:05:00"  # 5 minutes
  - service: light.turn_off
    target:
      entity_id: light.corridor`,

    queued: `alias: "Queued Mode Example - Notifications"
description: "Send notifications to users sequentially"
mode: queued
trigger:
  - platform: state
    entity_id: binary_sensor.alert
    to: "on"
action:
  - service: notify.user1
    data:
      message: "Alert notification for User 1"
  - delay: "00:00:10"  # 10 seconds between notifications
  - service: notify.user2
    data:
      message: "Alert notification for User 2"
  - delay: "00:00:10"
  - service: notify.user3
    data:
      message: "Alert notification for User 3"`,

    parallel: `alias: "Parallel Mode Example - Room Lights"
description: "Turn on lights in different rooms independently"
mode: parallel
trigger:
  - platform: state
    entity_id: binary_sensor.living_room_motion
    to: "on"
  - platform: state
    entity_id: binary_sensor.bedroom_motion
    to: "on"
  - platform: state
    entity_id: binary_sensor.kitchen_motion
    to: "on"
action:
  - choose:
      - conditions: "{{ trigger.entity_id == 'binary_sensor.living_room_motion' }}"
        sequence:
          - service: light.turn_on
            target:
              entity_id: light.living_room
      - conditions: "{{ trigger.entity_id == 'binary_sensor.bedroom_motion' }}"
        sequence:
          - service: light.turn_on
            target:
              entity_id: light.bedroom
      - conditions: "{{ trigger.entity_id == 'binary_sensor.kitchen_motion' }}"
        sequence:
          - service: light.turn_on
            target:
              entity_id: light.kitchen`,

    queued_max: `alias: "Queued with Max Example - Protection"
description: "Limited queue to prevent overload"
mode: queued
max: 3  # Maximum of 3 waiting executions
trigger:
  - platform: mqtt
    topic: "sensors/rapid_trigger"
action:
  - service: switch.turn_on
    target:
      entity_id: switch.emergency_device
  - delay: "00:01:00"  # 1 minute operation
  - service: switch.turn_off
    target:
      entity_id: switch.emergency_device`,

    parallel_max: `alias: "Parallel with Max Example - Limited Alarms"
description: "Only specified number of alarms can play simultaneously"
mode: parallel
max: 2  # Maximum of 2 concurrent executions
trigger:
  - platform: state
    entity_id: binary_sensor.alert_zone_1
    to: "on"
  - platform: state
    entity_id: binary_sensor.alert_zone_2
    to: "on"
  - platform: state
    entity_id: binary_sensor.alert_zone_3
    to: "on"
action:
  - service: media_player.play_media
    target:
      entity_id: media_player.speakers
    data:
      media_content_id: "alarm_sound.mp3"
      media_content_type: "music"
  - delay: "00:00:30"  # Play for 30 seconds
  - service: media_player.media_stop
    target:
      entity_id: media_player.speakers`
};

// Complete translations for automations
const automationsTranslations = {
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // English translations
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    en: {
        "back.button": "Home Page",
        "page.title": "Types of Automations - Home Assistant",
        "header.title": "🧲 Types of Automations",
        "repo.description": "The type of automation is defined by the `mode:` section at its end.",

        // Table content
        "table.mode": "mode",
        "table.description": "Description",
        "table.usage": "Usage Example",
        
        "mode.single": "single",
        "desc.single": "Only one execution is allowed. New triggers are ignored while one is running.",
        "usage.single": "An alarm that shouldn't restart until the previous one has completed.",
        
        "mode.restart": "restart", 
        "desc.restart": "A new trigger cancels the current execution and starts from the beginning.",
        "usage.restart": "A light timer – restarts on new motion.",
        
        "mode.queued": "queued",
        "desc.queued": "Each new trigger is queued and runs after the previous finishes.",
        "usage.queued": "Notifications sent to multiple users sequentially.",
        
        "mode.parallel": "parallel",
        "desc.parallel": "Allows multiple executions simultaneously.",
        "usage.parallel": "Turning on lights in different rooms independently.",
        
        "mode.queued_max": "queued with max:",
        "desc.queued_max": "Limited queue – allows up to specified waiting executions.",
        "usage.queued_max": "Protection from overload in rapid triggering situations.",
        
        "mode.parallel_max": "parallel with max:",
        "desc.parallel_max": "Limits number of concurrent executions.",
        "usage.parallel_max": "Only specified number of alarms can play at the same time.",

        // Section titles
        "section.types": "🚀 TYPES",
        "section.single": "⚗️ single",
        "section.restart": "⚗️ restart", 
        "section.queued": "⚗️ queued",
        "section.parallel": "⚗️ parallel",
        "section.queued_max": "⚗️ queued with max:",
        "section.parallel_max": "⚗️ parallel with max:",

        // Single mode content
        "single.diagram": "The `single` mode diagram illustrates the simplest automation behavior in Home Assistant.",
        "single.diagram_show": "What the diagram shows:",
        "single.diagram_point1": "Trigger 1 — starts the automation and executes the actions.",
        "single.diagram_point2": "Trigger 2 and 3 — are ignored while the automation is still running.",
        "single.diagram_point3": "No queue or parallelism — only one active session at a time.",
        "single.practice": "What it means in practice:",
        "single.practice_point1": "If the automation is already running, new triggers are ignored.",
        "single.practice_point2": "No restart, no queuing, no parallel execution.",
        "single.practice_point3": "This avoids overload, but can miss important events.",
        "single.example": "Example scenario:",

        // Restart mode content
        "restart.diagram": "What the diagram shows:",
        "restart.diagram_point1": "A trigger starts the automation.",
        "restart.diagram_point2": "If another trigger comes before the actions finish, the current run is stopped and restarted from the beginning.",
        "restart.example": "Example scenario:",

        // Queued mode content
        "queued.diagram": "What the diagram shows:",
        "queued.diagram_point1": "Every new trigger gets queued if the automation is still running.",
        "queued.diagram_point2": "Each queue item is executed sequentially.",
        "queued.diagram_point3": "`max:` defines the maximum length of the queue.",
        "queued.example": "Example scenario:",

        // Parallel mode content
        "parallel.diagram": "What the diagram shows:",
        "parallel.diagram_point1": "All triggers execute immediately in parallel.",
        "parallel.diagram_point2": "No waiting or stopping ongoing actions.",
        "parallel.practice": "What happens in practice:",
        "parallel.practice_point1": "Unlimited executions by default.",
        "parallel.practice_point2": "Can overload the system if not monitored.",
        "parallel.example": "Example scenario:",

        // Queued with max content
        "queued_max.how": "How it works:",
        "queued_max.scenario": "Scenario:",

        // Parallel with max content
        "parallel_max.how": "How it works:",
        "parallel_max.scenario": "Scenario:",

        "tip.title": "💡 Tip:",
        "tip.text": "If you like this project, check out [more of my repositories here](https://github.com/Bacard1?tab=repositories).",
        "tip.contact": "If you need help or have questions, feel free to contact me."
    },

    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // German translations  
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    de: {
        "back.button": "Startseite",
        "page.title": "Arten von Automatisierungen - Home Assistant",
        "header.title": "🧲 Arten von Automatisierungen",
        "repo.description": "Der Typ der Automatisierung wird durch den `mode:` Abschnitt am Ende definiert.",

        // Table content
        "table.mode": "Modus",
        "table.description": "Beschreibung",
        "table.usage": "Anwendungsbeispiel",
        
        "mode.single": "single",
        "desc.single": "Nur eine Ausführung ist erlaubt. Neue Trigger werden ignoriert, während eine läuft.",
        "usage.single": "Ein Alarm, der nicht neu starten sollte, bis der vorherige abgeschlossen ist.",
        
        "mode.restart": "restart",
        "desc.restart": "Ein neuer Trigger bricht die aktuelle Ausführung ab und startet von vorne.",
        "usage.restart": "Ein Licht-Timer – startet bei neuer Bewegung neu.",
        
        "mode.queued": "queued",
        "desc.queued": "Jeder neue Trigger wird in die Warteschlange gestellt und nach dem Ende des vorherigen ausgeführt.",
        "usage.queued": "Benachrichtigungen, die nacheinander an mehrere Benutzer gesendet werden.",
        
        "mode.parallel": "parallel",
        "desc.parallel": "Ermöglicht mehrere gleichzeitige Ausführungen.",
        "usage.parallel": "Lichter in verschiedenen Räumen unabhängig einschalten.",
        
        "mode.queued_max": "queued mit max:",
        "desc.queued_max": "Begrenzte Warteschlange – erlaubt bis zu einer bestimmten Anzahl wartender Ausführungen.",
        "usage.queued_max": "Schutz vor Überlastung bei schnellen Trigger-Situationen.",
        
        "mode.parallel_max": "parallel mit max:",
        "desc.parallel_max": "Begrenzt die Anzahl gleichzeitiger Ausführungen.",
        "usage.parallel_max": "Nur eine bestimmte Anzahl von Alarmen kann gleichzeitig abgespielt werden.",

        // Section titles
        "section.types": "🚀 ARTEN",
        "section.single": "⚗️ single",
        "section.restart": "⚗️ restart",
        "section.queued": "⚗️ queued",
        "section.parallel": "⚗️ parallel",
        "section.queued_max": "⚗️ queued mit max:",
        "section.parallel_max": "⚗️ parallel mit max:",

        // Single mode content
        "single.diagram": "Das `single` Modus-Diagramm veranschaulicht das einfachste Automatisierungsverhalten in Home Assistant.",
        "single.diagram_show": "Was das Diagramm zeigt:",
        "single.diagram_point1": "Trigger 1 — startet die Automatisierung und führt die Aktionen aus.",
        "single.diagram_point2": "Trigger 2 und 3 — werden ignoriert, während die Automatisierung noch läuft.",
        "single.diagram_point3": "Keine Warteschlange oder Parallelität — nur eine aktive Sitzung gleichzeitig.",
        "single.practice": "Was es in der Praxis bedeutet:",
        "single.practice_point1": "Wenn die Automatisierung bereits läuft, werden neue Trigger ignoriert.",
        "single.practice_point2": "Kein Neustart, keine Warteschlange, keine parallele Ausführung.",
        "single.practice_point3": "Dies vermeidet Überlastung, kann aber wichtige Ereignisse verpassen.",
        "single.example": "Beispielszenario:",

        // Restart mode content
        "restart.diagram": "Was das Diagramm zeigt:",
        "restart.diagram_point1": "Ein Trigger startet die Automatisierung.",
        "restart.diagram_point2": "Wenn ein anderer Trigger kommt, bevor die Aktionen beendet sind, wird der aktuelle Lauf gestoppt und von vorne gestartet.",
        "restart.example": "Beispielszenario:",

        // Queued mode content
        "queued.diagram": "Was das Diagramm zeigt:",
        "queued.diagram_point1": "Jeder neue Trigger wird in die Warteschlange gestellt, wenn die Automatisierung noch läuft.",
        "queued.diagram_point2": "Jedes Warteschlangenelement wird nacheinander ausgeführt.",
        "queued.diagram_point3": "`max:` definiert die maximale Länge der Warteschlange.",
        "queued.example": "Beispielszenario:",

        // Parallel mode content
        "parallel.diagram": "Was das Diagramm zeigt:",
        "parallel.diagram_point1": "Alle Trigger werden sofort parallel ausgeführt.",
        "parallel.diagram_point2": "Kein Warten oder Stoppen laufender Aktionen.",
        "parallel.practice": "Was in der Praxis passiert:",
        "parallel.practice_point1": "Standardmäßig unbegrenzte Ausführungen.",
        "parallel.practice_point2": "Kann das System überlasten, wenn nicht überwacht.",
        "parallel.example": "Beispielszenario:",

        // Queued with max content
        "queued_max.how": "Wie es funktioniert:",
        "queued_max.scenario": "Szenario:",

        // Parallel with max content
        "parallel_max.how": "Wie es funktioniert:",
        "parallel_max.scenario": "Szenario:",

        "tip.title": "💡 Tipp:",
        "tip.text": "Wenn Ihnen dieses Projekt gefällt, sehen Sie sich [hier meine weiteren Repositories an](https://github.com/Bacard1?tab=repositories).",
        "tip.contact": "Wenn Sie Hilfe benötigen oder Fragen haben, kontaktieren Sie mich gerne."
    },

    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // Bulgarian translations (default)
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    bg: {
        "back.button": "Начална страница",
        "page.title": "Видове автоматизации - Home Assistant",
        "header.title": "🧲 Видове автоматизации",
        "repo.description": "Типът на автоматизацията се определя от секцията `mode:` в нейния край.",

        // Table content
        "table.mode": "mode",
        "table.description": "Описание",
        "table.usage": "Пример за употреба",
        
        "mode.single": "single",
        "desc.single": "Позволено е само едно изпълнение. Новите тригери се игнорират, докато едно работи.",
        "usage.single": "Аларма, която не трябва да се рестартира, докато предишната не завърши.",
        
        "mode.restart": "restart",
        "desc.restart": "Нов тригер прекратява текущото изпълнение и започва от начало.",
        "usage.restart": "Таймер за светлина – рестартира при ново движение.",
        
        "mode.queued": "queued",
        "desc.queued": "Всеки нов тригер се поставя в опашка и се изпълнява след като предишният завърши.",
        "usage.queued": "Известия, изпратени до множество потребители последователно.",
        
        "mode.parallel": "parallel",
        "desc.parallel": "Позволява множество едновременни изпълнения.",
        "usage.parallel": "Включване на светлини в различни стаи независимо.",
        
        "mode.queued_max": "queued с max:",
        "desc.queued_max": "Ограничена опашка – позволява до определен брой изчакващи изпълнения.",
        "usage.queued_max": "Защита от претоварване в ситуации с бързо задействане.",
        
        "mode.parallel_max": "parallel с max:",
        "desc.parallel_max": "Ограничава броя на едновременните изпълнения.",
        "usage.parallel_max": "Само определен брой аларми могат да свирят едновременно.",

        // Section titles
        "section.types": "🚀 ВИДОВЕ",
        "section.single": "⚗️ single",
        "section.restart": "⚗️ restart",
        "section.queued": "⚗️ queued",
        "section.parallel": "⚗️ parallel",
        "section.queued_max": "⚗️ queued с max:",
        "section.parallel_max": "⚗️ parallel с max:",

        // Single mode content
        "single.diagram": "Диаграмата на режим `single` илюстрира най-простото поведение на автоматизация в Home Assistant.",
        "single.diagram_show": "Какво показва диаграмата:",
        "single.diagram_point1": "Тригер 1 — стартира автоматизацията и изпълнява действията.",
        "single.diagram_point2": "Тригер 2 и 3 — се игнорират, докато автоматизацията все още работи.",
        "single.diagram_point3": "Няма опашка или паралелизъм — само една активна сесия в даден момент.",
        "single.practice": "Какво означава на практика:",
        "single.practice_point1": "Ако автоматизацията вече работи, новите тригери се игнорират.",
        "single.practice_point2": "Няма рестартиране, няма опашка, няма паралелно изпълнение.",
        "single.practice_point3": "Това избягва претоварване, но може да пропусне важни събития.",
        "single.example": "Примерен сценарий:",

        // Restart mode content
        "restart.diagram": "Какво показва диаграмата:",
        "restart.diagram_point1": "Тригер стартира автоматизацията.",
        "restart.diagram_point2": "Ако друг тригер дойде преди действията да завършат, текущият цикъл се спира и започва отначало.",
        "restart.example": "Примерен сценарий:",

        // Queued mode content
        "queued.diagram": "Какво показва диаграмата:",
        "queued.diagram_point1": "Всеки нов тригер се поставя в опашка, ако автоматизацията все още работи.",
        "queued.diagram_point2": "Всеки елемент от опашката се изпълнява последователно.",
        "queued.diagram_point3": "`max:` определя максималната дължина на опашката.",
        "queued.example": "Примерен сценарий:",

        // Parallel mode content
        "parallel.diagram": "Какво показва диаграмата:",
        "parallel.diagram_point1": "Всички тригери се изпълняват незабавно паралелно.",
        "parallel.diagram_point2": "Няма изчакване или спиране на текущи действия.",
        "parallel.practice": "Какво се случва на практика:",
        "parallel.practice_point1": "Неограничени изпълнения по подразбиране.",
        "parallel.practice_point2": "Може да претовари системата, ако не се следи.",
        "parallel.example": "Примерен сценарий:",

        // Queued with max content
        "queued_max.how": "Как работи:",
        "queued_max.scenario": "Сценарий:",

        // Parallel with max content
        "parallel_max.how": "Как работи:",
        "parallel_max.scenario": "Сценарий:",

        "tip.title": "💡 Съвет:",
        "tip.text": "Ако ви харесва този проект, вижте [още от моите репозитории тук](https://github.com/Bacard1?tab=repositories).",
        "tip.contact": "Ако имате нужда от помощ или въпроси, не се колебайте да се свържете с мен."
    }
};

// ✅✅✅ ПРАВИЛНО: Функциите са ПРЕДИ класа ✅✅✅
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('.theme-icon');
        if (savedTheme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// ✅✅✅ СЕГА Е КЛАСЪТ ✅✅✅
class AutomationsManager {
    constructor() {
        this.currentLang = 'bg';
        this.init();
    }

    init() {
        this.setInitialLanguage();
        this.renderContent();
    }

    setInitialLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        if (langParam && ['bg', 'en', 'de'].includes(langParam)) {
            this.currentLang = langParam;
        }
        
        this.updateLanguageButtons();
    }

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }

    renderContent() {
        this.updatePageTitle();
        this.updateHeader();
        this.updateBackButton();
        this.renderAutomationsContent();
        this.updateTipSection();
    }

    updatePageTitle() {
        document.title = automationsTranslations[this.currentLang]['page.title'];
    }

    updateHeader() {
        const header = document.querySelector('.header-title');
        if (header) {
            header.textContent = automationsTranslations[this.currentLang]['header.title'];
        }
        
        const description = document.querySelector('.repo-description');
        if (description) {
            description.textContent = automationsTranslations[this.currentLang]['repo.description'];
        }
    }

    updateBackButton() {
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            const newText = automationsTranslations[this.currentLang]['back.button'];
            backButton.innerHTML = `<span class="back-icon">←</span> ${newText}`;
        }
    }

    renderAutomationsContent() {
        const container = document.querySelector('.automations-container');
        if (!container) return;

        const translations = automationsTranslations[this.currentLang];

        let html = `
            <div class="content-section">
                <h2>${translations['section.types']}</h2>
                
                <div class="table-container">
                    <table class="automations-table">
                        <thead>
                            <tr>
                                <th>${translations['table.mode']}</th>
                                <th>${translations['table.description']}</th>
                                <th>${translations['table.usage']}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>${translations['mode.single']}</code></td>
                                <td>${translations['desc.single']}</td>
                                <td>${translations['usage.single']}</td>
                            </tr>
                            <tr>
                                <td><code>${translations['mode.restart']}</code></td>
                                <td>${translations['desc.restart']}</td>
                                <td>${translations['usage.restart']}</td>
                            </tr>
                            <tr>
                                <td><code>${translations['mode.queued']}</code></td>
                                <td>${translations['desc.queued']}</td>
                                <td>${translations['usage.queued']}</td>
                            </tr>
                            <tr>
                                <td><code>${translations['mode.parallel']}</code></td>
                                <td>${translations['desc.parallel']}</td>
                                <td>${translations['usage.parallel']}</td>
                            </tr>
                            <tr>
                                <td><code>${translations['mode.queued_max']}</code></td>
                                <td>${translations['desc.queued_max']}</td>
                                <td>${translations['usage.queued_max']}</td>
                            </tr>
                            <tr>
                                <td><code>${translations['mode.parallel_max']}</code></td>
                                <td>${translations['desc.parallel_max']}</td>
                                <td>${translations['usage.parallel_max']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Single Mode Section -->
            <div class="mode-section">
                <h2>${translations['section.single']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/main/automations/img/single_diagramm.png" alt="Single mode diagram" class="diagram-image">
                </div>
                <p>${translations['single.diagram']}</p>
                
                <h3>${translations['single.diagram_show']}</h3>
                <ul>
                    <li>${translations['single.diagram_point1']}</li>
                    <li>${translations['single.diagram_point2']}</li>
                    <li>${translations['single.diagram_point3']}</li>
                </ul>
                
                <h3>${translations['single.practice']}</h3>
                <ul>
                    <li>${translations['single.practice_point1']}</li>
                    <li>${translations['single.practice_point2']}</li>
                    <li>${translations['single.practice_point3']}</li>
                </ul>
                
                <h3>${translations['single.example']}</h3>
                <pre><code class="language-yaml">${yamlExamples.single}</code></pre>
            </div>

            <!-- Restart Mode Section -->
            <div class="mode-section">
                <h2>${translations['section.restart']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/main/automations/img/restart_digramm.png" alt="Restart mode diagram" class="diagram-image">
                </div>
                
                <h3>${translations['restart.diagram']}</h3>
                <ul>
                    <li>${translations['restart.diagram_point1']}</li>
                    <li>${translations['restart.diagram_point2']}</li>
                </ul>
                
                <h3>${translations['restart.example']}</h3>
                <pre><code class="language-yaml">${yamlExamples.restart}</code></pre>
            </div>

            <!-- Queued Mode Section -->
            <div class="mode-section">
                <h2>${translations['section.queued']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/main/automations/img/queued_diagramm.png" alt="Queued mode diagram" class="diagram-image">
                </div>
                
                <h3>${translations['queued.diagram']}</h3>
                <ul>
                    <li>${translations['queued.diagram_point1']}</li>
                    <li>${translations['queued.diagram_point2']}</li>
                    <li>${translations['queued.diagram_point3']}</li>
                </ul>
                
                <h3>${translations['queued.example']}</h3>
                <pre><code class="language-yaml">${yamlExamples.queued}</code></pre>
            </div>

            <!-- Parallel Mode Section -->
            <div class="mode-section">
                <h2>${translations['section.parallel']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/main/automations/img/parallel_diagramm.png" alt="Parallel mode diagram" class="diagram-image">
                </div>
                
                <h3>${translations['parallel.diagram']}</h3>
                <ul>
                    <li>${translations['parallel.diagram_point1']}</li>
                    <li>${translations['parallel.diagram_point2']}</li>
                </ul>
                
                <h3>${translations['parallel.practice']}</h3>
                <ul>
                    <li>${translations['parallel.practice_point1']}</li>
                    <li>${translations['parallel.practice_point2']}</li>
                </ul>
                
                <h3>${translations['parallel.example']}</h3>
                <pre><code class="language-yaml">${yamlExamples.parallel}</code></pre>
            </div>

            <!-- Queued with Max Section -->
            <div class="mode-section">
                <h2>${translations['section.queued_max']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/main/automations/img/queued_max_diagramm.png" alt="Queued with max diagram" class="diagram-image">
                </div>
                
                <h3>${translations['queued_max.how']}</h3>
                <p>${translations['desc.queued_max']}</p>
                
                <h3>${translations['queued_max.scenario']}</h3>
                <p>${translations['usage.queued_max']}</p>
                
                <pre><code class="language-yaml">${yamlExamples.queued_max}</code></pre>
            </div>

            <!-- Parallel with Max Section -->
            <div class="mode-section">
                <h2>${translations['section.parallel_max']}</h2>
                <div class="diagram-container">
                    <img src="https://raw.githubusercontent.com/PasevSU/homeassistant/refs/heads/main/automations/img/paralel_max_diagramm.png" alt="Parallel with max diagram" class="diagram-image">
                </div>
                
                <h3>${translations['parallel_max.how']}</h3>
                <p>${translations['desc.parallel_max']}</p>
                
                <h3>${translations['parallel_max.scenario']}</h3>
                <p>${translations['usage.parallel_max']}</p>
                
                <pre><code class="language-yaml">${yamlExamples.parallel_max}</code></pre>
            </div>
        `;

        container.innerHTML = html;
    }

    updateTipSection() {
        const tipBox = document.querySelector('.tip-box');
        if (!tipBox) return;

        const translations = automationsTranslations[this.currentLang];
        
        tipBox.innerHTML = `
            <strong>${translations['tip.title']}</strong>
            <p>${this.parseMarkdownLinks(translations['tip.text'])}</p>
            <p>${translations['tip.contact']}</p>
        `;
    }

    parseMarkdownLinks(text) {
        return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        this.updateLanguageButtons();
        this.renderContent();
        
        // Update URL without reloading page
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }
}

// Initialize automations manager
let automationsManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    automationsManager = new AutomationsManager();
});

// Language change function
function changeLanguage(lang) {
    if (automationsManager) {
        automationsManager.changeLanguage(lang);
    }
}