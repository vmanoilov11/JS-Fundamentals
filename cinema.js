function solve(input){

    let index = 0
    let nTabs = Number(input[index++])
    let salary = Number(input[index++])

    for(let i = 0; i < nTabs; i++){
        let currentTab = input[index]
        index++

        if(currentTab === "Facebook"){
            salary -= 150
        }else if(currentTab === "Instagram"){
            salary -= 100
        }else if(currentTab === "Reddit"){
            salary -=50
        }else{
            salary = salary
        }
    }

    if(salary <= 0){
        console.log("You have lost your salary." )
    }else{
        console.log(salary)
    }


}
solve(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

