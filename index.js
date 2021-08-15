function distanceFromHqInBlocks(block) {
    let hq = 42;
    let distance = hq - block;

    if (distance < 0) {
        return (-1 * distance);
    } else {
        return distance;
    }
}

function distanceFromHqInFeet(st) {
    let hq = 42;
    let distanceInFeet = (hq - st)*264;

    if (distanceInFeet < 0) {
        return (-1 * distanceInFeet);
    } else {
        return distanceInFeet;
    }
}

function distanceTravelledInFeet(beg, end) {
    let difference = (end - beg)*264;

    let distance = difference < 0 ? -1*difference : difference
    return distance;
}

function calculatesFarePrice(start, destination) {
    let ft = distanceTravelledInFeet(start, destination);
    
    if (ft <= 400) {
        return 0;
    } else if (ft > 400 && ft <= 2000) {
        return (ft - 400)*.02;
    } else if (ft > 2000 && ft <= 2500) {
        return 25;
    } else (ft > 2500); {
        return 'cannot travel that far';
    }
}