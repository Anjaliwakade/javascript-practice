//Truthy and Falsy Values
//1. Falsy values


// Boolean(false);     // false
// Boolean(0);         // false
// Boolean("");        // false
// Boolean(null);      // false
// Boolean(undefined); // false
// Boolean(NaN);       // false


// //2. Truthy values
// Boolean("Hello"); // true
// Boolean("0");     // true
// Boolean(10);      // true
// Boolean(-1);      // true
// Boolean([]);      // true
// Boolean({});      // true



console.log(Boolean(""));//false
console.log(Boolean("false")); // true
console.log(Boolean(0));//false
console.log(Boolean([]));//true
console.log(Boolean(null));//false

let value = [];

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}