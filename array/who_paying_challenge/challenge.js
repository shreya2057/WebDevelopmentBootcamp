

function whosPaying(names){

    var random = Math.floor(Math.random()*names.length);

    return names[random];

}


var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

var person = whosPaying(names);

alert(person + " is paying today");