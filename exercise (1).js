function solve(input) {
  input = input.toString();
  isTrue = true;
  let sum = 0;

  for (let i = 0; i < input.length - 1; i++) {

    if(input[i] !== input[i + 1]) {
        isTrue = false;
    }

    sum += Number(input[i])
  }
  sum+= Number(input[input.length - 1])
  console.log(isTrue);
  console.log(sum);
}
solve(2222222);
