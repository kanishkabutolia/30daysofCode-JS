// Write a function expect(val) that:
// 1.	Takes any value val as input.
// 2.	Returns an object with two methods:
// •	toBe(value)
// •	notToBe(value)
// 3.	toBe(value) should:
// •	Return true if val === value
// •	Otherwise throw an error "Not Equal"
// 4.	notToBe(value) should:
// •	Return true if val !== value
// •    Otherwise throw an error "Equal"


var expect = function(val) {
    obj={
        toBe(val1){
            if (val===val1){
                return true;
            } else{
                throw new Error ("Not Equal");
            }
        },
        notToBe(val1){
            if (val!== val1){
                return true;
            } else{
                throw new Error ("Equal");
            }
        }
    }
    return obj;
};

console.log(expect(5).toBe(5)); 
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));