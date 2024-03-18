function solve(arr) {
  let newArr = arr;
  let sum = 0;
  let newArrSum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];

    if (newArr[i] % 2 == 0) {
      newArr[i] += i;
    } else {
      newArr[i] -= i;
    }
    newArrSum += newArr[i];
  }
  console.log(newArr);
  console.log(sum);
  console.log(newArrSum);
}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
