function solve(input){

    let name = input[0]
    let ticketsAdult = Number(input[1])
    let ticketKids = Number(input[2])
    let priceAdult = Number(input[3])
    let servicePrice = Number(input[4])

    let priceKids = priceAdult * 0.30

    let total = ticketsAdult * (priceAdult + servicePrice) + ticketKids * (priceKids + servicePrice)

    let profit = total * 0.20

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)


}
solve
(["WizzAir",
"15",
"5",
"120",
"40"])
