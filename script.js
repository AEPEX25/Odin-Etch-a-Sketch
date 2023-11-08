// Elements
const board = document.querySelector(".board");
const btnBoardSize = document.querySelector(".btn-board-size");
const btnRandomColor = document.querySelector(".btn-random-color");
const btnReset = document.querySelector(".reset");
let color = "black";

// Random Color

let randomColor = function () {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  let r = randomBetween(0, 255);
  let g = randomBetween(0, 255);
  let b = randomBetween(0, 255);
  let rgb = `rgb(${r},${g},${b})`;
  return rgb;
};

// Board Size

function boardSize(size) {
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", squareColor);
    square.style.backgroundColor = "white";
    board.appendChild(square);
  }
}

boardSize(16);

btnBoardSize.addEventListener("click", function () {
  let size = prompt("What board size do you want?");
  if (size < 2 || size > 100) {
    alert("Max square number surpassed");
  } else {
    boardSize(size);
  }
});

function squareColor() {
  if (color == "random") {
    this.style.backgroundColor = randomColor();
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

btnReset.addEventListener("click", function () {
  boardSize(16);
  changeColor("black");
});
