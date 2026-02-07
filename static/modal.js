// modal.js - Управление на модалните прозорци

// Конфигурация
const modalConfig = {
    animationDuration: 300, // в милисекунди
    closeOnEsc: true,
    closeOnOutsideClick: true
};

// Основен обект за управление на модали
const ModalManager = {
    // Инициализира всички модали
    init: function() {
        console.log('ModalManager: Инициализация на модали...');
        
        // Инициализиране на контактния модал
        this.initContactModal();
        
        // Добавяне на глобални event listeners
        this.addGlobalListeners();
    },
    
    // Инициализира контактния модал
    initContactModal: function() {
        const modal = document.getElementById('contact-modal');
        const closeBtn = document.querySelector('.close-contact');
        const openBtn = document.getElementById('open-contact-btn');
        
        if (!modal) {
            console.warn('ModalManager: Контактният модал не е намерен!');
            return;
        }
        
        // Отваряне на модала
        if (openBtn) {
            openBtn.addEventListener('click', () => {
                this.openModal(modal);
            });
        }
        
        // Затваряне на модала
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal(modal);
            });
        }
        
        console.log('ModalManager: Контактният модал е инициализиран');
    },
    
    // Отваря модал
    openModal: function(modalElement) {
        if (!modalElement) return;
        
        modalElement.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Предотвратява скролване на body
        
        // Фокус върху първото поле
        setTimeout(() => {
            const firstInput = modalElement.querySelector('input, textarea, button');
            if (firstInput) firstInput.focus();
        }, 50);
        
        console.log('ModalManager: Модалът е отворен');
    },
    
    // Затваря модал
    closeModal: function(modalElement) {
        if (!modalElement) return;
        
        modalElement.style.display = 'none';
        document.body.style.overflow = ''; // Връща скролването
        
        console.log('ModalManager: Модалът е затворен');
    },
    
    // Добавя глобални event listeners
    addGlobalListeners: function() {
        // Затваряне при клик извън модала
        if (modalConfig.closeOnOutsideClick) {
            window.addEventListener('click', (event) => {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (event.target === modal) {
                        this.closeModal(modal);
                    }
                });
            });
        }
        
        // Затваряне с ESC клавиш
        if (modalConfig.closeOnEsc) {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' || event.key === 'Esc') {
                    const openModal = document.querySelector('.modal[style*="display: block"]');
                    if (openModal) {
                        this.closeModal(openModal);
                    }
                }
            });
        }
    },
    
    // Помощна функция за създаване на модал динамично
    createModal: function(content, options = {}) {
        const modalId = options.id || `modal-${Date.now()}`;
        const modalHtml = `
            <div id="${modalId}" class="modal">
                <div class="modal-content" style="${options.width ? `max-width: ${options.width}` : ''}">
                    <span class="close">&times;</span>
                    ${content}
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const newModal = document.getElementById(modalId);
        
        // Добавяне на event listener за затваряне
        newModal.querySelector('.close').addEventListener('click', () => {
            this.closeModal(newModal);
        });
        
        return newModal;
    }
};

// Функции за глобална употреба
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) ModalManager.openModal(modal);
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) ModalManager.closeModal(modal);
}

// Инициализация при зареждане на DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ModalManager.init();
    });
} else {
    ModalManager.init();
}

// Експорт за употреба в други модули
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ModalManager, openContactModal, closeContactModal };
}