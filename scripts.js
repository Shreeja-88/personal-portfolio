// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function () {
  
  // ==================== TYPED.JS ANIMATION ====================
  if (typeof Typed !== 'undefined') {
    new Typed(".typing", {
      strings: ["CSE Student", "Backend Developer", "Tech Enthusiast", "Problem Solver", "Open Source Contributor"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ==================== NAMASTE CAROUSEL ====================
  const namastes = document.querySelectorAll('.namaste-text');
  let currentIndex = 0;

  function rotateNamaste() {
    namastes[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % namastes.length;
    namastes[currentIndex].classList.add('active');
  }

  // Change greeting every 3 seconds
  setInterval(rotateNamaste, 3000);

  // ==================== CURRENT YEAR IN FOOTER ====================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==================== SMOOTH SCROLLING ====================
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const menu = document.getElementById('menu');
        const hamburger = document.getElementById('hamburger');
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          hamburger.classList.remove('active');
        }
      }
    });
  });

  // ==================== HAMBURGER MENU ====================
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  }

  // ==================== NAVBAR SCROLL EFFECT ====================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when scrolling down
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ==================== ACTIVE NAV LINK ON SCROLL ====================
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);

  // ==================== AOS (ANIMATE ON SCROLL) INITIALIZATION ====================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100
    });
  }

  // ==================== ENTRANCE ANIMATIONS ====================
  // Animate elements on page load
  const animateOnLoad = () => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    const namasteCarousel = document.querySelector('.namaste-carousel');

    if (heroLeft) {
      setTimeout(() => {
        heroLeft.style.opacity = '1';
        heroLeft.style.transform = 'translateY(0)';
      }, 200);
    }

    if (heroRight) {
      setTimeout(() => {
        heroRight.style.opacity = '1';
        heroRight.style.transform = 'scale(1)';
      }, 400);
    }

    if (namasteCarousel) {
      setTimeout(() => {
        namasteCarousel.style.opacity = '1';
        namasteCarousel.style.transform = 'translateY(0)';
      }, 100);
    }
  };

  // Set initial styles for animation
  const heroLeft = document.querySelector('.hero-left');
  const heroRight = document.querySelector('.hero-right');
  const namasteCarousel = document.querySelector('.namaste-carousel');

  if (heroLeft) {
    heroLeft.style.opacity = '0';
    heroLeft.style.transform = 'translateY(30px)';
    heroLeft.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }

  if (heroRight) {
    heroRight.style.opacity = '0';
    heroRight.style.transform = 'scale(0.9)';
    heroRight.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }

  if (namasteCarousel) {
    namasteCarousel.style.opacity = '0';
    namasteCarousel.style.transform = 'translateY(-20px)';
    namasteCarousel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }

  // Trigger animations
  setTimeout(animateOnLoad, 100);

  // ==================== CARD HOVER EFFECTS ====================
  const cards = document.querySelectorAll('.about-card, .project-card, .skill-category, .achievement-card, .contact-card, .cert-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // ==================== FLOATING ELEMENTS ANIMATION ====================
  const floatingElements = document.querySelectorAll('.floating-element');
  
  floatingElements.forEach((element, index) => {
    const randomDelay = Math.random() * 2;
    element.style.animationDelay = `${randomDelay}s`;
  });

  // ==================== SCROLL REVEAL ANIMATION ====================
  const revealElements = document.querySelectorAll('.section');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for sections
  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check

  // ==================== PARALLAX EFFECT FOR BACKGROUND ORBS ====================
  const orbs = document.querySelectorAll('.gradient-orb');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    orbs.forEach((orb, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = -(scrolled * speed);
      orb.style.transform = `translateY(${yPos}px)`;
    });
  });

  // ==================== DYNAMIC SKILL ITEMS ANIMATION ====================
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(item);
  });

  // ==================== PROJECT TAGS STAGGER ANIMATION ====================
  const projectTags = document.querySelectorAll('.tag');
  
  projectTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(tag);
  });

  // ==================== TECH TAGS STAGGER ANIMATION ====================
  const techTags = document.querySelectorAll('.tech-tags span');
  
  techTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(tag);
  });

  // ==================== CURSOR TRAIL EFFECT (Optional) ====================
  let cursorTrail = [];
  const trailLength = 10;

  document.addEventListener('mousemove', function(e) {
    // Add position to trail
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    // Keep trail at max length
    if (cursorTrail.length > trailLength) {
      cursorTrail.shift();
    }
  });

  // ==================== PERFORMANCE OPTIMIZATION ====================
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(function() {
      // Scroll-based animations are already handled above
    });
  });

  // ==================== EASTER EGG: KONAMI CODE ====================
  let konamiCode = [];
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
  document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      activateEasterEgg();
    }
  });

  function activateEasterEgg() {
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach(orb => {
      orb.style.animation = 'float 2s ease-in-out infinite, spin 5s linear infinite';
    });
    
    // Reset after 10 seconds
    setTimeout(() => {
      orbs.forEach(orb => {
        orb.style.animation = 'float 20s ease-in-out infinite';
      });
    }, 10000);
  }

  // ==================== ACCESSIBILITY ENHANCEMENTS ====================
  // Add focus visible for keyboard navigation
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid var(--accent-cyan)';
      this.style.outlineOffset = '4px';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = 'none';
    });
  });

  // ==================== PRELOAD IMAGES ====================
  const preloadImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        const newImg = new Image();
        newImg.src = src;
      }
    });
  };

  preloadImages();

  // ==================== LOG INITIALIZATION ====================
  console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
  console.log('%c✨ Made with passion by Shreeja Hebbar', 'color: #a855f7; font-size: 14px;');
  console.log('%cTip: Try the Konami Code (↑↑↓↓←→←→BA) for a surprise!', 'color: #ec4899; font-size: 12px;');
});

// ==================== SPIN ANIMATION FOR EASTER EGG ====================
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);