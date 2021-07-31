
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

  $('.quote-btn').click(function (event) {
    setStyles("#getaquote", { "opacity": "1", "pointer-events": "all" })
    setStyles("#quote-container", { "transform": "translateX(0)" })
  });
  $('#close-quote').click(function (event) {
    setStyles("#getaquote", { "opacity": "0", "pointer-events": "none" })
    setStyles("#quote-container", { "transform": "translateX(100%)" })
  });

  $('#quote-next').click(function (event) {
    $('.question-set').css("transform", "translateY(-100%)");
  });
});