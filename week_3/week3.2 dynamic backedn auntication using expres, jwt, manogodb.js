/*
Fetch, Authentication and DATABASES
 */

//Fetch-------------------------------------------------------------------------------------------------
async function getAnimalData() {
        const response = await fetch("https://fakerapi.it/api/v1/persons");
        const finalData = await response.json();
        console.log(finalData);
}


//Authentication---------------------------------------------------------------------------------------------
/*
Project= Let people signup to your website only allow signed in users to see people ( create dummy people list)
Before get into authentication lets understand :
1.Hashing -- hash password and store in DB , 1way
2.Encryption -- 2 way encrypt and decrypt
3.Json web tokens(JWT) --  [jwt.io]
4.Local storage
 */


