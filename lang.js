/* Language toggle.
   English lives in the HTML; the Swedish version of each piece of text sits
   in a data-sv attribute beside it. The first swap stashes the English in
   data-en, so switching back is lossless. The choice is remembered per
   browser. With JavaScript off the page stays in English and the button is
   hidden, so nothing is left inert. */

(function () {
  var KEY = 'site-lang';
  var root = document.documentElement;

  root.classList.add('js');

  function apply(lang) {
    var nodes = document.querySelectorAll('[data-sv]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.getAttribute('data-en') === null) {
        el.setAttribute('data-en', el.innerHTML.trim());
      }
      el.innerHTML = el.getAttribute(lang === 'sv' ? 'data-sv' : 'data-en');
    }
    root.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
  apply(stored === 'sv' ? 'sv' : 'en');

  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      apply(root.lang === 'sv' ? 'en' : 'sv');
    });
  }
})();
