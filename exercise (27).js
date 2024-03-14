function solve(num, num2) {
  let gcd;
  for (let i = 1; i <= num && i <= num2; i++) {
    if (num % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}
solve(15, 5);
