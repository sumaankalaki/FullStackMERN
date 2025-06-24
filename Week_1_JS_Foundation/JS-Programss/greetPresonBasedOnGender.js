function greetPerson(firstname, lastname, gender){

    const fullname = `${firstname}${lastname}`;
    if(gender ==="female"){
        console.log(`Hello MS., ${fullname}`);
    } else if(gender=== "male"){
        console.log(`Hello MR., ${fullname}`);
    } else {
        console.log(`Hello ${fullname}!`);
    }
}

greetPerson("suma", "Anakalaki", "female");
greetPerson("Raja", "Anakalaki", "male");