// Elements
const board = document.querySelector(".board");
const btnBoardSize = document.querySelector(".btn-board-size");

// Board Size

function boardSize(size) {
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
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

btnBoardSize.addEventListener("click", function () {
  let size = prompt("What board size do you want?");
  if (size < 2 || size > 100) {
    alert("Max square number surpassed");
  } else {
    boardSize(size);
  }
});
