const express = require('express');
require('dotenv').config();
const path = require('path');
require('./db/config');
const productRouter = require('./routers/productRouter');

const app = express();

app.use('/api-files', express.static(path.join(__dirname, 'uploads')));

app.use ('/products', productRouter);

// connecting to database
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);    
});

