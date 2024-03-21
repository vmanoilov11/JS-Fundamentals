function solve(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    isBiggest = true;

    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];

      if (curr <= next) {
        isBiggest = false;
        break;
      }
    }

    if (isBiggest) {
      arr2.push(curr);
    }
  }

  console.log(arr2.join(' '))
}
solve([14, 24, 3, 19, 15, 17]);
