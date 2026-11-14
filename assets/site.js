/* NXG Tennis — shared header, footer, and behaviour */
(function () {
  document.documentElement.classList.remove('no-js');

  const CONTACT = {
    email: 'enrollment@nxg.tennis',
    phone: '214-293-9235',
    phoneHref: 'tel:+12142939235',
    locations: [
      { name: 'Anna', addr: '1107 Rosamond Pkwy, Anna, TX 75409', map: 'https://maps.google.com/?q=1107+Rosamond+Pkwy+Anna+TX+75409' },
      { name: 'Melissa', addr: '3059 Champions Way, Melissa, TX 75454', map: 'https://maps.google.com/?q=3059+Champions+Way+Melissa+TX+75454' }
    ]
  };
  window.NXG = { CONTACT };

  const NAV = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'schedule.html', label: 'Schedule' },
    { href: 'camps.html', label: 'Camps' },
    { href: 'free-trial.html', label: 'Free Trial' }
  ];

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const current = page === '' ? 'index.html' : page;
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  window.NXG.arrow = arrow;

  const logo = `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><circle cx="24" cy="24" r="20"/><path d="M10 10c7 6 7 22 0 28M38 10c-7 6-7 22 0 28"/><path d="M17 24h14"/></svg>`;

  /* ---- Header ---- */
  const headerSlot = document.querySelector('[data-header]');
  if (headerSlot) {
    const links = NAV.map(n => `<a href="${n.href}"${n.href === current ? ' aria-current="page"' : ''}>${n.label}</a>`).join('');
    headerSlot.outerHTML = `
      <a class="sr-only" href="#main">Skip to main content</a>
      <header class="site-header${document.body.dataset.headerSolid !== undefined ? ' solid' : ''}">
        <div class="wrap">
          <a class="brand" href="index.html" aria-label="NXG Tennis Academy home">${logo}<span><b>NXG</b><small>TENNIS ACADEMY</small></span></a>
          <nav class="nav-links" aria-label="Main">${links}</nav>
          <a class="btn btn-white btn-sm header-cta" href="trial-form.html">Book Free Trial</a>
          <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mobileNav"><span></span><span></span><span></span></button>
        </div>
      </header>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
        ${NAV.map(n => `<a href="${n.href}"${n.href === current ? ' aria-current="page"' : ''}>${n.label}${arrow.replace('<svg', '<svg width="20" height="20"')}</a>`).join('')}
        <a class="btn btn-white" href="trial-form.html">Book Free Trial</a>
      </nav>`;
  }

  /* ---- Footer ---- */
  const footerSlot = document.querySelector('[data-footer]');
  if (footerSlot) {
    const pin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
    const mail = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
    const phone = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>';
    footerSlot.outerHTML = `
      <footer class="site-footer">
        <div class="wrap foot-grid">
          <div>
            <a class="brand" href="index.html">${logo}<span><b>NXG</b><small>TENNIS ACADEMY</small></span></a>
            <p class="foot-tag">Development<br><span>by Design.</span></p>
            <p class="foot-desc">Every player deserves a development plan. Where you start doesn't define where you can go.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4>Train</h4>
            <ul>
              <li><a href="schedule.html#classes">Class Schedule</a></li>
              <li><a href="schedule.html#private">Private Lessons</a></li>
              <li><a href="camps.html">Seasonal Camps</a></li>
              <li><a href="trial-form.html">Trial Questionnaire</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in Touch</h4>
            ${CONTACT.locations.map(l => `<a class="contact-item" href="${l.map}" target="_blank" rel="noopener">${pin}<span>${l.addr}</span></a>`).join('')}
            <a class="contact-item" href="mailto:${CONTACT.email}">${mail}<span>${CONTACT.email}</span></a>
            <a class="contact-item" href="${CONTACT.phoneHref}">${phone}<span>${CONTACT.phone}</span></a>
          </div>
        </div>
        <div class="wrap foot-bottom">
          <span>© ${new Date().getFullYear()} NXG Tennis, LLC. Development By Design.</span>
          <span>Anna &amp; Melissa, Texas</span>
        </div>
      </footer>`;
  }

  /* ---- Header scroll state + mobile nav ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = document.querySelector('.burger');
  const mnav = document.getElementById('mobileNav');
  if (burger && mnav) {
    const set = open => { mnav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); header.classList.toggle('solid', open || document.body.dataset.headerSolid !== undefined); };
    burger.addEventListener('click', () => set(!mnav.classList.contains('open')));
    mnav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  /* ---- Reveal on scroll ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el, i) => { el.style.transitionDelay = (el.dataset.delay || 0) + 'ms'; io.observe(el); });
  } else reveals.forEach(el => el.classList.add('in'));

  /* ---- Momence embeds ---- */
  // Class schedule: same plugin as the original site (host 222361), isolated in embeds/schedule.html.
  // Private lessons: Momence appointments board 160658.
  function wireEmbed(shell, iframe, matchType) {
    const loader = shell.querySelector('.embed-loading');
    const hideLoader = () => loader && loader.classList.add('done');
    addEventListener('message', e => {
      const d = e.data || {};
      const h = +d.height;
      if (!d.type || !String(d.type).match(matchType) || isNaN(h) || h < 50) return;
      const max = +shell.dataset.maxHeight || Infinity;   // optional cap, e.g. on the home page
      iframe.style.height = Math.ceil(Math.min(h, max)) + 'px';
      hideLoader();
    });
    // The iframe may finish loading before this script runs (common on slower hosts),
    // so don't rely only on the load event: check its state, ask it for its height,
    // and never leave the loading cover up for more than a few seconds.
    const ping = () => { try { iframe.contentWindow.postMessage({ type: 'nxg_ping' }, '*'); } catch (e) {} };
    iframe.addEventListener('load', () => { ping(); setTimeout(hideLoader, 600); });
    try { if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete' && iframe.contentDocument.body) { ping(); setTimeout(hideLoader, 600); } } catch (e) {}
    ping();
    setTimeout(hideLoader, 6000);
  }
  document.querySelectorAll('[data-momence="schedule"]').forEach(shell => {
    const iframe = shell.querySelector('iframe');
    wireEmbed(shell, iframe, 'nxg_schedule_resize');
  });
  document.querySelectorAll('[data-momence="appointments"]').forEach(shell => {
    const iframe = shell.querySelector('iframe');
    wireEmbed(shell, iframe, 'iframe_appointments_222361_resize');
  });

  /* ---- Generic tab sets: [data-tabs] with buttons[data-tab] and panels[data-panel] ---- */
  document.querySelectorAll('[data-tabs]').forEach(set => {
    const btns = set.querySelectorAll('[data-tab]');
    const scope = document.querySelector(set.dataset.tabs) || document;
    const panels = scope.querySelectorAll('[data-panel]');
    const show = id => {
      btns.forEach(b => b.setAttribute('aria-selected', b.dataset.tab === id));
      panels.forEach(p => p.hidden = p.dataset.panel !== id);
    };
    btns.forEach(b => b.addEventListener('click', () => { show(b.dataset.tab); if (set.dataset.hash !== undefined) history.replaceState(null, '', '#' + b.dataset.tab); }));
    const fromHash = location.hash.slice(1);
    show([...btns].some(b => b.dataset.tab === fromHash) ? fromHash : btns[0].dataset.tab);
    addEventListener('hashchange', () => { const h = location.hash.slice(1); if ([...btns].some(b => b.dataset.tab === h)) show(h); });
  });
})();
