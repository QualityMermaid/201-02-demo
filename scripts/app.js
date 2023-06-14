"use strict"
console.log("script working?")
// confirm either returns true or false
let answer1 = confirm("Are you ready?")
console.log(answer1)

// just setting the condition to answer1 checks if answer1 is true or false
if(answer1 === true){
    console.log("Lets start!")
} else{
    console.log("Why???")
}

// boolean variables
let first = true;
let second = false;
let third = true;

// when we use the && (and) logical operator both conditions must be true. When we use || (or) logical operator one of the conditions must be true 
if( first && third){
    console.log("First and third were both true")
} else if(first || second){
    console.log("First or second were true")
}else if(third){
    console.log("Third was true")
} else {
    console.log("nothing is true")
}

let color = prompt("What is your fav colour?")

// Switch statement
// WHen js reaches a break keyword, it breaks out of the switch block
// This will stop the excution inside the switch block
// It is not neccassary to break the last case in a switch block, the block breaks at the end anyway.
// The switch expression is evaluated once
// the value of the expression is compared with the values of each case
// if there is a match then the accociated block of code is executed
// if there is no match then the default block of code is executed which is why its important to have it.
switch(color.toLocaleLowerCase()){
    case "red":
    console.log("Your fave colour is Red")
    break; // stop the condition running
    case "blue":
    console.log("I like Blue as well")
    break;
    default:
        console.log("Its an Ok colour :P")

}