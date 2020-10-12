let posicionx = 0;
let posicionY = 0;
window.onload = function () {
  document.addEventListener("keydown", moverJugador);
  dibujarCanvas();
};

function dibujarCanvas() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(posicionx * 50, posicionY * 50, 50, 50);
}

function moverJugador(e) {
  if (e.keyCode == 37) {
    if (posicionx > 0) {
      posicionx--;
    }
  }
  if (e.keyCode == 38) {
    if (posicionY > 0) {
      posicionY--;
    }
  }
  if (e.keyCode == 39) {
    if (posicionx < 9) {
      posicionx++;
    }
  }
  if (e.keyCode == 40) {
    if (posicionY < 9) {
      posicionY++;
    }
  }
  dibujarCanvas();
}






