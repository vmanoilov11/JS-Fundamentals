function solve(num){

    let numbers = "" 

    for(let i = 1; i <= num; i++){

        for(let x = 0; x < i; x++){       
            
            numbers  += `${i} `
        }
        
        numbers += ` \n`
        
    }
    console.log(numbers)


}
solve(5)