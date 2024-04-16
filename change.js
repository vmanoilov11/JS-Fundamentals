function change(input){

    let levToDollars = 1.76
    let levToEuro = 1.95
    let bitcoins = Number(input[0])
    let chineseValue = Number(input[1])
    let commission = Number(input[2])

    let bitcoinPriceInLev = bitcoins * 1168
    let chinesePriceInDollars = chineseValue * 0.15
    let dollar = levToDollars
    

    let totalWithoutCommInLev = bitcoinPriceInLev + (chinesePriceInDollars) * dollar
    let totalWithoutCommInEuro = totalWithoutCommInLev / levToEuro

    let total = totalWithoutCommInEuro *((100 - commission)/100)


console.log(total.toFixed(2))
}
change(["1",
"5",
"5"])




