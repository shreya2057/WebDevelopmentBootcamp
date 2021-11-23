
var yourName = prompt("Enter your name:");
var nameLength = yourName.length;

var firstLetter = yourName.slice(0,1);
var remainingLetter = yourName.slice(1,nameLength);

var storedName = firstLetter.toUpperCase() + remainingLetter.toLowerCase();

alert("Hello!," + " " + storedName );
