//write the program to greet a person given their first and last name


function greetPerson(firstname, lastname){
    const fullname = `${firstname}${lastname}`;
    console.log(`Hello, ${fullname}`);
}

greetPerson("suma", "ankalaki");


//write a program that counts from 0-1000 and prints ( for loop

function printCount(num){
    for(let i=0;i<num;i++){
        console.log(i);
    }
}

printCount(1000);