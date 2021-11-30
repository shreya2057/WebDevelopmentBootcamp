
var guestList = ["Shreya", "Shreejan", "Anjali", "Kanchan"];

var yourName = prompt("Enter your name");
var giveName = yourName.slice(0,1).toUpperCase() + yourName.slice(1,yourName.length).toLowerCase(); 

if(guestList.includes(giveName)){
    alert("Welcome");
}else{
    alert("Try again next time");
}