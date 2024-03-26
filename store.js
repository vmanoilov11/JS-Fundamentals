function solve(input) {
  let result = {};

  for (let line of input) {
    let [product, price] = line.split(" : ");
    let letter = product[0];

    if (!result.hasOwnProperty(letter)) {
      result[letter] = {};
    }
    result[letter][product] = price;
  }
  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let letter of sorted) {
    console.log(letter);
    let productsSorted = Object.keys(result[letter]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (let products of productsSorted) {
      console.log(`  ${products}: ${result[letter][products]}`);
    }
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
