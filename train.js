function solve(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let command of arr) {
    let currentCommand = command.split(" ");

    if (currentCommand[0] === "Add") {
      wagons.push(currentCommand[1]);
    } else {
        for(let i = 0; i < wagons.length; i++) {
            if(wagons[i] + Number(currentCommand[0]) <= maxCapacity){
                wagons[i] += Number(currentCommand[0])
                break
            }
        }
    }
  
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
