
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


  // AJAX for all site forms

  document.querySelectorAll('.ntlForm').forEach(function (form) {
    form.addEventListener('submit', (event) => {

      let formData = new FormData(form)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "multipart/form-data" },
        body: new URLSearchParams(formData).toString()
      }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))

    });
  });


});