// script.js - КОРИГИРАН ФАЙЛ

// Prevent favicon error
if (!document.querySelector('link[rel*="icon"]')) {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏠</text></svg>';
    document.head.appendChild(link);
}

// Language Management
// Contact modal functionality
const contactModal = document.getElementById('contact-modal');
const contactLinks = document.querySelectorAll('a[href="#contact"]');
const closeBtn = document.querySelector('.close');

// Open modal when clicking contact links in navigation
if (contactLinks.length > 0) {
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (contactModal) {
                contactModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Добавяме клас за да предотвратим скролиране
                document.body.classList.add('modal-open');
                
                // Фокусираме се върху първото поле
                setTimeout(() => {
                    const nameInput = document.getElementById('name');
                    if (nameInput) nameInput.focus();
                }, 100);
            }
        });
    });
}

// Close modal when clicking X
if (closeBtn && contactModal) {
    closeBtn.addEventListener('click', function() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('modal-open');
    });
}

// Close modal when clicking outside
if (contactModal) {
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.classList.remove('modal-open');
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && contactModal && contactModal.style.display === 'block') {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('modal-open');
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling - НАПРАВИХМЕ ИЗКЛЮЧЕНИЕ ЗА КОНТАКТ ЛИНКОВЕТЕ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Ако е контакт линк, не правим smooth scrolling
        if (targetId === '#contact') {
            e.preventDefault();
            return;
        }
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form functionality
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Get current language for validation messages
        const currentLang = localStorage.getItem('preferred-language') || 'en';
        
        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            const validationMsg = "Please fill in all fields.";
            showMessage(validationMsg, 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const loadingText = "Sending...";
        submitBtn.textContent = loadingText;
        submitBtn.disabled = true;
        
        try {
            // Send to ntfy.sh
            await sendToNtfy(data);
            
            // Show success message
            const successMsg = "Message sent successfully!";
            showMessage(successMsg, 'success');
            contactForm.reset();
            
            // Close modal after success
            setTimeout(() => {
                if (contactModal) {
                    contactModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    document.body.classList.remove('modal-open');
                }
            }, 2000);
            
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMsg = "Error sending message.";
            showMessage(errorMsg, 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

async function sendToNtfy(data) {
    const topic = 'pasevsu_messages';
    const ntfyUrl = `https://ntfy.sh/${topic}`;
    
    // Create the message content
    const messageContent = `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Sent from: ${window.location.hostname}
    `.trim();
    
    try {
        // Send to ntfy.sh
        const response = await fetch(ntfyUrl, {
            method: 'POST',
            body: messageContent,
            headers: {
                'Title': `New message from: ${data.name}`,
                'Priority': 'default',
                'Tags': 'email,envelope',
                'Click': `mailto:${data.email}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Message sent successfully to ntfy');
        return response;
        
    } catch (error) {
        console.error('Error sending to ntfy:', error);
        throw error;
    }
}

// Dark Mode functionality - КОРИГИРАНО ЗА ДА ПРЕДОТВРАТИ ГРЕШКА
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize dark mode - само ако бутонът съществува
function initDarkMode() {
    // Проверка дали бутонът за dark mode съществува
    if (!darkModeToggle) {
        console.log('Dark mode toggle not found, skipping dark mode initialization');
        return;
    }
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = prefersDarkScheme.matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
    }
}

// Toggle dark mode - само ако бутонът съществува
function toggleDarkMode() {
    if (!darkModeToggle) return;
    
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Event listeners - само ако бутонът съществува
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Initialize on load
initDarkMode();

// Listen for system theme changes
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.addEventListener) {
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    });
}

/* Admin Styles - само ако са необходими */
/*
.admin-login-btn {
    background-color: #ff6b6b !important;
    border-radius: 20px;
    padding: 5px 15px !important;
    margin-left: 10px;
}

.admin-actions {
    display: grid;
    gap: 15px;
    margin-top: 20px;
}

.admin-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    text-align: left;
}

.admin-btn:hover {
    background-color: #2980b9;
}

// Edit indicators for admin
.admin-edit-mode .editable {
    position: relative;
    border: 1px dashed #3498db;
    padding: 5px;
    margin: 2px;
}

.admin-edit-mode .editable::after {
    content: '✏️';
    position: absolute;
    top: -10px;
    right: -10px;
    background: #3498db;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
*/

// Модифицираме функционалността за скриване на банера при скролиране, така че да не се скрива навигацията, а само банера. 
// Това ще позволи на потребителите да имат достъп до навигацията и важната информация, докато скролят надолу по страницата,
//  без да се губи видимостта на навигационното меню.
// Banner hide on scroll
// Banner hide on scroll
let lastScrollTop = 0;
const banner = document.querySelector('.banner');

if (banner) {
    const bannerHeight = banner.offsetHeight;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide banner
            banner.style.opacity = '0';
            banner.style.visibility = 'hidden';
            banner.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
        } else {
            // Scrolling up - show banner
            banner.style.opacity = '1';
            banner.style.visibility = 'visible';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Добавяме CSS за модал
if (document.head) {
    const style = document.createElement('style');
    style.textContent = `
        .modal-open {
            overflow: hidden;
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            overflow-y: auto;
        }
        
        .modal-content {
            background-color: white;
            margin: 50px auto;
            padding: 2rem;
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .close {
            position: absolute;
            right: 1.5rem;
            top: 1rem;
            font-size: 1.8rem;
            cursor: pointer;
            color: #333;
            background: none;
            border: none;
            padding: 0;
            line-height: 1;
        }
        
        .close:hover {
            color: #ff0000;
        }
    `;
    document.head.appendChild(style);
}

// Добавяме дебъг информация
console.log('Script loaded successfully');
console.log('Contact modal found:', !!contactModal);
console.log('Contact links found:', contactLinks.length);