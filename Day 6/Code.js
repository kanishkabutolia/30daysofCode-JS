// Write a function createCounter(n) that:
// •	Accepts an integer n.
// •	Returns a function.
// •	The first call returns n.
// •	Each next call returns previous value + 1.
// •	Maintains state using closures.

function createCounter(n){
    return function () {
        return n++;
    }
}
let counter=createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());