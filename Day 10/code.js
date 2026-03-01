// Write a function map(arr, fn) that:
// 1.	Takes an integer array arr as input.
// 2.	Takes a function fn as input.
// 3.	Returns a new array.
// 4.	For each element in the array, the new value should be calculated as:
// •	returnedArray[i] = fn(arr[i], i)
// 5.	Do NOT use the built-in Array.map() method.
// 6.	The function fn should receive:
// •	The current element arr[i]
// •	The current index i
// 7.	The function should return the transformed array after applying fn to every element.


var map = function(arr, fn) {
    let newarr=[];
    for(let i=0; i < arr.length; i++){
        newarr[i]= fn(arr[i],i);
    }
    return newarr;
};

let arr = [10, 20, 30, 40];
let result = map(arr,function plusone(n) { 
    return n + 1; 
});
console.log(result);

