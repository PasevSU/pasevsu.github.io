// static/all-docs.js

/**
 * ФАЙЛ СЪС СТРУКТУРИРАНИ ДАННИ ЗА ДОКУМЕНТАЦИЯТА
 * Този файл съдържа всички документи за документационния раздел.
 * Сега съдържа само български преводи.
 */

// ГЛОБАЛЕН ОБЕКТ С ВСИЧКИ ДОКУМЕНТИ
window.allDocs = {
  "documents": [
    {
      "id": "repositories",
      "title": "Списък с add-on хранилища",
      "description": "Пълен списък на полезни add-on хранилища за Home Assistant",
      "content": `
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
      "link": "static/doku/repositories.html"
    },
    
    {
      "id": "automations",
      "title": "Видове автоматизации",
      "description": "Преглед на различни видове автоматизации и тяхното приложение",
      "content": `
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
      "link": "static/doku/automations.html"
    },
    
    {
      "id": "config-methods",
      "title": "Методи на конфигуриране",
      "description": "Различни начини за конфигуриране на Home Assistant и добавки",
      "content": `
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
      "link": "static/doku/config_methods.html"
    }
  ]
};