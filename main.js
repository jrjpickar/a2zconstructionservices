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
      var isOpen = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); // a11y
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        ham.classList.remove('active');
        nav.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) { reveals.forEach(function (el) { el.classList.add('visible'); }); }
  else if ('IntersectionObserver' in window) {
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
  var lastTrigger = null;
  window.openModal = function (id, trigger) {
    var el = document.getElementById(id + 'Modal');
    if (!el) return;
    lastTrigger = trigger || document.activeElement;
    el.classList.add('open'); document.body.style.overflow = 'hidden';
    el.style.visibility = 'visible';
    var btn = el.querySelector('.modal-close');
    if (btn) {
      btn.focus();
      setTimeout(function () { if (!el.contains(document.activeElement)) btn.focus(); }, 60);
    }
  };
  window.closeModal = function (id) {
    var el = document.getElementById(id + 'Modal');
    if (el) { el.classList.remove('open'); el.style.visibility = ''; document.body.style.overflow = ''; }
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  };
  // Keep Tab inside an open dialog
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var open = document.querySelector('.modal-bg.open');
    if (!open) return;
    var f = open.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.querySelectorAll('.modal-bg').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target === this) { this.classList.remove('open'); document.body.style.overflow = ''; }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var wasOpen = document.querySelector('.modal-bg.open');
      document.querySelectorAll('.modal-bg.open').forEach(function (el) {
        el.classList.remove('open'); el.style.visibility = '';
      });
      document.body.style.overflow = '';
      if (wasOpen && lastTrigger && lastTrigger.focus) lastTrigger.focus();
    }
  });

  // Convert a US/intl phone string to E.164 (+19495550123). Returns the input unchanged if it can't be parsed.
  function toE164(input) {
    var s = String(input || '').trim();
    if (!s) return '';
    s = s.replace(/\s*(?:ext\.?|x|#)\s*\d+$/i, '');          // drop extensions
    var intl = /^\s*(\+|00)/.test(s);
    var d = s.replace(/\D/g, '');
    if (intl) {
      if (s.trim().indexOf('00') === 0) d = d.slice(2);
      return (d.length >= 8 && d.length <= 15) ? '+' + d : input;
    }
    if (d.length === 11 && d[0] === '1') d = d.slice(1);
    if (d.length === 10 && /[2-9]/.test(d[0]) && /[2-9]/.test(d[3])) return '+1' + d;
    return input;
  }

  // Contact form
  var form    = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (form && success) {
    var errBox = document.getElementById('formError');
    function showSuccess() { form.style.display = 'none'; success.style.display = 'block'; success.focus(); }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Accessible validation: list problems in an alert region and focus the first bad field
      var bad = [];
      form.querySelectorAll('[required]').forEach(function (f) {
        var ok = f.type === 'checkbox' ? f.checked : f.value.trim() !== '' && (f.type !== 'email' || /.+@.+\..+/.test(f.value));
        f.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok) bad.push(f);
      });
      if (bad.length && errBox) {
        var names = bad.map(function (f) {
          if (f.id === 'termsCheck') return 'agree to the Terms of Service';
          var l = form.querySelector('label[for="' + f.id + '"]');
          var t = l ? l.textContent.replace('*', '').replace('(required)', '').trim() : f.name;
          return f.type === 'email' && f.value.trim() ? 'enter a valid ' + t.toLowerCase() : 'fill in ' + t.toLowerCase();
        });
        errBox.textContent = 'Please ' + names.join(', ') + '.';
        errBox.classList.add('show');
        bad[0].focus();
        return;
      }
      if (errBox) { errBox.textContent = ''; errBox.classList.remove('show'); }
      // Honeypot: bots fill the hidden field, silently drop
      var hp = form.querySelector('[name="bot-field"]');
      if (hp && hp.value) { showSuccess(); return; }

      // Sandbox preview: never send real leads
      if (form.hasAttribute('data-sandbox')) { showSuccess(); return; }

      var btn = form.querySelector('.form-submit');
      var btnText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      var data = new URLSearchParams();
      new FormData(form).forEach(function (v, k) {
        if (k !== 'bot-field' && k !== 'form-name') data.append(k, v);
      });
      // Phone → E.164 on submit only (field display is left as typed)
      var rawPhone = (data.get('phone') || '').trim();
      data.set('phone', toE164(rawPhone));
      data.append('phone_raw', rawPhone);
      if (!data.has('sms_consent')) data.append('sms_consent', 'no');
      data.append('page', location.href);
      data.append('submitted_at', new Date().toISOString());

      // Form-encoded + no-cors = simple request, always delivered to the Make webhook
      fetch(form.action, { method: 'POST', mode: 'no-cors', body: data })
        .then(showSuccess)
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = btnText; }
          if (errBox) { errBox.textContent = 'Sorry, your message did not send. Please try again or call us at (949) 776-3898.'; errBox.classList.add('show'); errBox.focus && errBox.focus(); }
        });
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
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: reduce ? 'auto' : 'smooth' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

});
