
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

    document.querySelector('.dragVisual').classList.add("opacity-0-important");

    document.querySelector('.siema').addEventListener("mouseenter", function (event) {
      document.querySelector('.dragVisual').classList.add("active");
      document.querySelector('.dragVisual').classList.add("opacity-0-important");
    });
    document.querySelector('.siema').addEventListener("mouseleave", function (event) {
      document.querySelector('.dragVisual').classList.remove("active");
    });

    document.querySelector('.sliderCont').addEventListener("mouseenter", function (event) {
      document.querySelector('.dragVisual').classList.add("on");
      document.addEventListener("mousemove", function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      })
    });
    document.querySelector('.sliderCont').addEventListener("mouseleave", function (event) {
      document.querySelector('.dragVisual').classList.remove("on");
    });
  }

  sliderCursor();


  // AJAX for all site forms
  document.querySelectorAll("form").addEventListener("submit", handleSubmit);

  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.querySelectorAll("form");
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "multipart/form-data" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Submitted')).catch((error) =>
      alert(error))
  }

});