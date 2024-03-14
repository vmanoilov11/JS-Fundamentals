function solve(num, num2, symbol) {
    let result;
    switch (symbol){
        case "+" : result = num + num2; break;
        case  '-' : result = num - num2; break;
        case '*' : result = num * num2; break;
        case  '/' : result = num  / num2; break;
        case "%" : result = num % num2; break;
        case "**" : result = num ** num2; break;
    }
    console.log(result);

}
solve(5, 6, "+");
solve(3, 5.5, "*");
