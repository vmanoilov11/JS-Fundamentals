function oldBooks(input) {
  let favBook = input[0];

  let index = 1;

  let currentBook = input[index];
  index++;

  let counter = 0;

  while (currentBook !== favBook) {
    if (currentBook === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${counter} books.`);
      break;
    }

    currentBook = input[index];
    counter++;
    index++;

    if (currentBook === favBook) {
      console.log(`You checked ${counter} books and found it.`);
    }
  }
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
