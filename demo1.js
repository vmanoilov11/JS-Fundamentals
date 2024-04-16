function solve(input){

    let paintBoxes = Number(input[0])
    let rolls =Number(input[1])
    let glovesOnePiece = Number(input[2])
    let oneBrush = Number(input[3])

    let paintBox = 21.50
    let roll = 5.20
    let gloves = Math.ceil(rolls * 0.35)
    let brushes = Math.floor(0.48 * paintBoxes)

    let paint = paintBoxes * paintBox
    let priceRolls = rolls * roll
    let priceGloves = (glovesOnePiece * gloves)
    let brushesPrice = (oneBrush * brushes)

    let total = paint + priceGloves + priceRolls + brushesPrice 

    let delivery = total / 15

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)

}
solve([1,
    3,
    10.9,
    1])