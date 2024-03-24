function solve(num, num2) {
    let result= 0
  let n = Number(num);
  let m = Number(num2);

  for(let i = n; i <= m; i++) {
    result += i
  }

  console.log(result)
}
solve('-8', '20');
