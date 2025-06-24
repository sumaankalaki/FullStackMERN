//ASYNC FUNCTIONS, promises and async await.

/*
Async function vs sync function
what  does synchronous mean? :
Together , one after the other , sequential only ont thing is happening at a time.

Asynchronous mean?
Opposite of synchronous Happens in parts,  multiple thing are context switching with each other.

Human brain and body is single threaded :
1. we can only do one thing at a time
2.but we can context switch between task. or  we can delegate tasks to other people

http://latentflip.com/loupe  to visualize call back and syn function

 */
// What are common async function?
// 1.setTimeout
// 2.fs.read - to read file from your filesystem

    const fs = require("fs");
    fs.readFile("a.txt", "utf-8", function(err, data){
        console.log(data);
    })
    console.log("Hi their");

// 3. fetch data some data from an API Endpoint.



//----------------------------------------------------------------------------------------------------------------------
//Promises its just syntactic suger still uses callbacks under the hood.
const fs =require('fs');
function kiratsReadFile(){
    return new Promise(function (resolve){
        fs.readFile("a.txt", "utf-8", function (err, data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data)
}

kiratsReadFile().then(onDone);

//----------------------------------------------------------------------------------------------------------------------
//async await

function kiratAsyncFuncion(){
    let p = new Promise(function (resolve){
        setTimeout(function (){
            resolve("hi their")
        },3000)
    });
    return p;
}

async function main(){           //any function that wants to use await, needs to be async
    let value =  await kiratAsyncFuncion()      //rather than using the .then syntax, we add await before and get the final value in the variable
    console.log(value);
}



















