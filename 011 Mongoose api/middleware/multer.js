const multer = require('multer');
const path = require('path');

const storage = (foldername)=> multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `uploads/${foldername}`);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})

// creating multer
const uploads = (foldername)=> multer({ storage: storage(foldername)}).fields([
    {
        name: 'thumbnail', maxCount: 1
    },
    {
        name: 'images', maxCount: 10
    }
])

module.exports = uploads;