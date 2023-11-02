// Elements
const board = document.querySelector(".board");

// Board Size

function boardSize(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    board.appendChild(square);
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
}

boardSize(16);
