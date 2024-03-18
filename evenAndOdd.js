function solve(arr){

    let sumEven = 0
    let sumOdd = 0

    for(let i=0; i<arr.length; i++){
        arr[i] = Number(arr[i])

    }
    for(let num of arr){

        if(num % 2 === 0){
            sumEven+= num
        }else{
            sumOdd+= num
        }
    }

    console.log(sumEven - sumOdd)
}
solve[1,2,3,4,5,6]