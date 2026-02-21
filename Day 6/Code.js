// Write a function that:
// 1.	Takes a number as input.
// 2.	Returns the reversed digits.

function Rev_Num(x){
    let reverse=0;
    
    while(x>0){
        let digit = x%10;
        reverse=reverse*10 +digit;
        x=Math.floor(x/10);
    }
    return reverse;
}

let reverse= Rev_Num(1234);
console.log(reverse);
