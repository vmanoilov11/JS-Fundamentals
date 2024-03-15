function solve(matrix) {
  let newArr = [];
  let temp = 0;
  for (let row of matrix) {
    for (let col of row) {
      newArr.push(col);
    }
  }
  for (let num of newArr) {
    if (temp < num) {
      temp = num;
    }
  }
  console.log(temp);
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
