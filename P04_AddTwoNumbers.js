//Add Two Numbers

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("Enter first number : ", function(input1){
    const a = Number(input1);

    r1.question("Enter second number : ", function(input2){
        const b = Number(input2);
        const sum = a + b;
        console.log("Sum:"+ sum);
        r1.close();
    });
});