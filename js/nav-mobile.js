/* DoneStead — mobile navigation (js/nav-mobile.js)
   Opens/closes the header menu below 860px. Closes on: link tap, tap outside,
   Escape, and when the window is resized back to desktop width. */
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  var DESKTOP_MIN = 861;

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!links.classList.contains('open'));
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) { setOpen(false); toggle.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_MIN) setOpen(false);
  });
})();
