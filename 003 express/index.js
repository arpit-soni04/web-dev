const express = require('express');
const path = require('path');

const app = express();

const filepath = path.join(__dirname, 'public', 'hello.html');

app.get('/greet/:name', (req, res)=>{

    console.log(req.query);
    console.log(req.params);
    res.send(`hello ${req.params.name}`);
});

app.get('/file', (req, res)=>{
    // res.send('hello world post')

    res.sendFile(filepath)
})

app.listen(5200, ()=>{
    console.log('server is running on port 5200');
});