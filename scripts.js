// typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed(".typing", {
    strings: ["CSE Student", "Aspiring Developer", "Tech Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
