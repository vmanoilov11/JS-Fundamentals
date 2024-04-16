function solve(input){

    let index = 0
    let numBalls = Number(input[index])
    index++

    let points = 0
    let ballCounter = 0
    let redCounter = 0
    let orangeCounter = 0
    let yellowCounter = 0
    let whiteCounter = 0
    let blackCounter = 0 


    for(let balls = 1; balls <= numBalls; balls++ ){
        let color = input[index++]

        if(color=== "red"){
            points += 5
            redCounter++
        }else if(color === "orange"){
            points += 10
            orangeCounter++
        }else if(color === "yellow"){
            points+= 15
            yellowCounter++

        }else if(color === "white"){
            points+=20
            whiteCounter++

        }else if(color === "black"){
            points = points / 2
            blackCounter++

        }else{
            ballCounter++
        }

    }

    console.log(`Total points: ${Math.floor(points)}`)
    console.log(`Red balls: ${redCounter}`)
    console.log(`Orange balls: ${orangeCounter}`)
    console.log(`Yellow balls: ${yellowCounter}`)
    console.log(`White balls: ${whiteCounter}`)
    console.log(`Other colors picked: ${ballCounter}`)
    console.log(`Divides from black balls: ${blackCounter}`)

}
solve(["3",
"white",
"black",
"pink"])