const LENGTH = 4;
const svgNS = "http://www.w3.org/2000/svg";
let app = document.getElementById("app");
let button = document.createElementNS(svgNS,"rect"); 
button.setAttributeNS(null,"id","button");
const { width, height } = window.screen;
let tries = 0,
  hits = 0;
const updateScore = () => document.title = `${hits} / ${tries}  (${tries === 0 ? 0 : Math.round(hits / tries * 100)}%)`;
function draw() {
  button.style.left = (Math.random() * width).toString() + "px";
  button.style.top = (Math.random() * height).toString() + "px";
  button.setAttributeNS(null,"x", (Math.random() * width).toString());
  button.setAttributeNS(null,"y", (Math.random() * height).toString());
  button.setAttributeNS(null,"width", width / LENGTH ** LENGTH);
  button.setAttributeNS(null,"height",height / LENGTH ** LENGTH);
  button.style.width = width / LENGTH ** LENGTH + "px";
  button.style.height = height / LENGTH ** LENGTH + "px";
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
