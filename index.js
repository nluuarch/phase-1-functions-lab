// Code your solution in this file!
const hqBlock = 42
const blockInFeet = 264
let someValue;

function distanceFromHqInBlocks(distanceTraveled) {
  if (distanceTraveled > 42) {
    return distanceTraveled - hqBlock;
  } else if (distanceTraveled < 42) {
    return hqBlock - distanceTraveled;    
  }
};

function distanceFromHqInFeet(distanceTraveled) {
  if (distanceTraveled > 42) {
    return (distanceTraveled - hqBlock) * blockInFeet;
  } else if (distanceTraveled < 42) {
    return (hqBlock - distanceTraveled) * blockInFeet;
  }
};

function distanceTravelledInFeet(startBlock, endBlock) {
  return (Math.abs(startBlock - endBlock)) * blockInFeet
}

function calculatesFarePrice(startBlock, endBlock){
  if (Math.abs(startBlock - endBlock) * blockInFeet < 400) {
    return(0);
  } else if (Math.abs(startBlock - endBlock) * blockInFeet >= 400 && (Math.abs(startBlock - endBlock) * blockInFeet <= 2000)) {
    return((Math.abs(startBlock - endBlock) * blockInFeet)-400) * 0.02;
  } else if (Math.abs(startBlock - endBlock) * blockInFeet > 2000 && (Math.abs(startBlock - endBlock) * blockInFeet <= 2500)) {
    return(25);
  } else if (Math.abs(startBlock - endBlock) * blockInFeet > 2500) {
  } return ('cannot travel that far');
};



