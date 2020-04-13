const LENGTH = 4;
let canvas: HTMLCanvasElement = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'black';
const { width, height } = window.screen;
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
let tries = 0,
  hits = 0;
const updateScore = () =>
  (document.title = `${hits} / ${tries}  (${
    tries === 0 ? 0 : Math.round((hits / tries) * 100)
  }%)`);
let x, y, w, h;
function draw() {
  ctx.clearRect(0, 0, width, height);
  x = (Math.random() * width);
  y = (Math.random() * height);
  w = width / LENGTH ** LENGTH;
  h = height / LENGTH ** LENGTH;
  ctx.fillRect(x, y, w, h);
  updateScore();
}
draw();
let buttonClick = false;
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log("x: " + x + " y: " + y);
  return [x, y];
}
canvas.addEventListener("mousedown", function (e) {
  let [clickX, clickY] = getCursorPosition(canvas, e);
  if (clickX > x && clickX < x + w && clickY > y && clickY < y + h) {
    hits += 1;
    draw();
  }
  tries += 1;
  updateScore();
});
