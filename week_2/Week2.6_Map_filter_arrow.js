// map, filter, arrow fns

//given an array , give me multiple of 2 value for each
//MAP
const input = [1,2,3,4,5];
const ans = input.map( function (val){
     return val * 2;
} );
console.log("MapAnsArray:",ans);

//shortcut way using callback function
input.map(val=> val*2);



//Filter the value even numbers
const newArr = [1,2,3,4,5,6,7,8,9,10,11,12];
const FilterArray =newArr.filter( function (n){
    if (n%2===0){
        return true;
    }else {
        return false;
    }
    // you can simply , if-else by one line  " return n % 2 === 0;" it returns tru or false
});
console.log("FilterArray:",FilterArray);


//Arrow function
arr.filter((val)=>{ return val%2 === 0});
arr.map((val)=> { return val * 2 });