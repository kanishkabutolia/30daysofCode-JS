// Write a function reduce(nums, fn, init) that:
// 1.	Takes an integer array nums as input.
// 2.	Takes a reducer function fn as input.
// 3.	Takes an initial value init as input.
// 4.	Returns a single final value after processing all elements of the array.
// 5.	The reducer function fn should receive:
// a.	The accumulated value accum
// b.	The current element nums[i]
// 6.	The reduction process should follow this sequence:
// a.	val = fn(init, nums[0])
// b.	val = fn(val, nums[1])
// c.	val = fn(val, nums[2])
// d.	Continue until all elements are processed.
// 7.	If the array is empty, return init.
// 8.	Do NOT use the built-in Array.reduce() method.
// 9.	Return the final accumulated value after processing the entire array.


var reduce = function(nums, fn, init) {
    let total=init;
    for (let i=0; i <nums.length; i++){
        total=fn(total, nums[i]);
    }
    return total;
};


let num = [1,2,3,4];
let result = reduce(num,function sum(accum, curr) { 
    return accum + curr * curr; 
}, 100);
console.log(result);