//write a program that prints all the male people's first name given a complex object
const user = [
    {
        firstName: "SUMA",
        gender: "female"
    },
    {
        firstName: "Uma",
        gender: "male"
    }
]

for(let i =0; i<user.length; i++ ){
    if(user[i]["gender"] === "male" ){          //"this also works"   (user[i].gender === "male")
        console.log( user[i]["firstName"] );
    }
}