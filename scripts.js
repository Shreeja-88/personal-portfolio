// typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed(".typing", {
    strings: ["CSE Student", "Backend Developer", "Tech Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for nav links (preserve original behavior)
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Initialize AOS
  if (AOS) {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic'
    });
  }

  // GSAP subtle entrance for hero text & profile
  if (gsap) {
    gsap.from(".hero-left h1", { y: -18, opacity: 0, duration: 0.8, delay: 0.12, ease: "power3.out" });
    gsap.from(".hero-left h2", { y: -8, opacity: 0, duration: 0.7, delay: 0.24, ease: "power3.out" });
    gsap.from(".profile-wrapper", { scale: 0.96, opacity: 0, duration: 0.9, delay: 0.28, ease: "elastic.out(1, 0.6)" });

    // small hover tilt on cards
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, boxShadow: '0 18px 40px rgba(40,40,80,0.08)', duration: 0.2 }));
      card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, boxShadow: '0 8px 24px rgba(40,40,80,0.04)', duration: 0.2 }));
    });
  }
});
