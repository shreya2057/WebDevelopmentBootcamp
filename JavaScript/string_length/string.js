var message = prompt("Enter your message");
var totalCharLength = 280;
var messageLength = message.length;
var remainingLength = totalCharLength - messageLength;

alert("You have written" + " " + messageLength + " " + "characters," + " " + "You have left" + " " + remainingLength + " " + "characters");