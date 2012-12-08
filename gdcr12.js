var rules = {
  0: 0
, 1: 0
, 2: 1
, 3: 1
, 4: 0
, 5: 0
, 6: 0
, 7: 0
, 8: 0
};

var boardSize = 5;

var board = [];

for(var i = 0; i < boardSize; i++) {
  var arr = [];
  for(var j = 0; j < boardSize; j++) {
    arr.push(Math.round(Math.random()));
  }

  board.push(arr);
}

function nextGen() {
  console.log(board);
  var currentGen = [];

  for(var i = 0; i < boardSize; i++) {
    var currentLine = [];
    for(var j = 0; j < boardSize; j++) {
      var count = 0;
      for(var x = -1; x <= 1; x++) {
        for(var y = -1; y <= 1; y++) {
          var x_val = parseInt(("" + (i + x)).replace("-1", "" + (boardSize - 1)), 10) % boardSize
            , y_val = parseInt(("" + (j + y)).replace("-1", "" + (boardSize - 1)), 10) % boardSize;

          count += board[x_val][y_val];
        }
      }
      count -= board[i][j];
      currentLine.push(rules[count]);
    }
    currentGen.push(currentLine);
  }

  board = currentGen;

  setTimeout(nextGen, 1000);
}

setTimeout(nextGen, 1000);
