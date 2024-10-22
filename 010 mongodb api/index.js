const express = require('express');
require('dotenv').config();
const {MongoClient} = require('mongodb');

const app = express();
const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBCLUSTER}.${process.env.DBCODE}.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBCLUSTER}`

const client = new MongoClient();

app.listen( process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})