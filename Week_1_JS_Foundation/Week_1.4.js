//Loop , Function, Callback Functions.


function square(val){
    return val * val;
}

function qube(a){
    return a * a * a;
}

function sumOfSomething(a, b, fn){
    const value1 = fn(a);
    const value2 = fn(b);
    return value1 + value2;
}

sumOfSomething(2, 3, square);
sumOfSomething(2, 3,  qube);