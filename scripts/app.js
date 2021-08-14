
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

  window.scrollTo(0, 0);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document
        .getElementById("navbar").style.transform = "translateY(0)";
    } else {
      document
        .getElementById("navbar").style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
  }

});