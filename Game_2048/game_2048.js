var board;
var score = 0;
var rows = 4;
var cols = 4;

window.onload = function () {
  setGame();
};

function setGame() {
//    board = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//   ];

  board = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 8, 8],
    [4, 4, 8, 8],
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


document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
    }
})

function filterZeros(row) {
    return row.filter(num => num != 0)      // it will create new array without zeros   
}

function slide(row) {
    //[0, 2, 2, 2]
    row = filterZeros(row);        // it will remove all the zeros from the row - [2, 2, 2]

    //slide functionality
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];     //[2, 2, 2] -> [4, 0, 2]
        }
    }
    row = filterZeros(row);    // [4, 2]

    // adding zeros back to the row at end
    while (row.length < cols) {
        row.push(0);
    }                             //[4, 2, 0, 0]
    return row 
}



function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;

        for (let c = 0; c < cols; c++) {
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            let num = board[r][c];
            updatTile(tile, num);
        }
    }
}