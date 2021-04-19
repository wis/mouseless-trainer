import "./style.css";

const LENGTH = 4;
let app = document.getElementById("app")!;
let button = document.createElement("button");
const { width, height } = window.screen;
let tries = 0,
  hits = 0;
const updateScore = () =>
  (document.title = `${hits} / ${tries}  (${
    tries === 0 ? 0 : Math.round((hits / tries) * 100)
  }%)`);
let cellWidth = width / LENGTH ** LENGTH;
let buttonWidth = 
  Math.max(18 - cellWidth, 0) + width / LENGTH ** LENGTH;
button.style.width = buttonWidth + "px";
let cellHeight = height / LENGTH ** LENGTH;
let buttonHeight = 
  Math.max(18 - cellHeight, 0) + height / LENGTH ** LENGTH;
button.style.height = buttonHeight + "px";
function draw() {
  button.style.left = Math.round(Math.random() * (width - buttonWidth)) + "px";
  button.style.top = Math.round(Math.random() * (height - buttonHeight)) + "px";
  updateScore();
}
draw();
let buttonClick = false;
button.addEventListener("click", () => {
  tries += 1;
  hits += 1;
  draw();
  buttonClick = true;
});
app.addEventListener("click", () => {
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
