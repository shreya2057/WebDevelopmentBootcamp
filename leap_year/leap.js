

// var year = prompt("Enter the year");

var year = 2024;

leapYear(year)

function leapYear(year){

    if(year % 4 === 0){
        if(year % 100 !== 0){
            alert("Leap year");
        }else{
            if(year % 400 === 0){
                alert("It is a leap year");
            }else{
                alert("Not a leap year");
            }
        }
    }else{
        alert("Not a leap year");
    }

}