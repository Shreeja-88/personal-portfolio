// typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed(".typing", {
    strings: ["CSE Student", "Tech Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

