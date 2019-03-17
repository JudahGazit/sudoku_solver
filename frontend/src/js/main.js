function getSudokuBox(value, original) {
  var content = document.createElement('p');
  content.innerHTML = value;
  if(original) {
    content.className = 'known-box';
  }
  else {
    content.className = 'unknown-box';
  }

  var sudokuBox = document.createElement('div');
  sudokuBox.className = 'sudoku-box';
  sudokuBox.appendChild(content);
  return sudokuBox;
}

function main() {
  for(var i = 0; i < 9 * 9; i++) {
    $('#sudoku-boxes').append(getSudokuBox(6, true))
  }
}

main();
