//function solve(arr1, arr2) {
  //let arr3 = [];

  //for(let index = 0; index < arr1.length; index++) {
  //  if (index % 2 === 0) {
 //     arr3.push(Number(arr1[index]) + Number(arr2[index]));
  //  } else {
 //     arr3.push(`${arr1[index]}${arr2[index]}`);
//    }
 // }
 // console.log(arr3.join(" - "));
//}
//solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);


function solve(arr1, arr2) {

  let arr3 = [];

  for(let i = 0; i < arr1.length; i++){

    if(i % 2 === 0){
      arr3.push(Number(arr1[i]) + Number(arr2[i]));

    }else{
      arr3.push(`${arr1[i]}${arr2[i]}`)
    }

  }
  console.log(arr3.join(" - "));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)