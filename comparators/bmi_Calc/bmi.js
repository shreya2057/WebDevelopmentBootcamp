
function bmiCalc(weight, height){
    var bmi = weight/(Math.pow(height,2));
    return bmi;
}

var height = prompt("Enter your height");
var weight =  prompt("Enter your weight");

var bmi = bmiCalc(weight, height);

if(bmi<18.5){
    alert("Your bmi is" + " " + bmi + " " + "You are underweight");
}

if(bmi>18.5 && bmi<24.9){
    alert("Your bmi is" + " " + bmi + " " + "You are normal weight");
}

else{
    alert("Your bmi is" + " " + bmi + " " + "You are overweight");
}

