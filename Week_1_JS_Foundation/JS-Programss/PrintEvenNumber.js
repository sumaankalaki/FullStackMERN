//write a program prints all the even numbers in array

function printEvenNumber(arr){
    for(let i=0;i<arr.length; i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]);
        }
    }
}

printEvenNumber([20,1,4,2,5,7,33,32,43]);