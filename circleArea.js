function solve(input) {
  let type = typeof input;

  if (type === "number") {
    let area = (input * input * Math.PI).toFixed(2);
    console.log(area);
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
solve(5);
solve("name");
