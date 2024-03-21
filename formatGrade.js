function solve(grade){

    let formatted = grade.toFixed(2)
    let desc;

    if(grade < 3){
        
        desc = "Fail"
        formatted = "2"
    }else if(grade >= 3 && grade < 3.50){
        desc = "Poor"
        
    }else if(grade >= 3.50 && grade < 4.50){
        desc = "Good"
        
    }else if(grade >= 4.50 && grade < 5.50){
        desc = "Very good"
        
    }else if(grade >= 5.50){
        desc = "Excellent"
    
    }

    console.log(`${desc} (${formatted})`)
}
solve(2.99)