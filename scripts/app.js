
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

  window.scrollTo(0, 0);

});