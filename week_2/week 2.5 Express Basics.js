const express = require('express')
const bodyParser = require("body-parser");
const port = 3000
const app = express();

app.use(bodyParser.json());

app.post('/backend-api/conversion', (req,res)=>{
    const message = req.body.message;
    res.json({
        output: "2+2 = 4"
    })
})
app.get('/', function (req, res){
    res.send("hello World!")
})
app.listen(port, ()=>{
    console.log(`Example app kisteningn on port ${port}`)
});

//-------------------------------------------------------------------------------------------------------------------------------------------

//fs is a library that gives u high level constructs to do  filesystem ( readr a file, write to  file);
//
/*
EXPRESS AND HTTP WITH REAL WORLD EXAMPLE WITH POSTMAN
 */
/*
1. HOW DO I CREATE HTTP SERVER?
ans = Express
 */

const express = require('express')
function calculateSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans = ans+i;
    }
    return ans;
}

// localhost:3000/?n=30
//435

const app = express();
app.get("/", function (req, res){
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("Hi your Ans is:", ans.toString());
})



//------------------------------------------------------------------------------------------------------------------------------------------
//Here's a basic setup for an Express server with GET, POST, PUT, and DELETE routes.
// This server will handle CRUD operations for a hypothetical resource, such as "users."
// npm install express
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET route - fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET route - fetch a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST route - create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT route - update an existing user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex].name = req.body.name;
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE route - delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



//HOMWERAKKK  Refer : https://github.com/100xdevs-cohort-2/assignments/tree/master/week-2/02-nodejs/solutions
