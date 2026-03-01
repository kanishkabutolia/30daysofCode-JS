// Write a function filter(arr, fn) that:
// 1.	Takes an integer array arr as input.
// 2.	Takes a function fn as input.
// 3.	Returns a new array called filteredArr.
// 4.	The function fn should receive:
// a.	The current element arr[i]
// b.	The current index i (optional parameter)
// 5.	For each element in the array, evaluate:
// a.	fn(arr[i], i)
// 6.	Add the element to filteredArr only if the result of fn(arr[i], i) is truthy.
// 7.	Do NOT use the built-in Array.filter() method.
// 8.	Return the final filtered array after checking all elements.


var filter = function(arr, fn) {
   let filterArr=[];
    for(let i=0; i < arr.length; i++){
        if (fn(arr[i], i)){
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
};
let arr = [5, 20, 30, 44];
let result = filter(arr,function greaterThan10(n) { 
    return n > 10; 
});
console.log(result);

