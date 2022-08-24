// Code your solution in this file!
const returnFirstTwoDrivers = n => {
    let y = n.slice(0,2)
    return y
}

const returnLastTwoDrivers = n => {
    let y = n.slice(-2)
    return y
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n){
    return function(f){
        return f * n
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler  = createFareMultiplier(3)
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}