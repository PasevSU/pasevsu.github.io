// static/all-docs.js
window.allDocs = {
  "documents": [
    {
      "id": "repositories",
      "title": {
        "en": "Add-on Repositories List",
        "bg": "Списък с add-on хранилища",
        "de": "Liste der Add-on-Repositorys"
      },
      "description": {
        "en": "Complete list of useful add-on repositories for Home Assistant",
        "bg": "Пълен списък на полезни add-on хранилища за Home Assistant",
        "de": "Vollständige Liste nützlicher Add-on-Repositorys für Home Assistant"
      },
      "content": {
        "en": `
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
        "bg": `
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
        "de": `
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
        `
      },
      "link": "static/doku/repositories.html"
    },
    {
      "id": "automations",
      "title": {
        "en": "Types of Automations",
        "bg": "Видове автоматизации",
        "de": "Arten von Automatisierungen"
      },
      "description": {
        "en": "Overview of different automation types and their applications",
        "bg": "Преглед на различни видове автоматизации и тяхното приложение",
        "de": "Überblick über verschiedene Automatisierungsarten und ihre Anwendungen"
      },
      "content": {
        "en": `
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
        "bg": `
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
        "de": `
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
        `
      },
      "link": "static/doku/automations.html"
    },
    {
      "id": "config-methods",
      "title": {
        "en": "Configuration Methods",
        "bg": "Методи на конфигуриране",
        "de": "Konfigurationsmethoden"
      },
      "description": {
        "en": "Different ways to configure Home Assistant and add-ons",
        "bg": "Различни начини за конфигуриране на Home Assistant и добавки",
        "de": "Verschiedene Möglichkeiten zur Konfiguration von Home Assistant und Add-ons"
      },
      "content": {
        "en": `
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
        "bg": `
          <h3>YAML конфигурация</h3>
          <ul>
            <li><strong>Configuration.yaml</strong> - Основен конфигурационен файл</li>
            <li><strong>Packages</strong> - Модулна конфигурационна структура</li>
            <li><strong>Includes</strong> - Разделяне на конфигурацията в множество файлове</li>
          </ul>
          
          <h3>UI конфигурация</h3>
          <ul>
            <li><strong>Панел за настройки</strong> - Визуален интерфейс за конфигурация</li>
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
        "de": `
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
        `
      },
      "link": "static/doku/config_methods.html"
    }
  ]
};