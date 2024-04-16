function solve(input){

    let numJoinery = Number(input[0])
    let typeJoinery = input[1]
    let deliveryType = input[2]
    let price = 0



    if(typeJoinery === "90X130"){
        price =  numJoinery * 110
        if(numJoinery >= 30 && numJoinery < 60){
            price *= 0.95
        }else if(numJoinery >= 60){
            price *= 0.92
        }
    }else if(typeJoinery === "100X150"){
        price =  numJoinery * 140
        if(numJoinery >= 40 && numJoinery < 80){
            price *= 0.94
        }else if(numJoinery >= 80){
            price *= 0.90
        }
 

    }else if(typeJoinery === "130X180"){
        price =  numJoinery * 190
        if(numJoinery >= 20 && numJoinery < 50){
            price *= 0.93
        }else if(numJoinery >= 50){
            price *= 0.88
        }


    }else if(typeJoinery === "200X300"){
        price =  numJoinery * 250
        if(numJoinery >= 25 && numJoinery < 50){
            price *= 0.91
        }else if(numJoinery >= 60){
            price *= 0.86
        }

    }

    if(deliveryType === "With delivery"){
        price += 60
    }else{
        price = price 
    }

    if(numJoinery > 99){
        price *= 0.96
    }
    if(numJoinery < 10){

        console.log("Invalid order")

    }else if(numJoinery > 10){
        
        console.log(`${price.toFixed(2)} BGN`)
    }
    
}
solve(["2",
"130X180",
"With delivery"])