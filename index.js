const returnFirstTwoDrivers = function (array){
var newArray=array.slice(0,2);
return newArray;
}

const returnLastTwoDrivers = function (array){
    var newArray=array.slice(2,4);
    return newArray;
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(){return(fare*fare)}
}

function fareDoubler(fare){
    let newFare=2*fare;
    return newFare;
}

function fareTripler(fare){
    let newFare=3*fare;
    return newFare;
}

function selectDifferentDrivers(array,fun){
    return fun(array);
}