function solve(arr) {
  let result = [];
  let final;

  for (let num of arr) {
    result.push(num);

    final = result
      .sort((a, b) => a - b)
      .slice(0, 2)
      .join(" ");
  }
  console.log(final);
}
solve([30, 15, 50, 5]);
