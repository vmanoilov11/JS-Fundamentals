function fruitEnergy(input){

    let fruit = input[0]
    let size = input[1]
    let amount = Number(input[2])
    let price = 0

    if(fruit === "Watermelon"){
        if(size === "small"){
            price = (56 * amount)* 2

        }else if(size=== "big"){
            price = (28.70 * amount) * 5
        }
    }else if(fruit === "Mango"){
        if(size === "small"){
            price = (36.66 * amount) * 2

        }else if(size=== "big"){
            price = (19.60 * amount) * 5
        }
    }else if(fruit === "Pineapple"){
        if(size === "small"){
            price = (42.10 * amount) * 2

        }else if(size === "big"){
            price = (24.80 * amount) * 5
        }
        

    }else if(fruit === "Raspberry"){
        if(size === "small"){
            price = 20 * amount

        }else if(size=== "big"){
            price = 15.20 * amount
        }

    }
    if(price >= 400 && price <= 1000){
        price = price * 0.85
    }else if(price > 1000){
        price = price * 0.50
    }

    console.log(`${price.toFixed(2)} lv.`)
    


}
fruitEnergy(["Raspberry",
"small",
"50"])
