function solve(speed, area) {
  let limit;
  let type;
  let difference;
  if (area === "motorway") {
    limit = 130;
    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
      difference = speed - limit;
      if (difference <= 20) {
        type = "speeding";
      } else if (difference <= 40) {
        type = "excessive speeding";
      } else if (difference > 40) {
        type = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${type}`
      );
    }
  } else if (area === "interstate") {
    limit = 90;
    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
      difference = speed - limit;
      if (difference <= 20) {
        type = "speeding";
      } else if (difference <= 40) {
        type = "excessive speeding";
      } else if (difference > 40) {
        type = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${type}`
      );
    }
  } else if (area === "city") {
    limit = 50;
    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
      difference = speed - limit;
      if (difference <= 20) {
        type = "speeding";
      } else if (difference <= 40) {
        type = "excessive speeding";
      } else if (difference > 40) {
        type = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${type}`
      );
    }
  } else if (area === "residential") {
    limit = 20;
    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
      difference = speed - limit;
      if (difference <= 20) {
        type = "speeding";
      } else if (difference <= 40) {
        type = "excessive speeding";
      } else if (difference > 40) {
        type = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${type}`
      );
    }
  }
}
solve(20, "residential");
