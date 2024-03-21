function solve(input) {
  let rooms = input[0].split("|"); // split removes the pipe | and give as axcess to the array
  let health = 100;
  let coins = 0;
  let isFinished = true;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" "); // split splits the whole array into pieces and give as axcess to those small arrays
    if (room[0] === "potion"){
        let currentHealth = Number(room[1]);
        if (health < 100) {
          if (health + currentHealth >= 100) {
            currentHealth = 100 - health;
            health = 100;
          } else {
            health = currentHealth;
          }
          console.log(`You healed for ${currentHealth} hp.`);
          console.log(`Current health: ${currentHealth} hp.`);
        }
     else if (room[0] === "chest") {
        console.log(`You found ${currentCoins} coins.`);
        coins += currentCoins;
      } else {
        currentMonster = room[0];
        let attack = Number(room[1]);
        health -= attack;
    }    let currentCoins = Number(room[1]);
  
        if (health > 0) {
          console.log(`You slayed ${currentMonster}. `);
        } else {
          console.log(`You died! Killed by ${currentMonster}.`);
          console.log(`Best room ${i + 1}`);
          isFinished = false;
          break;
        }
      }
    }
  
    if (isFinished) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
