const body = document.body;
const button = document.querySelector("button");
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function changeBgcolor() {
  const randomColor_1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor_2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = `linear-gradient(.25turn,${randomColor_1},${randomColor_2})`;
}
button.addEventListener("click", changeBgcolor);
