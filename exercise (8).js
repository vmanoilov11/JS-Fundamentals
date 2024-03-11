function solve(arr, string, string2) {
  let start = arr.indexOf(string);
  let end = arr.indexOf(string2);

  let result = arr.slice(start, end + 1);
  return (result);
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
