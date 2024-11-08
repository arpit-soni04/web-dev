const express = require('express');
const allRoutes = require('./src/app');
require('dotenv').config();
require('./src/db/config')

const app = express();

app.use('/api', allRoutes); 

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})