function solve(input) {
  let result = {};
  let n = input.shift();

  for (let i = 0; i < n; i++) {
    let data = input.shift().split("|");
    let piece = data[0];
    let composer = data[1];
    let key = data[2];

    result[piece] = {
      composer,
      key,
    };
  }
  while (input[0] !== "Stop") {
    let line = input.shift();
    let tokens = line.split("|");
    let command = tokens[0];

    switch (command) {
      case "Add":
        let newPiece = tokens[1];
        let newComposer = tokens[2];
        let newKey = tokens[3];

        if (result.hasOwnProperty(newPiece) === false) {
          result[newPiece] = {};
          result[newPiece].composer = newComposer;
          result[newPiece].key = newKey;

          console.log(
            `${newPiece} by ${newComposer} in ${newKey} added to the collection!`
          );
          break
        } else {
          console.log(`${newPiece} is already in the collection!`);
          break
        }

      case "Remove":
        let pieceToRemove = tokens[1];
        if (result.hasOwnProperty(pieceToRemove) === false) {
          console.log(
            `Invalid operation! ${pieceToRemove} does not exist in the collection.`
          );
          break
        } else {
          delete result[pieceToRemove];
          console.log(`Successfully removed ${pieceToRemove}!`);
          break
        }
      case "ChangeKey":
          let pieceToChange = tokens[1];
          let keyToChange = tokens[2];
          if(result.hasOwnProperty(pieceToChange)){
              result[pieceToChange].key = keyToChange
              console.log(`Changed the key of ${pieceToChange} to ${keyToChange}!`) 
          }else{
              console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`)
          }
    }
  }
  let entries = Object.entries(result)
  for(let [name , props] of entries){
      console.log(`${name} -> Composer: ${props.composer}, Key: ${props.key}`)

  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
