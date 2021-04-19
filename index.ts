const LENGTH = 4;
let app = document.getElementById("app");
let button = document.createElement("button");
const { width, height } = window.screen;
let tries = 0,
  hits = 0;
const updateScore = () => document.title = `${hits} / ${tries}  (${tries === 0 ? 0 : Math.round(hits / tries * 100)}%)`;
let cellWidth = width / LENGTH ** LENGTH;
button.style.width = Math.max(18 - cellWidth, 0) + width / LENGTH ** LENGTH + "px";
let cellHeight = height / LENGTH ** LENGTH;
button.style.height = Math.max(18 - cellHeight, 0) + height / LENGTH ** LENGTH + "px";
function draw() {
  button.style.left = Math.round(Math.random() * width) + "px";
  button.style.top = Math.round(Math.random() * height) + "px";
  updateScore();
}
draw();
let buttonClick = false;
button.addEventListener("click", e => {
  tries += 1;
  hits += 1;
  draw();
  buttonClick = true;
});
app.addEventListener("click", e => {
  if (buttonClick) {
    buttonClick = false;
    return;
  }
  tries += 1;
  app.style.backgroundColor = "black";
  setTimeout(() => {
    app.style.backgroundColor = "white";
  }, 100);
  updateScore();
});
app.appendChild(button);
