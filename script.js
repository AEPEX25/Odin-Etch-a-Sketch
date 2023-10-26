"use strict";

// Elements
const board = document.querySelector(".board");

// Board Size

function boardSize(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

boardSize(32);
