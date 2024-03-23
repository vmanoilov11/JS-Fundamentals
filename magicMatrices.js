function solve(matrix) {
  let sum = 0;
  for (let row of matrix) {
    for (let col of row) {
      sum += col;
    }
  }
  if (sum % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
