// ===================================
// Navigation Functionality
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.about-card, .case-study, .timeline-item, .skill-category');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// Contact Form Handling with Custom Modal
// ===================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent default form submission
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        try {
            // Submit form data via AJAX
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show custom success modal
                showSuccessModal();
                contactForm.reset();
            } else {
                // Show error message
                formStatus.textContent = '✗ Oops! There was a problem. Please try again or email me directly.';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            // Show error message
            formStatus.textContent = '✗ Network error. Please check your connection and try again.';
            formStatus.className = 'form-status error';
        } finally {
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Function to show custom success modal
function showSuccessModal() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'success-modal-overlay';
    modal.innerHTML = `
        <div class="success-modal">
            <div class="success-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="#22c55e" opacity="0.1"/>
                    <circle cx="32" cy="32" r="28" stroke="#22c55e" stroke-width="2"/>
                    <path d="M20 32l8 8 16-16" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button class="btn btn-primary close-modal">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close modal function
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    };
    
    // Close on button click
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Portfolio. Designed with systems thinking and user empathy.`;
}

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Parallax Effect for Hero Section
// ===================================
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// Case Study Image Fullscreen
// ===================================
function initImageFullscreen() {
    const caseStudyImages = document.querySelectorAll('.case-study-image img');
    
    caseStudyImages.forEach(img => {
        // Make image clickable
        img.style.cursor = 'pointer';
        img.setAttribute('title', 'Click to view fullscreen');
        
        img.addEventListener('click', () => {
            // Create fullscreen overlay
            const overlay = document.createElement('div');
            overlay.className = 'fullscreen-overlay';
            overlay.innerHTML = `
                <div class="fullscreen-content">
                    <button class="fullscreen-close" aria-label="Close fullscreen">&times;</button>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            
            // Close on overlay click or close button
            const closeBtn = overlay.querySelector('.fullscreen-close');
            const closeFullscreen = () => {
                overlay.classList.add('closing');
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }, 300);
            };
            
            closeBtn.addEventListener('click', closeFullscreen);
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    closeFullscreen();
                }
            });
            
            // Close on ESC key
            const handleEsc = (e) => {
                if (e.key === 'Escape') {
                    closeFullscreen();
                    document.removeEventListener('keydown', handleEsc);
                }
            };
            document.addEventListener('keydown', handleEsc);
            
            // Animate in
            setTimeout(() => overlay.classList.add('active'), 10);
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageFullscreen);
} else {
    initImageFullscreen();
}

// ===================================
// Case Study Sticky Image Scroll Effect
// ===================================
function initCaseStudyScrollEffect() {
    const caseStudies = document.querySelectorAll('.case-study');
    
    caseStudies.forEach(caseStudy => {
        const sections = caseStudy.querySelectorAll('.case-section');
        const image = caseStudy.querySelector('.case-study-image img');
        
        if (!sections.length || !image) return;
        
        // Create intersection observer for each section
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get the scroll index from data attribute
                    const scrollIndex = entry.target.getAttribute('data-scroll');
                    
                    // Add subtle scale effect to image
                    image.style.transition = 'transform 0.4s ease-out, opacity 0.3s ease-out';
                    image.style.transform = 'scale(1.02)';
                    image.style.opacity = '0.95';
                    
                    // Reset after animation
                    setTimeout(() => {
                        image.style.transform = 'scale(1)';
                        image.style.opacity = '1';
                    }, 400);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        });
        
        // Observe all sections
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCaseStudyScrollEffect);
} else {
    initCaseStudyScrollEffect();
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
