// write a program that reverse all the element of an array

function reverseArray(arr){
    // using inbuilt function of javascript
    // return arr.reverse();

    //using or loop
    const reversed = [];
    for(let i=0; i<arr.length; i++){
        reversed.push(arr[i]);
    }
    return reversed;


}

reverseArray([23,21,1,896,34,34]);