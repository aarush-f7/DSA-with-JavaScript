
// formula to find nth number in fabonacci series
// --- f(n) = f(n-1) + f(n-2)

function fibo(n){
    if(n==0 || n==1) return n;
    return fibo(n-1) + fibo(n-2);
}
let data = 10;
console.log(fibo(data));
