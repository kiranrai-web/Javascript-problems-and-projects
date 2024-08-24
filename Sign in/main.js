const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login");
const info = require("./model/info");
 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//middleware
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// MongoDB Connection
// mongoose.connect("mongodb://localhost:27017/login", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log("MongoDB connected");
// }).catch(err => {
//     console.error("MongoDB connection error:", err);
// });

app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render('index', {foo: 'FOO'})
})

app.post("/getdata", async(req, res)=>{
    try {
            const email = req.body.email;
            const password = req.body.password;

            const login = info.create({
                email: email,
                password: password
            })
            const logged = await login.save();
            res.status(201).render(index);
            res.send('Data saved successfully!');
            console.log(`${email} and ${password}`);
        
    } catch (error) {
        res.status(400).send('Error saving data.');
    }
})

app.listen(port,()=>{
    console.log(`${port} is working`)
})  