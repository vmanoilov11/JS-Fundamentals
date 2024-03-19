function solve(array, magicNumber) {
  
  for (let i = 0; i < array.length ; i++) {
    let currNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let nextNum = array[j];
      let sum = currNum + nextNum;

      if (sum === magicNumber) {
        console.log(`${currNum} ${nextNum}`);
      }
    }
  }
}
solve([1, 7, 6, 2, 19, 23], 8);
