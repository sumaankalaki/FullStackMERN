/*
(1).why languages?=>
RAM- Random access memory
SSD-

----------------------------------------
(2).Interpreted vs compiled languages=>
JS is Interpreted language
Compiled language:
    1.First need to compile , then need to run
    2.usually don't compile if there is an error in the code
    3.Example - C++, Java, Rust, Golang
Interpreted Languages :
    1.Usually go line by line
    2.can run partially if te error comes later
    3.Example- javascript, Python
Please sign up on "repl.it"

------------------------------------------------------
(3).why js>> other language in some usages
Browsers can only understand HTML/ CSS/JS(not technically true)
Thanks to Node.js, Javascript can also be used for "Backend development"

------------------------------------------------------------------
(4).strict vs dynamic languages
let number =5;  //variable initially holds  a number
number = "Hello";   //variable now holds a string
Benefits - Can move fast.

---------------------------------------------------------
(5).single threaded nature of js
Total number of cores 8
Js can only use oe of these core at t time
it is single threaded
this is why it is considered to be a bad language for scalable systems
there is way to make it use all cores of your machine - cluster model
More practically , Js runs line by line and only one line at a time.

-------------------------------------------------------
(6).simple primitives in js ( number, string , boolean)
    Variables ( let, var , const)
    Data types - strings, numbers and boolens
    if/else
    Loops - For Loop
    1.write the program to greet a person given their first and last name
    2.write a program that greets a person based on their gender.(if else)
    3. write a program that counts from 0-1000 and prints ( for loop

------------------------------------------------------------
(7).complex primitive in js ( array object)
    1. write a program prints all the even numbers in array
    2. write  a program to print the biggest number in array
    3. write a program that prints all the male people's first name given a complex object
        const user = [
            {
               firstName: "SUMA"
               gender: "female"
            },
            {
               firstName: "Uma"
               gender: "male"
            }
        ]
        for(let i =0; i<user.length; i++ {
            if(user[i]["gender"] == "male" ){
                console.log( user[i]["firstName"] );
            }
        }

    4. write a program that reverse all the element of an array.
------------------------------------------------------------------------------------

(8).function in javascript
    1.Abstract out logic in your program
    2.Take arguments as an input
    3.Return a value as an output
    4.You can think of them as an independent program that is supposed to do something given an input
    5.Function can take other function as input - this will confuse you (Callbacks)
    Home-work:
    1. write a function that finds the sum of two numbers
    2. write another function that display this result in a pretty format
            function sum(a, b){
               let sumValue = a+b;
               return sumValue;
            }
    3. write another function that takes this sum and prints it in passive tense

----------------------------------------------------------------------------------------
(9).practise problem-solving

------------------------------------------------------------------------------------------
(10).callback function, Event loop, callback queue, Asynchronous programming

Synchronous: All the code running line by line.
Asynchronous:Asynchronous function in programming are those that allow a program to start a potentially
             long running operation and continue executing other tasks without waiting for that operation to complete
             this is particularly important in environments like web browsers or Node.js, where waiting for an operation to finish
             (like fetching data from a server or reading a large file) could make the application unresponsive.
             HomeWork::
             1.Creat a counter in javascript (count down from 30 to 0)          //setInterval(()=>{}, 1000);

                    let counter = 30;
                    const countdown = setInterval(() => {
                        console.log(counter);
                        counter--;
                        if (counter < 0) {
                            clearInterval(countdown);
                            console.log("Countdown finished!");
                        }
                    }, 1000); // Update every 1000ms (1 second)

             2.calculate the time it takes between a setTimeOut call and the inner function actually running

                    const startTime = Date.now();           // Capture the start time
                    setTimeout(() => {
                        const endTime = Date.now();         // Capture the time at callback execution
                        const timeTaken = endTime - startTime;      // Calculate time difference in milliseconds
                        console.log(`Time taken for setTimeout callback to run: ${timeTaken} ms`);
                    }, 2000); // Delay of 2000ms (2 seconds)

             3. create terminal clock( HH.MM.SS ).

                    function displayClock() {
                        const now = new Date();
                        const hours = String(now.getHours()).padStart(2, '0');
                        const minutes = String(now.getMinutes()).padStart(2, '0');
                        const seconds = String(now.getSeconds()).padStart(2, '0');

                        // Clear the console and display the clock
                        console.clear();
                        console.log(`${hours}:${minutes}:${seconds}`);
                    }
                    // Update the clock every second
                    setInterval(displayClock, 1000);

-----------------------------------------------------------------------------------------------------------------------------
callback hell and promises





*/