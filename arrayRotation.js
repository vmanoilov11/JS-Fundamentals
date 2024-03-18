function solve(arr , n ){

    for(let i=0; i< n ; i++){

        let num = arr.shift();

        arr.push(num);
    }
    console.log(arr.join(' '));
}