function solve(arr) {
    let sorted = arr.sort((a, b) => b - a).slice(0, arr.length/ 2);
    console.log(sorted.join(' '));
}
solve([3, 19, 14, 7, 2, 19, 6]);
