var board;
var score = 0;
var rows = 4;
var cols = 4;

window.onload = function () {
  setGame();
};

function setGame() {
  let board = [
    [0, 2, 0, 0],
    [0, 8, 0, 0],
    [0, 32, 0, 0],
    [0, 2048, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("div"); // creating div element for tile
      tile.id = r.toString() + "-" + c.toString(); // creating unique id for every tile
      let num = board[r][c];
      updatTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }
}

function updatTile(tile, num) {
  tile.innerText = ""; // clearing the inner text of the tile
  tile.classList.value = ""; // clearing the classlist initially
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num;
    if (num <= 8192) {
      tile.classList.add("n" + num.toString());
    } else {
      tile.classList.add("n8192");
    }
  }
}
