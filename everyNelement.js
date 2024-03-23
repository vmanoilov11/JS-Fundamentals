function solve(input, n) {
  let result = [];
  for (let i = 0; i < input.length; i += n) {
    result.push(input[i]);
  }
  return result;
}
solve(["1", "2", "3", "4", "5"], 6);
