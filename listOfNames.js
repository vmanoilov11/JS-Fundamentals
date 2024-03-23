function solve(input) {
  let sorted = input.sort((a, b) => a.localeCompare(b));
  let counter = 0;

  for (let name of sorted) {
    counter++;
    console.log(`${counter}.${name}`);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
