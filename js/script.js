// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize typing effect when page loads
let typingEffectExecuted = false;
window.addEventListener('load', () => {
    // Apply initial language settings
    updateLanguageDisplay(currentLang);
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && !typingEffectExecuted) {
        typingEffectExecuted = true;
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 150);
        }, 1000);
    }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update theme toggle icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Initialize theme icon
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add a subtle animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Language Toggle Functionality
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('language') || 'en';

// Set initial language
document.documentElement.setAttribute('lang', currentLang);
updateLanguageDisplay(currentLang);

function updateLanguageDisplay(lang) {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'en' ? '中文' : 'EN';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en][data-zh]');
    translatableElements.forEach(element => {
        if (lang === 'zh') {
            element.textContent = element.getAttribute('data-zh');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    // Update form placeholders
    const formInputs = document.querySelectorAll('input[data-en], textarea[data-en]');
    formInputs.forEach(input => {
        if (lang === 'zh') {
            input.setAttribute('placeholder', input.getAttribute('data-zh'));
        } else {
            input.setAttribute('placeholder', input.getAttribute('data-en'));
        }
    });
    
    // Update project categories, badges, and stats
    const projectElements = document.querySelectorAll('.project-category span[data-en], .project-badge span[data-en], .stat-label[data-en]');
    projectElements.forEach(element => {
        if (lang === 'zh') {
            element.textContent = element.getAttribute('data-zh');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    // Update document title
    if (lang === 'zh') {
        document.title = '陈伟豪 - 人工智能工程师 & 全栈开发者';
    } else {
        document.title = 'Tan Wei Hao - AI Engineer & Full-Stack Developer';
    }
}

// Language toggle event listener
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        document.documentElement.setAttribute('lang', currentLang);
        localStorage.setItem('language', currentLang);
        updateLanguageDisplay(currentLang);
        
        // Add animation effect
        langToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            langToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Only handle internal anchor links (starting with #)
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // For external links (like index.html), let the browser handle navigation normally
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.width || '0%';
                    }, index * 200);
                });
            }
            
            // Animate timeline items
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
            
            // Animate project cards
            if (entry.target.classList.contains('project-card') || entry.target.classList.contains('certification-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Animate project stats with stagger effect
                if (entry.target.classList.contains('project-card')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                stat.style.transform = 'scale(1)';
                            }, 200);
                        }, index * 100);
                    });
                }
            }
        }
    });
}, observerOptions);

// Elements to animate
const animateElements = document.querySelectorAll(`
    .section-header,
    .about-text,
    .about-image,
    .skill-category,
    .timeline-item,
    .project-card,
    .certification-card,
    .resume-card,
    .resume-formats,
    .resume-highlights,
    .contact-item,
    .contact-form
`);

// Set initial styles for animation
animateElements.forEach(el => {
    el.style.opacity = '0';
    
    if (el.classList.contains('timeline-item')) {
        el.style.transform = 'translateX(-50px)';
    } else if (el.classList.contains('project-card') || el.classList.contains('certification-card')) {
        el.style.transform = 'translateY(50px) scale(0.9)';
    } else {
        el.style.transform = 'translateY(50px)';
    }
    
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect for hero background orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (orbs.length > 0) {
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.btn-primary');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.style.opacity = '1';
        }, 2000);
    });
}

// Add floating animation to profile icons
const floatingIcons = document.querySelectorAll('.floating-icon');
floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});

// Skills animation trigger
const skillCategories = document.querySelectorAll('.skill-category');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

skillCategories.forEach(category => {
    skillsObserver.observe(category);
});

// Add cursor trail effect (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-trail');
    if (!cursor) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
            transition: all 0.1s ease;
            z-index: 9999;
        `;
        document.body.appendChild(trail);
    }
    
    const trail = document.querySelector('.cursor-trail');
    trail.style.left = e.clientX - 10 + 'px';
    trail.style.top = e.clientY - 10 + 'px';
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
}, 16)); // ~60fps

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyles = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .hero {
        opacity: 0;
        transform: translateY(50px);
    }
    
    body.loaded .hero {
        opacity: 1;
        transform: translateY(0);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Image Expansion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML structure
    const modalHTML = `
        <div class="image-modal" id="imageModal">
            <div class="image-modal-content">
                <button class="image-modal-close" id="modalClose">&times;</button>
                <div class="image-zoom-hint">Mouse wheel to zoom • Drag to pan • +/- keys • R to reset • Double-click to reset</div>
                <img id="modalImage" src="" alt="">
                <div class="image-modal-caption" id="modalCaption"></div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');
    
    // Add click event to all demo images
    const demoImages = document.querySelectorAll('.demo-image');
    demoImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalImg.classList.remove('zoomed'); // Reset zoom state
            
            // Get caption from the next sibling element
            const captionElement = this.parentNode.querySelector('.image-caption');
            if (captionElement) {
                modalCaption.textContent = captionElement.textContent;
            } else {
                modalCaption.textContent = this.alt;
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Advanced image zoom and drag functionality
    let currentZoom = 1;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;

    // Mouse wheel zoom
    modalImg.addEventListener('wheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoom = Math.max(1, Math.min(3, currentZoom + delta));
        
        if (newZoom !== currentZoom) {
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Zoom towards mouse position
            const zoomRatio = newZoom / currentZoom;
            currentX = mouseX - (mouseX - currentX) * zoomRatio;
            currentY = mouseY - (mouseY - currentY) * zoomRatio;
            
            currentZoom = newZoom;
            updateTransform();
        }
    });

    // Mouse drag functionality
    modalImg.addEventListener('mousedown', function(e) {
        if (currentZoom > 1) {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
            lastX = e.clientX;
            lastY = e.clientY;
            this.classList.add('dragging');
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging && currentZoom > 1) {
            e.preventDefault();
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;
            updateTransform();
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modalImg.classList.remove('dragging');
        }
    });

    // Touch events for mobile
    modalImg.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1 && currentZoom > 1) {
            e.preventDefault();
            isDragging = true;
            const touch = e.touches[0];
            startX = touch.clientX - currentX;
            startY = touch.clientY - currentY;
            this.classList.add('dragging');
        }
    });

    modalImg.addEventListener('touchmove', function(e) {
        if (isDragging && e.touches.length === 1 && currentZoom > 1) {
            e.preventDefault();
            const touch = e.touches[0];
            currentX = touch.clientX - startX;
            currentY = touch.clientY - startY;
            updateTransform();
        }
    });

    modalImg.addEventListener('touchend', function() {
        if (isDragging) {
            isDragging = false;
            this.classList.remove('dragging');
        }
    });

    // Keyboard zoom
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                const newZoom = Math.min(3, currentZoom + 0.2);
                if (newZoom !== currentZoom) {
                    currentZoom = newZoom;
                    updateTransform();
                }
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                const newZoom = Math.max(1, currentZoom - 0.2);
                if (newZoom !== currentZoom) {
                    currentZoom = newZoom;
                    if (newZoom === 1) {
                        currentX = 0;
                        currentY = 0;
                    }
                    updateTransform();
                }
            } else if (e.key === 'r' || e.key === 'R') {
                e.preventDefault();
                // Reset zoom and position
                currentZoom = 1;
                currentX = 0;
                currentY = 0;
                updateTransform();
            }
        }
    });

    // Double click to reset
    modalImg.addEventListener('dblclick', function(e) {
        e.preventDefault();
        e.stopPropagation();
        currentZoom = 1;
        currentX = 0;
        currentY = 0;
        updateTransform();
    });

    // Update transform function
    function updateTransform() {
        modalImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentZoom})`;
        
        // Update cursor based on zoom level
        if (currentZoom > 1) {
            modalImg.style.cursor = isDragging ? 'grabbing' : 'grab';
        } else {
            modalImg.style.cursor = 'grab';
        }
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        // Reset zoom and position
        currentZoom = 1;
        currentX = 0;
        currentY = 0;
        isDragging = false;
        modalImg.classList.remove('dragging');
        modalImg.style.transform = 'translate(0px, 0px) scale(1)';
        modalImg.style.cursor = 'grab';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Handle project link clicks
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
});
