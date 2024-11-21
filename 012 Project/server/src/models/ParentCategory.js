const mongoose = require('mongoose');

const categoryScheama = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: String,
    status:{
        type: Boolean,
        default: true
    },
    created_at: Date,
    updated_at: Date,
    deleted_at: {
        type: Date,
        default: null
    }
});

categoryScheama.pre('save', function(){
    this.created_at= Date();
});

categoryScheama.pre('insertOne', function(){
    this.created_at= Date();
});

categoryScheama.pre('updateOne', function(){
    this.updated_at= Date();
});

categoryScheama.pre('updateOne', function(){
    this.updated_at= Date();
});

categoryScheama.pre('findByIdAndUpdate', function(){
    this.updated_at= Date();
});

const ParentCategory = mongoose.model('parent_categories', categoryScheama);

module.exports = ParentCategory;