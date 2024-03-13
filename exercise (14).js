function solve(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  let counter = 0;

  for (let element of arr) {
    counter++;
    console.log(`${counter}.${element}`);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
