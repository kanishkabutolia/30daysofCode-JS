// Write a program to:
// 1.	Check if a number is even or odd using if-else.
// 2.	Do the same using the ternary operator.

let num = 5;
if (num%2===0){
    console.log(`The number ${num} is EVEN`);
}
else {
    console.log(`The number ${num} is ODD`);
}

let result = (num%2===0)? "EVEN" : "ODD";
console.log(`The number ${num} is ${result} (Using Ternary Operator)`)