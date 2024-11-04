const { Products } = require("../models/product");
const fs = require('fs');
const path = require('path');


const insertProduct = async (req, res) => {
    try {
        const data = req.body;

        if (req.files) {
            if (req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
            if (req.files.images) data.images = req.files.images.map((file) => file.originalname);
        }

        const dataTosave = new Products(data);

        const response = await dataTosave.save();

        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

const readProduct = async (req, res) => {
    try {
        const response = await Products.find();

        const filePath = `${req.protocol}://${req.get('host')}/api-files/`;

        res.status(200).json({ message: 'success', data: response, filePath })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
}

const updateProduct = async (req, res) => {
    console.log(req.params);
    try {
        const preData = await Products.findById(req.params._id);
        console.log(path.join(__dirname, 'uploads', 'products', preData.thumbnail));
        console.log(fs.existsSync(`uploads/products/${preData.thumbnail}`));

        if (!preData) return res.status(404).json({ message: 'Data not found' });

        const data = req.body;

        if (req.files) {
            if (req.files.thumbnail)
                data.thumbnail = req.files.thumbnail[0].filename;

                if (fs.existsSync(`uploads/products/${preData.thumbnail}`)) {
                    fs.unlinkSync(`uploads/products/${preData.thumbnail}`);
            }

            if (req.files.images)
                data.images = req.files.images.map((file) => file.originalname);

            preData.images.map((file)=>{
                if (fs.existsSync(`uploads/products/${file}`)) {
                    fs.unlinkSync(`uploads/products/${file}`);
            }
            })
                
        }

        console.log(req.body);
        console.log(req.files);
        const response = await Products.updateOne(
            req.params,
            {
                $set: data
            });
        res.status(200).json({ messagr: 'success', data: response });
    }
    catch (error) {
        console.log(error);
        if (error.kind === 'ObjectId') return res.status(400).json({ message: 'invalid Id' });
        res.status(500).json({ message: 'internal server error' });
    }
}

module.exports = {
    insertProduct,
    readProduct,
    updateProduct
}