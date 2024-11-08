const mongoose = require('mongoose');
const { registerAdmin } = require('../controllers/admin-panel/adminController');

const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBCLUSTER}.${process.env.DBCODE}.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBCLUSTER}`;

mongoose.connect(url)
.then(()=>{
    console.log('connected to db!');
    registerAdmin();
})
.catch((error)=>{
    console.error('unable to connect', error);
});