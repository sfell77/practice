// Grab data file
const trails = require('./trails.json');

const { resolve } = require('path');
const { rejects } = require('assert');

// let CAR = "subaru";
// const CAR2 = "honda";

function getTrailDistance(trail) {
  const TrailPromise = new Promise((resolve, rejects) => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      resolve(foundTrail)
    } else {
      rejects(new Error('Trail not found!'))
    }
  });
  return TrailPromise;
}

// Do the thing (expected vs. error)
getTrailDistance('North Country')
  .then(foundTrail => {      
    console.log(`The ${foundTrail.nickname
    } is ${foundTrail.miles
    } miles long!`);
    // console.log(CAR.length);
    // console.log(CAR2);
})
  .catch((error) => {
    console.log('Trail not found!', error);
})