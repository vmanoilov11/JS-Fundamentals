function solve(arr, a , b){

    let start = arr.indexOf(a)
    let end = arr.indexOf(b)

    let result = arr.slice(start, end + 1)
    return result

}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'

)