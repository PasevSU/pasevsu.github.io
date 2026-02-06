// static/contact-form.js
// CONTACT FORM THAT SENDS DIRECTLY TO NTFY.SH
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close');
    const contactTriggers = document.querySelectorAll('.contact-trigger');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    // Rate limiting
    let lastSubmission = 0;
    const MIN_SUBMISSION_INTERVAL = 5000; // 5 seconds between submissions
    
    // Open modal
    contactTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (formMessage) {
                formMessage.style.display = 'none';
                formMessage.innerHTML = '';
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (modal && e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (formMessage) {
                formMessage.style.display = 'none';
                formMessage.innerHTML = '';
            }
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (formMessage) {
                formMessage.style.display = 'none';
                formMessage.innerHTML = '';
            }
        }
    });
    
    // Handle form submission - DIRECT SEND TO NTFY.SH
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Rate limiting check
            const now = Date.now();
            if (now - lastSubmission < MIN_SUBMISSION_INTERVAL) {
                showMessage('Моля, изчакайте преди да изпратите отново.', 'error');
                return;
            }
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                showMessage('Моля, попълнете всички полета.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Моля, въведете валиден имейл адрес.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Изпращане...';
            submitBtn.disabled = true;
            
            showMessage('Изпращане на съобщението...', 'loading');
            
            try {
                // Encode non-ASCII characters in headers
                const encodeHeader = (str) => {
                    // Encode to base64 for headers with non-ASCII characters
                    if (/[^\x00-\x7F]/.test(str)) {
                        return `=?UTF-8?B?${btoa(unescape(encodeURIComponent(str)))}?=`;
                    }
                    return str;
                };
                
                // Prepare headers with encoded non-ASCII characters
                const safeTitle = encodeHeader(`Ново съобщение от: ${name}`);
                const safeBody = `Имейл: ${email}\nТема: ${subject}\n\nСъобщение:\n${message}`;
                
                // Direct send to ntfy.sh
                const response = await fetch('https://ntfy.sh/pasevsu_messages', {
                    method: 'POST',
                    mode: 'cors',
                    body: safeBody,
                    headers: {
                        'Title': safeTitle,
                        'Priority': 'default',
                        'Tags': 'email,contact',
                        'Click': `mailto:${email}`,
                        'Content-Type': 'text/plain; charset=utf-8'
                    }
                });
                
                if (response.ok) {
                    showMessage('✅ Съобщението е изпратено успешно!', 'success');
                    lastSubmission = Date.now();
                    
                    // Изчистване на формата
                    contactForm.reset();
                    
                    // Затваряне на модала след 2 секунди
                    setTimeout(() => {
                        if (modal) {
                            modal.style.display = 'none';
                            document.body.style.overflow = 'auto';
                        }
                        if (formMessage) {
                            formMessage.style.display = 'none';
                            formMessage.innerHTML = '';
                        }
                    }, 2000);
                } else {
                    throw new Error(`HTTP грешка! Статус: ${response.status}`);
                }
                
            } catch (error) {
                console.error('Грешка при изпращане:', error);
                lastSubmission = Date.now();
                
                // Fallback: показване на curl командата
                showMessage('⚠️ Директното изпращане не успя. Копирайте командата за ръчно изпълнение:', 'error');
                
                // Create the body for curl command (escape newlines for bash)
                const escapedMessage = message.replace(/"/g, '\\"');
                const escapedName = name.replace(/"/g, '\\"');
                const body = `Име: ${escapedName}\\nИмейл: ${email}\\nТема: ${subject}\\n\\nСъобщение:\\n${escapedMessage}`;
                
                // Create the curl command exactly as you want it
                const curlCommand = `curl -d "${body}" -H "Title: Съобщение от: ${escapedName}" -H "Priority: default" -H "Tags: test,email" -H "Click: mailto:${email}" https://ntfy.sh/pasevsu_messages`;
                
                console.log('CURL команда за ръчно изпълнение:');
                console.log(curlCommand);
                
                // Show the curl command to the user
                showCurlCommand(curlCommand);
                
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }        
    
    // Helper function to show curl command
    function showCurlCommand(curlCommand) {
        if (!formMessage) return;
        
        // Create container for the command
        const commandContainer = document.createElement('div');
        commandContainer.style.marginTop = '15px';
        commandContainer.style.textAlign = 'left';
        
        // Create pre element for the command
        const commandPre = document.createElement('pre');
        commandPre.style.backgroundColor = '#2d2d2d';
        commandPre.style.color = '#f8f8f2';
        commandPre.style.padding = '15px';
        commandPre.style.borderRadius = '5px';
        commandPre.style.overflowX = 'auto';
        commandPre.style.fontFamily = 'monospace';
        commandPre.style.fontSize = '14px';
        commandPre.style.whiteSpace = 'pre-wrap';
        commandPre.style.wordBreak = 'break-all';
        commandPre.textContent = curlCommand;
        
        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.textContent = '📋 Копирай командата';
        copyBtn.style.marginTop = '10px';
        copyBtn.style.padding = '10px 20px';
        copyBtn.style.backgroundColor = '#3498db';
        copyBtn.style.color = 'white';
        copyBtn.style.border = 'none';
        copyBtn.style.borderRadius = '5px';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontWeight = 'bold';
        copyBtn.style.width = '100%';
        
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(curlCommand)
                .then(function() {
                    const originalBtnText = copyBtn.textContent;
                    copyBtn.textContent = '✅ Командата е копирана!';
                    copyBtn.style.backgroundColor = '#27ae60';
                    
                    setTimeout(function() {
                        copyBtn.textContent = originalBtnText;
                        copyBtn.style.backgroundColor = '#3498db';
                    }, 2000);
                })
                .catch(function(err) {
                    console.error('Грешка при копиране:', err);
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = curlCommand;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    
                    try {
                        const successful = document.execCommand('copy');
                        if (successful) {
                            copyBtn.textContent = '✅ Командата е копирана!';
                            copyBtn.style.backgroundColor = '#27ae60';
                            setTimeout(function() {
                                copyBtn.textContent = '📋 Копирай командата';
                                copyBtn.style.backgroundColor = '#3498db';
                            }, 2000);
                        }
                    } catch (err) {
                        console.error('Fallback копиране не успя:', err);
                    }
                    
                    document.body.removeChild(textArea);
                });
        });
        
        // Create instructions
        const instructions = document.createElement('div');
        instructions.style.marginTop = '15px';
        instructions.style.padding = '10px';
        instructions.style.backgroundColor = '#fff3cd';
        instructions.style.border = '1px solid #ffeaa7';
        instructions.style.borderRadius = '5px';
        instructions.style.color = '#856404';
        instructions.style.fontSize = '14px';
        
        instructions.innerHTML = `
            <strong>Инструкции:</strong>
            <ol style="margin: 5px 0 0 0; padding-left: 20px;">
                <li>Копирайте командата отгоре</li>
                <li>Отворете терминал/команден ред</li>
                <li>Поставете и изпълнете командата</li>
                <li>Проверете ntfy канала за съобщението</li>
            </ol>
        `;
        
        // Append everything to the message container
        formMessage.appendChild(commandContainer);
        commandContainer.appendChild(commandPre);
        commandContainer.appendChild(copyBtn);
        commandContainer.appendChild(instructions);
    }
    
    // Helper function to show messages
    function showMessage(text, type) {
        if (!formMessage) return;
        
        formMessage.innerHTML = '';
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        try {
            formMessage.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        } catch (e) {
            formMessage.scrollIntoView();
        }
    }
});