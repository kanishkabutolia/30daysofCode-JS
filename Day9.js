// Write a program to:
// 1.	Print the first n Fibonacci numbers.

let Fibonacci = x =>{
    let f0=0;
    let f1=1;
    console.log(f0 +"\n" + f1);
    for (let i=2; i<=x; i++){
        let next =f0 +f1;
        console.log(next);
        f0=f1;
        f1=next;
    }
}
Fibonacci(10);


