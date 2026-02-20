// Write a program to:
// 1.	Calculate the sum of first n natural numbers using a loop.

let num=10;
let sum = 0
for (let i=1; i<=num; i++){
    console.log(i);
    sum += i;
}
console.log(`Sum of first ${num} natural number is ${sum}`);