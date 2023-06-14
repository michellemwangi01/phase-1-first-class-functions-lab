// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (drivers){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function (drivers){
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}

let selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers
    ]

console.log(selectingDrivers[1](drivers));


function createFareMultiplier(fare){

    return function fareMultiplier(){
        return (Math.pow(fare,2));
    }
}

console.log(createFareMultiplier(5)())

const fareDoubler = function (fare){
    return fare*2;
}

const fareTripler = function (fare){
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
    
     return returnLastTwoDrivers(arrayOfDrivers);
     
}