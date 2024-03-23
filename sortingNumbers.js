function solve(input) {
    let result = []
    input.sort((a, b) => b - a)

    while(input.length !== 0){
        result.push(input.pop())
        result.push(input.shift())
    }
    return result
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
