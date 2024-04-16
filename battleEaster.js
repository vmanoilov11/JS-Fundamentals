function battle(input) {
  let index = 0;
  let firstPlayerEggs = Number(input[index]);
  index++;
  let secondPlayerEggs = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  //let firstPlayerEggCounter = 0
  //let secondPlayerEggCounter = 0

  while (command !== "End of battle") {
    command = input[index];
    index++;

    if (command === "one") {
      secondPlayerEggs -= 1;
      command = input[index];
      index++;

      continue;
    } else if (command === "two") {
      firstPlayerEggs -= 1;
      command = input[index];
      index++;
      continue;
    }

    if (firstPlayerEggs === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`
      );
    } else if (secondPlayerEggs === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`
      );
    } else if (command === "End of battle") {
      console.log(`Player one has ${firstPlayerEggs} eggs left.`);
      console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
  }
}
battle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
