//write  a program to print the biggest number in array

function printBiggestNumber(arr){
    let bigNum= arr[0];
    for(let i=1;i,arr.length; i++){
        if(bigNum < arr[i]){
            bigNum = arr[i];
        }
    }
}

printBiggestNumber([20,23,23,12,12,57,346])