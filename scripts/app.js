
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 30) {
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        document.getElementById("navbar").style.transform = "translateY(-100%)";
      } else {
        document.getElementById("navbar").style.transform = "translateY(0)";
      }
      previousScroll = currentScroll;
    }
  });

});