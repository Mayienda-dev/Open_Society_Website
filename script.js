// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add fade-in animation to elements as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.info-card, .service-card, .mvg-card').forEach(card => {
    observer.observe(card);
});

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// Scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// Add hover effect to cards
document.querySelectorAll('.info-card, .service-card, .mvg-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Observe statistics section
const statsSection = document.querySelector('.content-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.display-4');
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent.replace(/\D/g, ''));
                    if (target && !counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.content-section').forEach(section => {
        statsObserver.observe(section);
    });
}

// Form validation (if forms are added later)
const forms = document.querySelectorAll('.needs-validation');
forms.forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add active state to current page in navigation
const currentLocation = location.pathname;
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
    const itemPath = new URL(item.href).pathname;
    if (currentLocation === itemPath || 
        (currentLocation === '/' && itemPath.includes('index.html')) ||
        (currentLocation.endsWith('/') && itemPath.includes('index.html'))) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// ============================================
// PHOTO GALLERY SLIDESHOW FUNCTIONALITY
// ============================================

let currentSlideIndex = 0;
let autoPlayInterval;
let isAutoPlaying = true;

// Initialize slideshow on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the impact page (has slideshow)
    if (document.querySelector('.slideshow-container')) {
        initSlideshow();
    }
});

function initSlideshow() {
    showSlide(currentSlideIndex);
    startAutoPlay();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!slides.length) return;
    
    // Wrap around if index is out of bounds
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlideIndex].classList.add('active');
    
    // Highlight current indicator
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
    
    // Update counter
    updateCounter();
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    
    // Reset auto-play timer when manually changing slides
    if (isAutoPlaying) {
        stopAutoPlay();
        startAutoPlay();
    }
}

function goToSlide(index) {
    showSlide(index);
    
    // Reset auto-play timer when manually selecting a slide
    if (isAutoPlaying) {
        stopAutoPlay();
        startAutoPlay();
    }
}

function startAutoPlay() {
    // Auto-advance slides every 10 seconds (10000 milliseconds)
    autoPlayInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 10000);
    isAutoPlaying = true;
    updatePlayPauseButton();
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    isAutoPlaying = false;
    updatePlayPauseButton();
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function updatePlayPauseButton() {
    const icon = document.getElementById('playPauseIcon');
    if (icon) {
        if (isAutoPlaying) {
            icon.className = 'bi bi-pause-fill';
        } else {
            icon.className = 'bi bi-play-fill';
        }
    }
}

function updateCounter() {
    const currentElement = document.getElementById('currentSlide');
    const totalElement = document.getElementById('totalSlides');
    
    if (currentElement) {
        currentElement.textContent = currentSlideIndex + 1;
    }
    
    if (totalElement) {
        const slides = document.querySelectorAll('.gallery-slide');
        totalElement.textContent = slides.length;
    }
}

// Keyboard navigation for slideshow
document.addEventListener('keydown', (e) => {
    if (!document.querySelector('.slideshow-container')) return;
    
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
    }
});

// Pause slideshow when page is not visible
document.addEventListener('visibilitychange', () => {
    if (!document.querySelector('.slideshow-container')) return;
    
    if (document.hidden) {
        stopAutoPlay();
    } else {
        if (isAutoPlaying) {
            startAutoPlay();
        }
    }
});
