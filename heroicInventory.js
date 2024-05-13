function solve(input) {
  let result = [];

  for (let element of input) {
    let [name, level, items] = element.split(" / ");
    level = +level;
    if (items === undefined) {
      items = [];
    } else {
      items = items.split(", ")
    }

    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1",
]);
