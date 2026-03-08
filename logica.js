const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = ["Te quiero", "te amo","<3"];
const fontSize = 14;
const columnSpacing = fontSize * 2.8; // cada columna ocupa el doble del ancho
const columns = Math.floor(canvas.width / columnSpacing);

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.06)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00"; // color Matrix
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    //  Selecciona una palabra al azar
    const text = words[Math.floor(Math.random() * words.length)];
    ctx.fillText(text, i * columnSpacing, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 55);