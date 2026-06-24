/* =============================================
   A2Z Construction Services
   Design: Nardo Grey × A2Z brand
   Fonts: Playfair Display + DM Sans
   ============================================= */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream:       #9ea0a3;   /* nardo grey — main bg */
  --cream-dark:  #8c8e91;   /* nardo grey dark — trust bar, accents */
  --orange:      #e8521a;
  --orange-dark: #c44415;
  --dark:        #1c1a17;
  --dark-2:      #2a2823;
  --dark-3:      #3a3730;
  --gold:        #d4a853;
  --muted:       #3d3d3d;   /* darkened for legibility on grey bg */
  --border:      rgba(28,26,23,.18);
  --border-dark: rgba(255,255,255,.08);
  --sans: 'DM Sans', system-ui, sans-serif;
  --serif: 'Playfair Display', Georgia, serif;
  --max: 1160px;
}

html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--sans);
  background: var(--cream);
  color: var(--dark);
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
}
img { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

h1, h2, h3, h4 { font-family: var(--serif); }

.wrap { max-width: var(--max); margin: 0 auto; padding: 0 48px; }

/* scroll reveal */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.rd1 { transition-delay: .1s; }
.rd2 { transition-delay: .2s; }
.rd3 { transition-delay: .3s; }
.rd4 { transition-delay: .4s; }

/* =============================================
   BUTTONS
   ============================================= */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; font-family: var(--sans);
  font-size: 15px; font-weight: 600; border-radius: 8px;
  transition: background .2s, transform .15s, box-shadow .2s;
  cursor: pointer; border: none; white-space: nowrap;
}
.btn-primary { background: var(--orange); color: #fff; }
.btn-primary:hover { background: var(--orange-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,82,26,.35); }
.btn-outline { background: transparent; color: var(--dark); border: 2px solid var(--dark); padding: 12px 28px; }
.btn-outline:hover { background: var(--dark); color: var(--cream); transform: translateY(-2px); }
.btn-outline-white { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.5); padding: 12px 28px; }
.btn-outline-white:hover { background: rgba(255,255,255,.12); border-color: #fff; transform: translateY(-2px); }
.btn-gold { background: var(--gold); color: var(--dark); }
.btn-gold:hover { background: #c49840; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,168,83,.4); }

/* =============================================
   NAVBAR — fixed, nardo grey
   ============================================= */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: rgba(158,160,163,.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow .3s;
  height: 72px;
}
.navbar.scrolled { box-shadow: 0 4px 24px rgba(28,26,23,.15); }
.navbar .wrap { display: flex; align-items: center; justify-content: space-between; height: 72px; }
.nav-logo {
  font-family: var(--serif); font-size: 1.4rem; font-weight: 800;
  color: var(--dark); display: flex; align-items: center; gap: 10px;
}
.nav-logo-badge {
  background: var(--orange); color: #fff;
  font-family: var(--sans); font-size: 11px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  padding: 3px 8px; border-radius: 4px;
}
.nav-links { display: flex; align-items: center; gap: 36px; }
.nav-links a { font-size: 15px; font-weight: 500; color: var(--dark); transition: color .15s; }
.nav-links a:hover { color: var(--orange); }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--dark); border-radius: 2px; transition: .25s; }
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* =============================================
   HERO — dark, editorial, full height
   ============================================= */
.hero {
  min-height: 100vh; padding-top: 72px;
  background: var(--dark);
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; overflow: hidden; position: relative;
}
/* subtle texture */
.hero::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(232,82,26,.08) 0%, transparent 60%),
                    radial-gradient(circle at 80% 20%, rgba(212,168,83,.05) 0%, transparent 50%);
  pointer-events: none;
}
.hero-left { padding: 80px 0 80px 48px; position: relative; z-index: 2; }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(232,82,26,.15); color: var(--orange);
  border: 1px solid rgba(232,82,26,.25);
  font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
  padding: 6px 14px; border-radius: 100px; margin-bottom: 24px;
}
.hero-eyebrow::before { content: ''; width: 6px; height: 6px; background: var(--orange); border-radius: 50%; }
.hero h1 {
  font-family: var(--serif); font-size: clamp(44px, 5vw, 68px);
  font-weight: 800; color: #fff; line-height: 1.08; margin-bottom: 22px;
}
.hero h1 em { color: var(--orange); font-style: normal; }
.hero-sub { font-size: 17px; color: rgba(255,255,255,.6); line-height: 1.75; max-width: 460px; margin-bottom: 40px; }
.hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }
.hero-stats { display: flex; gap: 36px; flex-wrap: wrap; }
.hero-stat-num { font-family: var(--serif); font-size: 28px; font-weight: 800; color: #fff; }
.hero-stat-num span { color: var(--orange); }
.hero-stat-label { font-size: 12px; color: rgba(255,255,255,.45); font-weight: 500; letter-spacing: .5px; margin-top: 2px; }
/* right side — photo + floating card */
.hero-right { position: relative; height: 100%; min-height: 600px; }
.hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .55; }
.hero-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right, var(--dark) 0%, rgba(28,26,23,.2) 60%);
}
/* floating offer card */
.hero-card {
  position: absolute; bottom: 60px; left: -40px; z-index: 3;
  background: #fff; border-radius: 16px; padding: 32px 36px;
  box-shadow: 0 20px 60px rgba(28,26,23,.35);
  animation: float 4s ease-in-out infinite;
  max-width: 320px;
}
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.hero-card-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
.hero-card-service { font-family: var(--serif); font-size: 18px; font-weight: 700; color: var(--dark); margin-bottom: 12px; }
.hero-card-pills { display: flex; flex-wrap: wrap; gap: 6px; }
.hero-card-pill { background: var(--cream); color: var(--dark); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 100px; border: 1px solid var(--border); }
.hero-card-pill.orange { background: rgba(232,82,26,.1); color: var(--orange); border-color: rgba(232,82,26,.2); }

/* =============================================
   TRUST BAR
   ============================================= */
.trust-bar { background: var(--cream-dark); border-bottom: 1px solid rgba(28,26,23,.22); padding: 20px 0; }
.trust-bar .wrap { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
.trust-item { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: var(--dark); }
.trust-icon { width: 32px; height: 32px; background: var(--orange); border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.trust-icon svg { width: 16px; height: 16px; fill: #fff; }

/* =============================================
   ABOUT SECTION — nardo grey split
   ============================================= */
.about-section { padding: 100px 0; background: var(--cream); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.section-tag { display: inline-block; color: var(--orange); font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 16px; }
.section-title { font-family: var(--serif); font-size: clamp(30px, 3.5vw, 44px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; color: var(--dark); }
.section-body { font-size: 15px; color: var(--muted); line-height: 1.85; margin-bottom: 32px; }
.about-photo-wrap { position: relative; }
.about-photo { width: 100%; height: 520px; object-fit: cover; border-radius: 20px; display: block; }
/* orange accent block */
.about-accent {
  position: absolute; bottom: -24px; right: -24px;
  width: 160px; height: 160px; background: var(--orange);
  border-radius: 16px; z-index: -1; opacity: .9;
}
.about-accent-dot {
  position: absolute; top: -16px; left: -16px;
  width: 48px; height: 48px; background: var(--gold);
  border-radius: 50%; z-index: -1;
}

/* =============================================
   SERVICES — dark section with glass cards
   ============================================= */
.services-section { background: var(--dark); padding: 100px 0; }
.services-section .section-title { color: #fff; }
.services-section .section-tag { color: var(--orange); }
.services-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 52px; flex-wrap: wrap; gap: 24px; }
.services-head .section-body { color: rgba(255,255,255,.5); max-width: 400px; margin-bottom: 0; }
.svc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.svc-card {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  border-radius: 16px; padding: 36px 32px;
  transition: transform .25s, background .25s, border-color .25s;
  cursor: pointer;
}
.svc-card:hover { background: rgba(255,255,255,.1); border-color: rgba(212,168,83,.4); transform: translateY(-6px); }
.svc-card-icon { width: 56px; height: 56px; background: var(--orange); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.svc-card-icon svg { width: 26px; height: 26px; fill: #fff; }
.svc-card h3 { font-family: var(--serif); font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
.svc-card p { font-size: 14px; color: rgba(255,255,255,.55); line-height: 1.75; }
.svc-card-link { display: inline-flex; align-items: center; gap: 6px; color: var(--orange); font-size: 13px; font-weight: 700; margin-top: 18px; letter-spacing: .3px; transition: gap .15s; }
.svc-card:hover .svc-card-link { gap: 10px; }

/* =============================================
   WHY CHOOSE US — nardo grey with numbered list
   ============================================= */
.why-section { padding: 100px 0; background: var(--cream); }
.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.why-list { display: flex; flex-direction: column; gap: 28px; margin-top: 36px; }
.why-item { display: flex; gap: 20px; align-items: flex-start; }
.why-num {
  width: 40px; height: 40px; background: var(--orange); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  font-family: var(--serif); font-size: 16px; font-weight: 800; color: #fff;
}
.why-item h4 { font-family: var(--serif); font-size: 17px; font-weight: 700; margin-bottom: 5px; }
.why-item p { font-size: 14px; color: var(--muted); line-height: 1.7; }
.why-photo { width: 100%; height: 560px; object-fit: cover; border-radius: 20px; }
.why-photo-wrap { position: relative; }
.why-photo-card {
  position: absolute; top: 40px; left: -32px;
  background: var(--dark); border-radius: 14px; padding: 20px 24px;
  box-shadow: 0 16px 48px rgba(28,26,23,.3); min-width: 200px;
}
.why-photo-card .wpc-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 4px; }
.why-photo-card .wpc-val { font-family: var(--serif); font-size: 26px; font-weight: 800; color: var(--gold); }
.why-photo-card .wpc-sub { font-size: 12px; color: rgba(255,255,255,.45); margin-top: 2px; }

/* =============================================
   TESTIMONIALS — dark cards
   ============================================= */
.testi-section { background: var(--dark-2); padding: 100px 0; }
.testi-section .section-title { color: #fff; }
.testi-section .section-tag { color: var(--gold); }
.testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 52px; }
.testi-card {
  background: var(--cream-dark); border-radius: 16px; padding: 32px;
  transition: transform .25s, box-shadow .25s;
  box-shadow: 0 4px 20px rgba(28,26,23,.15);
}
.testi-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(28,26,23,.25); }
.testi-stars { display: flex; gap: 3px; margin-bottom: 16px; }
.testi-star { color: var(--gold); font-size: 16px; }
.testi-quote { font-size: 15px; color: var(--dark); line-height: 1.75; margin-bottom: 24px; font-style: italic; }
.testi-name { font-weight: 700; font-size: 14px; color: var(--dark); }
.testi-loc { font-size: 13px; color: var(--muted); margin-top: 2px; }
.testi-stripe { width: 32px; height: 3px; background: var(--orange); border-radius: 2px; margin-bottom: 16px; }

/* =============================================
   CONTACT — dark split with form
   ============================================= */
.contact-section { padding: 100px 0; background: var(--dark); }
.contact-section .section-title { color: #fff; }
.contact-section .section-tag { color: var(--orange); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.contact-intro { font-size: 15px; color: rgba(255,255,255,.55); line-height: 1.8; margin-bottom: 40px; }
.contact-info-list { display: flex; flex-direction: column; gap: 22px; }
.ci-row { display: flex; align-items: flex-start; gap: 16px; }
.ci-icon { width: 44px; height: 44px; background: rgba(232,82,26,.15); border: 1px solid rgba(232,82,26,.25); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.ci-icon svg { width: 18px; height: 18px; fill: var(--orange); }
.ci-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 3px; }
.ci-val { font-size: 14px; color: rgba(255,255,255,.8); line-height: 1.5; }
/* form */
.form-box {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px; padding: 44px;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
.form-field label { font-size: 12px; font-weight: 600; color: rgba(255,255,255,.5); letter-spacing: .5px; text-transform: uppercase; }
.form-field input,
.form-field textarea,
.form-field select {
  background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.15);
  border-radius: 8px; padding: 13px 16px;
  font-family: var(--sans); font-size: 14px; color: #fff; outline: none;
  transition: border-color .15s, background .15s;
}
.form-field input::placeholder, .form-field textarea::placeholder { color: rgba(255,255,255,.3); }
.form-field input:focus, .form-field textarea:focus { border-color: var(--orange); background: rgba(255,255,255,.1); }
.form-field textarea { resize: vertical; min-height: 110px; }
.consent-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
.consent-row input[type="checkbox"] { margin-top: 3px; accent-color: var(--orange); flex-shrink: 0; width: 15px; height: 15px; }
.consent-row label { font-size: 12px; color: rgba(255,255,255,.45); line-height: 1.65; cursor: pointer; }
.consent-row a { color: var(--gold); font-weight: 600; text-decoration: underline; }
.form-submit { width: 100%; padding: 16px; background: var(--orange); color: #fff; border: none; border-radius: 8px; font-family: var(--sans); font-size: 15px; font-weight: 700; cursor: pointer; transition: background .2s, transform .15s, box-shadow .2s; margin-top: 6px; }
.form-submit:hover { background: var(--orange-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,82,26,.4); }
.form-note { text-align: center; font-size: 11px; color: rgba(255,255,255,.25); margin-top: 12px; }
.form-success { display: none; text-align: center; padding: 60px 24px; }
.form-success .check { font-size: 52px; color: var(--orange); display: block; margin-bottom: 16px; }
.form-success h3 { font-family: var(--serif); font-size: 26px; color: #fff; margin-bottom: 8px; }
.form-success p { font-size: 15px; color: rgba(255,255,255,.5); }

/* =============================================
   FOOTER
   ============================================= */
.footer { background: var(--dark); border-top: 1px solid rgba(255,255,255,.06); padding: 64px 0 0; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px; margin-bottom: 52px; }
.footer-brand-name { font-family: var(--serif); font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
.footer-brand-name span { color: var(--orange); }
.footer-tagline { font-size: 14px; color: rgba(255,255,255,.4); line-height: 1.7; max-width: 280px; margin-bottom: 24px; }
.socials { display: flex; gap: 10px; }
.social-btn { width: 36px; height: 36px; border: 1px solid rgba(255,255,255,.12); border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: all .15s; }
.social-btn:hover { background: var(--orange); border-color: var(--orange); }
.social-btn svg { width: 15px; height: 15px; }
.footer-col-title { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: 20px; }
.footer-links { display: flex; flex-direction: column; gap: 11px; }
.footer-links a { font-size: 14px; color: rgba(255,255,255,.55); transition: color .15s; }
.footer-links a:hover { color: #fff; }
.footer-contact-item { font-size: 14px; color: rgba(255,255,255,.45); line-height: 1.6; margin-bottom: 8px; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,.06); padding: 22px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.footer-bottom p { font-size: 13px; color: rgba(255,255,255,.25); }
.footer-bottom a { font-size: 13px; color: rgba(255,255,255,.35); transition: color .15s; }
.footer-bottom a:hover { color: #fff; }
.footer-legal { display: flex; gap: 20px; }

/* BuildZoom badge wrapper */
.bz-wrap { margin-top: 20px; }
.bz-bdg { width: 230px; }
.bz-bdg > a { display: block; font-family: Helvetica; font-size: 9px; font-weight: 500; text-align: center; margin-top: 4px; color: rgba(255,255,255,.4); line-height: 10px; }
.bz-bdg .small-label { margin-top: -12px; padding: 0 10px; }
.bz-bdg img[width="230px"] { opacity: .9; transition: opacity .15s; }
.bz-bdg:hover img[width="230px"] { opacity: 1; }

/* =============================================
   MODALS
   ============================================= */
.modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,.7); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0; pointer-events: none; transition: opacity .22s; }
.modal-bg.open { opacity: 1; pointer-events: all; }
.modal-box { background: var(--dark-2); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; max-width: 720px; width: 100%; max-height: 88vh; overflow-y: auto; }
.modal-head { position: sticky; top: 0; background: var(--dark-2); border-bottom: 1px solid rgba(255,255,255,.08); padding: 22px 32px; display: flex; align-items: center; justify-content: space-between; z-index: 2; }
.modal-head h2 { font-family: var(--serif); font-size: 22px; color: #fff; }
.modal-close { background: none; border: none; font-size: 24px; color: rgba(255,255,255,.4); cursor: pointer; line-height: 1; padding: 2px 6px; transition: color .15s; }
.modal-close:hover { color: #fff; }
.modal-body { padding: 32px; }
.modal-date { background: rgba(255,255,255,.05); border-left: 3px solid var(--orange); padding: 10px 16px; font-size: 12px; color: rgba(255,255,255,.4); border-radius: 0 4px 4px 0; margin-bottom: 28px; }
.modal-body h3 { font-family: var(--serif); font-size: 16px; color: #fff; margin: 24px 0 8px; }
.modal-body h3:first-of-type { margin-top: 0; }
.modal-body p { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.8; margin-bottom: 10px; }
.modal-body ul { padding-left: 20px; margin-bottom: 12px; }
.modal-body li { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.78; margin-bottom: 6px; list-style: disc; }
.modal-body a { color: var(--gold); font-weight: 600; }
.modal-body strong { color: #fff; }

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 1024px) {
  .hero { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .hero-left { padding: 80px 48px; max-width: 700px; }
  .svc-grid { grid-template-columns: 1fr 1fr; }
  .testi-grid { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 860px) {
  .wrap { padding: 0 24px; }
  .about-grid, .why-grid, .contact-grid { grid-template-columns: 1fr; }
  .about-photo-wrap { order: -1; }
  .about-photo, .why-photo { height: 340px; border-radius: 14px; }
  .testi-grid { grid-template-columns: 1fr; }
  .svc-grid { grid-template-columns: 1fr; }
  .hero-left { padding: 72px 24px 60px; }
  .nav-links { display: none; position: fixed; top: 72px; left: 0; right: 0; background: rgba(158,160,163,.98); flex-direction: column; padding: 20px 24px; gap: 4px; border-bottom: 1px solid var(--border); z-index: 199; box-shadow: 0 8px 24px rgba(28,26,23,.1); }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 16px; }
  .nav-links li:last-child a { border-bottom: none; }
  .hamburger { display: flex; }
  .navbar .btn { display: none; }
  .form-row { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .why-photo-card { display: none; }
}
@media (max-width: 480px) {
  .hero h1 { font-size: 38px; }
  .hero-stats { gap: 20px; }
  .trust-bar .wrap { gap: 20px; }
}
