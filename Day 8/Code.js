// Write a function createCounter(init) that:
// Takes an integer init as input.
// Returns an object with three methods:
// • increment()
// • decrement()
// • reset()
// increment() should:
// • Increase the current value by 1
// • Return the updated value
// decrement() should:
// • Decrease the current value by 1
// • Return the updated value
// reset() should:
// • Reset the current value back to init
// • Return the reset value

var createCounter = function(init) {
    let original = init;
    let obj = {
        increment(){
            return init+=1;
        },
        decrement(){
            return init-=1;
        },
        reset(){
            init = original;
            return init;
        }
    }
    return obj;
};

const counter = createCounter(5);

console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement()); 