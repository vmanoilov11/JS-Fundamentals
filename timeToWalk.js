function solve(steps, footprint, kmH){

    let roadToSchool = steps * footprint;
    let mSec = kmH * 3.6;
    let time = roadToSchool / mSec;
    let rest = Math.floor(roadToSchool / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHour = Math.floor(time / 3600);

    console.log(
        (timeHour < 10 ? "0" : "") +
     timeHour +
     ":" + 
    (timeMin + rest < 10 ? "0" : "") +
    (timeMin + rest) + 
    ":" +
    (timeSec < 10 ? "0" : "") + timeSec);

}
solve(2564, 0.70, 5.5)
