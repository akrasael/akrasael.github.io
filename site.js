/* The only JavaScript on this site, and it does one thing: count usage.
   Nothing on the site depends on it — every page, link and download works
   identically with scripting off.

   This is the only file holding provider configuration, so the site
   identifier lives in one place rather than being repeated across five
   pages. Loaded with an absolute path so it resolves the same from the
   root, from blog/, and from 404.html served at any depth.

   Until CONFIG is filled in this file does nothing at all — no requests,
   no errors. The site works exactly as before with scripting off; a
   visitor without JavaScript simply is not counted. Ad blockers suppress
   a share of hits too, so read the numbers as directional. */

(function () {
  'use strict';

  /* ── CONFIG ─────────────────────────────────────────────────────────
     The only lines to edit. Both come from your analytics account.

       script   the provider's counting script
                GoatCounter example: https://gc.zgo.at/count.js
       endpoint where events are recorded
                GoatCounter example: https://YOURCODE.goatcounter.com/count

     Leave either empty to keep analytics switched off.              */

  var CONFIG = {
    script: '',
    endpoint: ''
  };

  /* ───────────────────────────────────────────────────────────────── */

  /* Honour an explicit opt-out. Both signals mean the visitor has asked
     not to be tracked, so nothing loads and nothing is sent. */
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === '1') {
    return;
  }

  if (CONFIG.script) {
    var s = document.createElement('script');
    s.async = true;
    s.src = CONFIG.script;
    s.setAttribute('data-goatcounter', CONFIG.endpoint);
    document.head.appendChild(s);
  }

  /* Record one event. A click that navigates away can cancel a request
     in flight, which is exactly the case for downloads and outbound
     links, so prefer transports that survive unload: the provider's own
     API first, then sendBeacon, then an image pixel. */
  function count(name) {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({ path: name, title: name, event: true });
      return;
    }
    if (!CONFIG.endpoint) { return; }

    var url = CONFIG.endpoint +
      '?p=' + encodeURIComponent(name) +
      '&t=' + encodeURIComponent(name) +
      '&e=true';

    if (navigator.sendBeacon && navigator.sendBeacon(url)) { return; }
    new Image().src = url;
  }

  /* Events are attached by selector, so no link in the HTML needs to
     carry a handler or an extra attribute. */
  function on(selector, name) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      (function (el) {
        el.addEventListener('click', function () {
          count(typeof name === 'function' ? name(el) : name);
        });
      })(nodes[i]);
    }
  }

  function ready() {
    // A paper served from this repository.
    on('a[href$=".pdf"]:not([href^="http"])', function (el) {
      return 'download: ' + el.getAttribute('href').split('/').pop();
    });

    // A link leaving the site — the thesis on DiVA today.
    var host = window.location.host;
    var links = document.querySelectorAll('a[href^="http"]');
    for (var i = 0; i < links.length; i++) {
      (function (el) {
        if (el.host === host) { return; }
        el.addEventListener('click', function () {
          count('outbound: ' + el.host);
        });
      })(links[i]);
    }

    // Which of the two routes into a post the reader took.
    on('.post-title a', 'post-open: title');
    on('a.button', 'post-open: button');

    /* A not-found hit. This keys on a marker in the markup, never on the
       URL: 404.html is served for whatever wrong address was requested,
       so the path is arbitrary and cannot identify the page. */
    if (document.body.getAttribute('data-page') === '404') {
      count('404: ' + window.location.pathname);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
