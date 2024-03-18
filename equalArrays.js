function solve(arr1, arr2) {
  let sum = 0;
  let areIdentical = true;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);

    for (let num of arr1) {
      num = Number(num);
      sum += num;
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
      }

    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areIdentical = false;
      break;
    } else if (arr1[i] === arr2[i]) {
      console.log(`Arrays are identical. Sum: ${sum}`);
      areIdentical = true;
      break
    }
  }
  
}
solve(["10", "20", "30"], ["10", "20", "30"]);
solve(['1'], ['10'])
