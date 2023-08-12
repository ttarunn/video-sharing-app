const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    videoURL:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    categories:{
        type: String,
        required:true,
    },
    views:{
        type:Number,
        default: 0,
    },
    visibility:{
        type:String,
        default: "Public"
    }

})
const Video = mongoose.model('videos',videoSchema);

module.exports = Video;