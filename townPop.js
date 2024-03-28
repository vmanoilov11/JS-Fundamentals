function solve(arr){

    let result = {};
    for(let i=0; i<arr.length; i++){
        let tokens = arr[i].split("<->")
        let town = tokens[0]
        let population = +tokens[1]
    
    if (!result.hasOwnProperty(town)) {
        result[town] = 0
      }
      result[town] += Number(population)
    }

    for(let info in result){
          console.log(`${info}: ${result[info]}`)
    }
      
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)