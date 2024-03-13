function solve(arr) {
  arr.sort((a, b) => a.localeCompare(b)) &&
    arr.sort((a, b) => a.length - b.length);
  console.log(arr.join("\n"));
}
solve(["alpha", "beta", "gamma"]);
