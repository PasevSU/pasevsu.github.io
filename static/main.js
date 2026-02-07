// main.js - Основна логика на приложението

// Главна функция за инициализация
function initApp() {
    console.log('Приложението се инициализира...');
    
    // Проверка за поддържани функции
    if (!isLocalStorageSupported()) {
        console.warn('LocalStorage не се поддържа в този браузър');
    }
    
    // Инициализиране на компоненти
    initComponents();
    
    // Добавяне на глобални event listeners
    addGlobalEventListeners();
    
    console.log('Приложението е готово!');
}

// Проверка за поддържани технологии
function isLocalStorageSupported() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// Инициализиране на всички компоненти
function initComponents() {
    // Може да добавите инициализация на други компоненти тук
    console.log('Компонентите се инициализират...');
}

// Глобални event listeners
function addGlobalEventListeners() {
    // Допълнителни глобални event listeners, ако са необходими
    document.addEventListener('keydown', function(e) {
        // Допълнителни клавишни комбинации
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            openContactModal();
        }
    });
}

// Функции за глобална употреба
window.App = {
    openContactModal: openContactModal,
    closeContactModal: closeContactModal,
    init: initApp
};

// Стартиране на приложението
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Грешки, които не трябва да спират приложението
window.addEventListener('error', function(e) {
    console.error('Неочаквана грешка:', e.error);
    return true;
});