
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

  // Slider functionality
  const siemas = document.querySelectorAll('.siema'); // allows for mutiple sliders on a page

  for (const siema of siemas) {
    new Siema({
      selector: siema,
      perPage: {
        0: 1,
        1024: 2,
        1280: 3
      },
      multipleDrag: true
    })
  }

  function sliderCursor() {
    const ball = document.querySelector(".dragVisual");

    let mouseX = 0;
    let mouseY = 0;

    let ballX = 0;
    let ballY = 0;

    let speed = 0.2;


    function animate() {

      let distX = mouseX - ballX;
      let distY = mouseY - ballY;


      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);

      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";

      requestAnimationFrame(animate);
    }
    animate();
    document.addEventListener("mousemove", function (event) {
      mouseX = event.pageX;
      mouseY = event.pageY;
    })
  }

  sliderCursor();

  document.querySelectorAll('.sliderCont').forEach(function (object) {
    object.addEventListener("mouseleave", function (event) {
      document.querySelectorAll('.dragVisual').forEach(function (element) {
        element.style.display = "none";
      });
    });
  });

  document.querySelectorAll('.sliderCont').forEach(function (object) {
    object.addEventListener("mouseenter", function (event) {
      document.querySelectorAll('.dragVisual').forEach(function (element) {
        element.style.display = "flex";
      });
    });
  });

  document.querySelectorAll('.siema').forEach(function (object) {
    object.addEventListener("mouseleave", function (event) {
      document.querySelectorAll('.dragVisual').forEach(function (element) {
        element.style.opacity = "0";
      });
    });
  });

  document.querySelectorAll('.siema').forEach(function (object) {
    object.addEventListener("mouseenter", function (event) {
      document.querySelectorAll('.dragVisual').forEach(function (element) {
        element.style.opacity = "1";
      });
    });
  });
  // Hide drag visual on scroll to avoid glitch
  window.onscroll = function () {
    document.querySelectorAll('.dragVisual').forEach(function (element) {
      element.style.opacity = "0";
    });
  };


  // AJAX for all site forms
  function sendFormData() {

    function sendData() {
      var XHR = new XMLHttpRequest()
      var FD = new FormData(form)
      XHR.addEventListener('load', function (event) {
        form.classList.add('inactive')
        var success = document.querySelectorAll('.success')[0]
        success.classList.remove("hidden");
      })
      XHR.addEventListener('error', function (event) {
        form.classList.add('inactive')
        var error = document.querySelectorAll('.error')[0]
        error.classList.remove("hidden");
      })
      XHR.open('POST', '#')
      XHR.send(FD)
    }

    var form = document.querySelectorAll('form')[0]
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      sendData()
    })

  }
  sendFormData();
});