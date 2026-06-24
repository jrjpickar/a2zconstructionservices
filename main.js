document.addEventListener('DOMContentLoaded', function () {

  // Year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Navbar scroll state
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Hamburger
  var ham = document.getElementById('hamburger');
  var nav = document.getElementById('navLinks');
  if (ham && nav) {
    ham.addEventListener('click', function () {
      this.classList.toggle('active');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        ham.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Modals
  window.openModal = function (id) {
    var el = document.getElementById(id + 'Modal');
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeModal = function (id) {
    var el = document.getElementById(id + 'Modal');
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
  };
  document.querySelectorAll('.modal-bg').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target === this) { this.classList.remove('open'); document.body.style.overflow = ''; }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-bg.open').forEach(function (el) {
        el.classList.remove('open');
      });
      document.body.style.overflow = '';
    }
  });

  // Contact form
  var form    = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      var live = location.hostname !== 'localhost' && location.hostname !== '127.0.0.1' && location.hostname !== '';
      if (!live) {
        e.preventDefault();
        form.style.display = 'none';
        success.style.display = 'block';
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

});
