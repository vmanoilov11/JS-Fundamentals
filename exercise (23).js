function solve(input) {
  if (typeof input === "number") {
    let circle = (Math.PI * input * input).toFixed(2);
    console.log(circle);
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}
solve(5);
solve(null);
