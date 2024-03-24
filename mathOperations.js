function solve(num, num2, operation) {

    let result;
    switch (operation) {
        case "+" : result = num + num2; break;
        case "-" : result = num - num2; break;
        case "*" : result = num * num2; break;
        case "/" : result = num / num2; break;
        case "%" : result = num % num2; break;
        case '**': result = num**num2; break;
    }
    console.log(result);
}
solve(5, 6, "+");
