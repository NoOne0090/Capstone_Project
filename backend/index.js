const express = require('express');
const cors = require('cors');
const makeModel = require('./models/capProject');

// connecting to mongodb
require('./mongodb/connect');


const app = express();

// Craeting Middleware
app.use(express.json());
app.use(cors());


// monogodb connection
// mongoose.connect("mongodb://127.0.0.1:27017/CapProject");
// mongoose.connect("mongodb://localhost:27017/CapProject");

app.get('/', (req, res) => {
    res.send('<h1> Backend has been created successfully for freelnacify website! </h1>');
})

app.get('/allLogins',async (req,res)=>{
    try{
        const limit = parseInt(req.query.limit)
        const storeLogin = await makeModel.find({}).limit(limit)
        res.json({ storeLogin })
    }
    catch(err){
        console.log('The error is', err)
    }
})

// app.post('/register', (req, res)=>{
//     makeModel.create(req.body)
//     .then(data => res.json(data))
//     .catch(err => res.json(err))
// })

// app.post('/loginCheck', (req, res)=>{
//     const {email, password} = req.body;
//     makeModel.findOne({email: email})
//     .then((user) => {
//         if(user){
//             if(user.password === password){
//                 res.json("Success");
//             }
//             else{
//                 res.json("The password is incorrect!")
//             }
//         }
//         else{
//             res.json("No record found!");
//         }
//     })
// })

// SignUp Process
app.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Create the user
    makeModel.create({ firstName, lastName, email, password })
        .then(data => res.json({
            message: "User registered successfully!",
            user: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password 
            }
        }))
        .catch(err => res.json({ error: "Error registering user", details: err }));
});


// Login Process
app.post('/loginCheck', (req, res) => {
    const { email, password } = req.body;

    makeModel.findOne({ email })
        .then(user => {
            console.log(user);
            if (user) {
                if (user.password === password) {
                    res.json({
                        message: "Login successfull!",
                        user: {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            password: user.password 
                        }
                    });
                } else {
                    res.json({ message: "The password is incorrect!" });
                }
            } else {
                res.json({ message: "No record found!" });
            }
        })
        .catch(err => res.json({ error: "An error occurred", details: err }));
});



const port = process.env.PORT || 3500;
app.listen(port, ()=>{
    console.log(`The app listening on port http://localhost:${port}`);
})


// To install jwt
// npm i jsonwebtoken
// const jwt = require('jsonwebtoken');


// To test in postman
// go to body ---> raw

// For Registering
/*
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "12345678"
}
*/

// For Login
/*
{
    "email": "john.doe@example.com",
    "password": "12345678"
}
*/