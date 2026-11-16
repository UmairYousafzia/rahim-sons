/**
 * ============================================================================
 * RAHIM & SONS ENTERPRISES - MAIN JAVASCRIPT
 * Official Site Logic: Routing, Image Hydration, Forms & Animations
 * ============================================================================
 */

// Image Configuration Map (Local assets with clean fallbacks)
const SITE_IMAGES = {
  heroBanner: 'assets/images/solar-1.jpg',
  serviceSolar: 'assets/images/solar-2.jpg',
  serviceNetMetering: 'assets/images/net metring.png',
  serviceSecurity: 'assets/images/security.jpg',
  serviceNetworking: 'assets/images/networking.jpg',
  aboutOffice: 'assets/images/5gridpanel.jpg',
  project1: 'assets/images/5gridpanel.jpg',
  project2: 'assets/images/FiberBackbone.jpg',
  project3: 'assets/images/cameraa.jpg',
  project4: 'assets/images/solar-1.jpg',
  project5: 'assets/images/network2.jpg',
  project6: 'assets/images/security.jpg'
};

// Hydrate all <img> tags that declare data-img
function applySiteImages() {
  document.querySelectorAll('img[data-img]').forEach((img) => {
    const key = img.getAttribute('data-img');
    if (SITE_IMAGES[key]) {
      // If src is empty or not set, populate with configured path
      if (!img.getAttribute('src') || img.getAttribute('src') === '') {
        img.src = SITE_IMAGES[key];
      }
    }
    // Clean fallback if image fails to load
    img.onerror = function () {
      this.onerror = null;
      this.src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80';
    };
  });
}

// Navigation Helper
function navigateTo(route) {
  const targetMap = {
    home: 'index.html',
    about: 'about.html',
    services: 'services.html',
    projects: 'projects.html',
    contact: 'contact.html'
  };

  const targetFile = targetMap[route] || 'index.html';
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  if (currentFile !== targetFile) {
    window.location.href = targetFile;
  }
}

// Highlight Active Nav Link based on Current URL
function updateActiveNavLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const pageRouteMap = {
    'index.html': 'home',
    '': 'home',
    'about.html': 'about',
    'services.html': 'services',
    'projects.html': 'projects',
    'contact.html': 'contact'
  };

  const currentRoute = pageRouteMap[currentFile] || 'home';

  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === currentRoute) {
      link.classList.add('active-nav');
    } else {
      link.classList.remove('active-nav');
    }
  });
}

// Mobile Menu Drawer Toggle
function toggleMobileMenu(forceState) {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!mobileMenu) return;

  const isHidden = mobileMenu.classList.contains('hidden');
  const shouldOpen = typeof forceState === 'boolean' ? forceState : isHidden;

  if (shouldOpen) {
    mobileMenu.classList.remove('hidden');
    if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
    if (closeIcon) closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }
}

// Project Portfolio Category Filtering
function filterProjects(category, btnEl) {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('bg-navy-900', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
  });

  if (btnEl) {
    btnEl.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');
    btnEl.classList.add('bg-navy-900', 'text-white');
  }

  document.querySelectorAll('.project-card').forEach((card) => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Service Inquiry Redirection
function inquireService(serviceName) {
  sessionStorage.setItem('selectedService', serviceName);
  window.location.href = 'contact.html?service=' + encodeURIComponent(serviceName);
}

// Handle Contact / Quote Form Submission
function handleQuoteSubmit(event) {
  event.preventDefault();
  const formSuccess = document.getElementById('form-success-msg');
  const form = document.getElementById('quote-form');

  if (formSuccess) {
    formSuccess.classList.remove('hidden');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (form) {
    form.reset();
  }
}

// Scroll Reveal Animations using IntersectionObserver
function triggerRevealElements() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
}

// Animated Number Counters
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(easeOut * target);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        }
        requestAnimationFrame(updateCounter);
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach((c) => observer.observe(c));
}

// Auto-fill selected service from URL on Contact Page
function autoFillService() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service') || sessionStorage.getItem('selectedService');
  if (service) {
    const select = document.getElementById('serviceSelect');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase().includes(service.toLowerCase()) || 
            select.options[i].text.toLowerCase().includes(service.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
    sessionStorage.removeItem('selectedService');
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu button listener
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  // Update current year safely
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Hydrate images
  applySiteImages();

  // Highlight current nav link
  updateActiveNavLink();

  // Scroll animations & counters
  triggerRevealElements();
  animateCounters();

  // Pre-fill service dropdown if on contact page
  autoFillService();
});
