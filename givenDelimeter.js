function solve(input, delimeter) {
  let result = [];
  for (let element of input) {
      result.push(element)
  }
  console.log(result.join(delimeter));
}
solve(["One", "Two", "Three", "Four", "Five"], "-");
