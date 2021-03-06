// Setup custom events
const utils = require('./other/utils');
utils.setupCustomEvents();

// Manual Rendering
// -----------------------------------------------------

const p5 = window.p5 = require('p5');
const hsluv = window.hsluv = require('hsluv');
const React = window.React = require('react');
const ReactDOM = window.ReactDOM = require('react-dom');
window.pds = {
  PathInteractive: require('./components/PathInteractive'),
  Albers: require('./components/Albers'),
  RgbCube: require('./functions/RgbCube'),
  HsvlCylinder: require('./functions/HsvlCylinder')
};

// Automatic Rendering
// -----------------------------------------------------

// Run all examples
if(window.p5Examples) {
  for(let i = 0; i < p5Examples.length; i++) {
    // Run example in sync mode
    const node = document.querySelector('#' + p5Examples[i][0] + ' .p5container');
    const example = new p5(p5Examples[i][1], node, true);
    // Make it resizable
    example.canvas.style.width = "100%";
    example.canvas.style.height = "auto";
  }
}

// Highlight all pre tags
const Prism = require('prismjs');
const pres = document.getElementsByTagName('pre');
for(let i = 0; i < pres.length; i++) {
  pres[i].firstChild.innerHTML = Prism.highlight(pres[i].firstChild.textContent, Prism.languages.javascript)
}

const tocToggle = document.getElementById('tocToggle');
const toc = document.getElementById('tocContainer');
if(tocToggle && toc) {

  // Toggle TOC on click
  tocToggle.addEventListener('click', function(e) {
    e.preventDefault();
    if(toc.style.display == 'block') {
      toc.style.display = 'none';
      ga('send', 'event', 'toc', 'toggle', 'hide');
    }
    else {
      toc.style.display = 'block';
      ga('send', 'event', 'toc', 'toggle', 'show');
    }
  });

  // Highlight active TOC
  const as = document.querySelectorAll('#tocContainer a[href]');
  for(let i = 0; i < as.length; i++) {
    // link is the one where link is just index.html
    const realHref = as[i].getAttribute('href').split('#')[0];
    if(realHref == 'index.html') {
      as[i].setAttribute('class', 'color1');
    }
  }
}

// Toggle all overlays
const overlayToggles = document.querySelectorAll('.overlayToggle');
for(let i = 0; i < overlayToggles.length; i++) {
  overlayToggles[i].addEventListener('click', (e) => {
    e.preventDefault();
    const figure = e.target.closest('figure');
    const overlay = figure.querySelector('.overlay');
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  })
}

// Track newsletter clicks
const newsletter = document.getElementById('newsletter');
if(newsletter) {
  newsletter.addEventListener('click', function() {
    ga('send', 'event', 'newsletter', 'click');
  });
}

// Dispatch an event to say that libs are loaded. This makes it
// possible to have view-specific JS before the loaded libs.
window.dispatchEvent(new Event('libsLoaded'));
