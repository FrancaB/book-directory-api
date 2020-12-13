const express = require ('express');

const app = express();

//Routes
app.get('/', (req,res)=> {
    res.send('This is the homepage');
});

//Listen to server
app.listen(5000, ()=> {
    console.log("App is working.")
});
