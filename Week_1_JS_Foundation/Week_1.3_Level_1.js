/*STRING METHODS

// String: length, indexOf(),    lastIndexOf(),  str.slice(start, end),
            substring(start, end),   replace(target, replacement),
            str.split(separator), trim(), toUpperCase(), toLowerCase(), concat() ,etc.

str= "Hello World World"
//Length :          str.length
// indexOf:         str.indexOf("World");
//lastIndexOf:      str.lastIndexOf("World");
//slice:            str.slice(0, 5);
// substring:       str.substring(0, 5);
// replace:         str.replace("World", "javascript");
//split:             //A string can be converted to an array with the split()
                    text.split(",")    // Split on commas
                    text.split(" ")    // Split on spaces
                    text.split("|")    // Split on pipe
//trim:             str.trim();     //The trim() method removes whitespace from both sides of a string:
//concat:           concat() joins two or more strings:
                    let text1 = "Hello";
                    let text2 = "World";
                    let text3 = text1.concat(" ", text2);

slice(start, end)
        slice() extracts a part of a string and returns the extracted part in a new string.
        The method takes 2 parameters: start position, and end position (end not included).
        str.slice(7, 13);

substring(start, end)
        substring() is similar to slice().
        The difference is that start and end values less than 0 are treated as 0 in substring().

substr(start, length)

substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.
str.substr(7, 6);

 */



/* NUMBERS*/
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");



/*ARRAY*/
// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()
// Initialize an example array
let arr = [1, 2, 3, 4, 5];

// push() - Adds one or more elements to the end of the array
arr.push(6);

// pop() - Removes the last element from the array
arr.pop();

// shift() - Removes the first element from the array
arr.shift();

// unshift() - Adds one or more elements to the beginning of the array
arr.unshift(0);

// splice() - Adds/removes elements at a specified index
arr.splice(2, 1, 'a'); // Removes 1 element at index 2, and adds 'a'

// slice() - Returns a shallow copy of a portion of the array
let sliced = arr.slice(1, 3); // [2, 3]

// concat() - Combines two or more arrays
let combined = arr.concat([6, 7]);

// forEach() - Executes a function for each array element
arr.forEach(el => console.log(el));

// map() - Creates a new array with results of calling a function on each element
let mapped = arr.map(el => el * 2);

// filter() - Creates a new array with elements that pass a test
let filtered = arr.filter(el => el > 2);

// reduce() - Reduces the array to a single value
let sum = arr.reduce((acc, el) => acc + el, 0);

// find() - Returns the first element that satisfies a condition
let found = arr.find(el => el > 3);

// sort() - Sorts the elements in place
arr.sort((a, b) => a - b);


// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);

    arr.shift();
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);

    arr.unshift(element);
    console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
    console.log("Original Array:", arr);

    arr.forEach(function(item, index) {
        console.log(item, index);
    });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
    console.log("Original Array:", arr);

    let newArr = arr.map(function(item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
    console.log("Original Array:", arr);

    let newArr = arr.filter(function(item) {
        return item > 3;
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
    console.log("Original Array:", arr);

    let found = arr.find(function(item) {
        return item > 3;
    });
    console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);

    arr.sort(function(a, b) {
        return a - b;
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
