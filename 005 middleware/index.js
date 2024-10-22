const express = require('express');
const token = 'tiger';

const app = express();

// usually middleware is used for authentication
// Middelware created
const middleware = (req, res ,cb)=>{
    if (!req.params.key) return res.send('please provide a key');

    if (req.params.key !== token) return res.send('please provide a valid key');

    cb();
    // console.log('middelware called');

    // res.send('return') 
    // if res is given by middleware then it will return back from middleware 

    // cb(); 
    // call back initialized
}

const middel2 = (req, res, cb)=>{
    console.log('middel 2 called');
    cb();
}

const middel3 = (resq, res, cb)=>{
    console.log('middel 3 called');
    cb();
}


// Middelware called

// in this 'key' is optional
// array middleware
app.get('/:key?', [middleware, middel2, middel3], (req, res)=>{
    console.log('hello world');
    res.send('welcome tp my API');
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
}) 