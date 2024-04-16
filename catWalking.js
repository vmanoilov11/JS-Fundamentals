function cat(input){

    let minOfWalkDaily = Number(input[0])
    let dailyWalks = Number(input[1])
    let caloriesADay = Number(input[2])
    let caloriesFor1Min = 5

    let totalWalkInMin = minOfWalkDaily * dailyWalks
    let totalCalories = totalWalkInMin * caloriesFor1Min

    if(totalCalories >= (caloriesADay * 0.50)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)

    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }
}
cat(["40",
"2",
"300"])



