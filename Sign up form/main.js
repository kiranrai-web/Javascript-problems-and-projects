const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/SignIn");
const info = require("./model/info");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req,res)=>{
    res.render('index', {foo: 'FOO'});
})

app.post("/getLogin", async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const login = info.create({
            email: email,
            password: password
        })

        await login.save;
        res.status(201).send('Data saved successfully!')
        console.log(`Email: ${email}`);
    }catch (error){  
        console.error('Error saving data:', error);
        res.status(400).send('Error Saving data');
    }
})

app.listen(port,()=>{
    console.log(`${port} is working!`);
})