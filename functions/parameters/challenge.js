var yourAge = prompt("Enter your Age");
getLifeInWeeks(yourAge);

function getLifeInWeeks(yourAge){

    var aliveAge = 90;
    var remainingAge = aliveAge - yourAge;

    var days = 365;
    var weeks = 52;
    var months = 12;

    var daysRemaining = remainingAge * days;
    var weeksRemaining = remainingAge * weeks;
    var monthsRemaining = remainingAge * months;

    console.log("You have," + " " + daysRemaining + " " + "days," + " " + weeksRemaining + " " + "weeks and" + " " + monthsRemaining + " " + "months left");

}