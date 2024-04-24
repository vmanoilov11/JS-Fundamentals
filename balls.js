function balls(input) {
  AmountOfBalls = Number(input[0]);

  let pointCounter = 0;
  let ballCounter = 0;

  let redBall = 0;
  let orangeBall = 0;
  let yellowBall = 0;
  let whiteBall = 0;
  let blackBall = 0;

  for (let ball = 1; ball <= AmountOfBalls; ball++) {

    console.log(ball)

    let currentBall = input[ball];
    if (currentBall === "red") {
      pointCounter += 5;
      redBall += 1;
    } else if (currentBall === "orange") {
      pointCounter += 10;
      orangeBall += 1;
    } else if (currentBall === "yellow") {
      pointCounter += 15;
      yellowBall += 1;
    } else if (currentBall === "white") {
      pointCounter += 20;
      whiteBall += 1;
    } else if (currentBall === "black") {
      pointCounter = Math.floor(pointCounter / 2);
      blackBall += 1;
    } else {
      ballCounter += 1;
    }
  }
  console.log(`Total points: ${pointCounter}`);
  console.log(`Points from red balls: ${redBall}`);
  console.log(`Points from orange balls: ${orangeBall}`);
  console.log(`Points from yellow balls: ${yellowBall}`);
  console.log(`Points from white balls: ${whiteBall}`);
  console.log(`Other colors picked: ${ballCounter}`);
  console.log(`Divides from black balls: ${blackBall}`);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
