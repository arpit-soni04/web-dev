const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
});


//single field and single file
// const upload = multer({storage: storage}).single('thumbnail')

// single field and multiple files
// const upload = multer({storage: storage}).array('thumbnail', 10)

// multiple fields
const upload = multer({storage: storage}).fields(
    [
        {name: 'thumbnail', maxCount : 1},
        {name: 'images', maxCount: 10}
    ]
)

app.post('/upload-file', upload, (req, res)=>{
    try{
        //single field and single file
        // console.log(res.file);

        // single field and multiple files
        const data = req.body;

        if(req.files){
            if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
            if(req.files.images) data.images = req.files.images.map((file)=>file.filename);
        }
        console.log(data);
        res.status(200).json({message: 'success'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})