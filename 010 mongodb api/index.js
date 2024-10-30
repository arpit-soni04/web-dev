const express = require('express');
require('dotenv').config();
const {MongoClient} = require('mongodb');
const multer = require('multer');
const path = require('path');

const app = express();
const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBCLUSTER}.${process.env.DBCODE}.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBCLUSTER}`

const client = new MongoClient(url);

const config = async()=>{
    await client.connect();
    const db = client.db(process.env.DBNAME);

    return db;
}

const uploads = multer({storge: multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})}).fields([
    {
        name: 'thumbnail', maxCount:1
    },
    {
        name: 'images', maxCount: 10
    }
])

app.post('/insert-data', uploads, (req, res)=>{
    const data = req.body;

    if(req.files){
        if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
        if(req.files.images) data.images = req.files.images.map((img) => img.filename);

        console.log(data);
        res.send('hello');
    }
});


app.listen( process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})