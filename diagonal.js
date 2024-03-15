function solve(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let column = row[j];
      result.push(column);
    }
  }
  console.log(result);
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
