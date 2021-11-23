
function bmiCalculator(weight, height){
    return Math.floor(weight/(height*height));
}

var weight = prompt("Enter your weight in kg");
var height = prompt("Enter your height in meter")
var bmi = bmiCalculator(weight, height);

alert("Your BMI is" + " " + bmi);