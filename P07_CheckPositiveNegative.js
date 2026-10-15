/*

Problem statement
Write a JavaScript program that checks whether a given number is positive, negative, or zero.
*/


const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number : "));

if(num > 0)
{
    console.log("Positive number");
}
else if(num < 0)
{
    console.log("Negative number");

}
else{
    console.log("Zero");
}