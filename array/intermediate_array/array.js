

var output = [];

var count = 1;

function fizzbuzz(){


    if(count%3 === 0 && count%5 === 0){
        output.push("fizzbuzz");
        console.log(output);
    }

    else if(count%3 === 0){
        output.push("fizz");
        console.log(output);
    }

    else if(count%5 === 0){
        output.push("buzz");
        console.log(output);
    }

    else{
        output.push(count);
        console.log(output);
    }
    
    count++;
}