function solve(number, command1, command2, command3, command4, command5) {
  let arr = [command1, command2, command3, command4, command5];

  for (let command of arr) {
    if (command === "chop") {
      number = number / 2;
      console.log(number);
    } else if (command === "dice") {
      number = Math.sqrt(number);
      console.log(number);
    } else if (command === "spice") {
      number++;
      console.log(number);
    } else if (command === "bake") {
      number *= 3;
      console.log(number);
    } else if (command === "fillet") {
      number -= number * 0.2;
      console.log(number);
    }
  }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
