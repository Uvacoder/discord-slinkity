
$(document).ready(function () {

  function setStyles(selector, styles = {}) {
    const element = document.querySelector(selector);
    for (const [key, value] of Object.entries(styles)) {
      element.style[key] = value;
    }
  }

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

  $('.siema').mouseover(function () {
    $('.dragVisual').addClass("active");
  });
  $('.siema').mouseout(function () {
    $('.dragVisual').removeClass("active");
  });

});