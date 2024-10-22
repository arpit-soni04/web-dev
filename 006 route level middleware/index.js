const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();

const m = (req, res, cb) =>{
    console.log('m called');
    cb();
}

const m1 = (req, res, cb)=>{
    console.log('m1 called');
    cb();
}

const m2 = (req, res, cb)=>{
    console.log('m2 called');
    cb();
}

// middleware used on every route
app.use (m);
router1.use (m1);
router2.use (m2);

router1.get('/r1', (req, res)=>{
    res.send('hello from r1');
})

router1.get('/r2', (req, res)=>{
    res.send('hello from r2');
})

router1.get('/r3', (req, res)=>{
    res.send('hello from r3');
})

router2.get('/r4', (req, res)=>{
    res.send('hello from r4');
})

router2.get('/r5', (req, res)=>{
    res.send('hello from r5');
})

app.use('/cat1-user', router1);
app.use('/cat2-user',router2);

app.listen (5000, ()=>{
    console.log('server is running on port 5000');
})