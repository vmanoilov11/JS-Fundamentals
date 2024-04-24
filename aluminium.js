function aluminium(input) {

    let joineryNumber = Number(input[0])
    let joineryType = input[1]
    let deliveryType = input[2]
    let price = 0
    let totalprice = 0

    if (joineryType === "90X130") {
        price = 110
        totalprice = joineryNumber * price
        if (joineryNumber > 30 && joineryNumber < 60) {
            totalprice = totalprice - totalprice * 0.05
        } else if (joineryNumber > 60) {
            totalprice = totalprice - totalprice * 0.08
        }
    } else if (joineryType === "100X150") {
        price = 140
        totalprice = joineryNumber * price
        if (joineryNumber > 40 && joineryNumber < 80) {
            totalprice = totalprice - totalprice * 0.05
        } else if (joineryNumber > 80) {
            totalprice = totalprice - totalprice * 0.10
        }
    } else if (joineryType === "130X180") {
        price = 190
        totalprice = joineryNumber * price
        if (joineryNumber > 20 && joineryNumber < 50) {
            totalprice = totalprice - totalprice * 0.07
        } else if (joineryNumber > 50) {
            totalprice = totalprice - totalprice * 0.12
        }
    } else if (joineryType === "200X300") {
        price = 250
        totalprice = joineryNumber * price
        if (joineryNumber > 25 && joineryNumber < 50) {
            totalprice = totalprice - totalprice * 0.09
        } else if (joineryNumber > 50) {
            totalprice = totalprice - totalprice* 0.14
            
        }console.log(`${totalprice.toFixed(2)} BGN`) 
   }   }
aluminium(["2",
    "130X180",
    "With delivery"])


