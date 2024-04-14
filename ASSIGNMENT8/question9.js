let N = 10; 
let fib = []; 

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < N; i++) {
    let c = a + b; 
    fib.push(c); 
    console.log(c); 
    a = b; 
    b = c; 
}
