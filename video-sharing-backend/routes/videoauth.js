const Video = require('../models/videoschema');

// This will create Posts
const createNewPost = async(req,res) => {
    const { title, username, videoURL, views, description, visibility, categories } = req.body;
    if(title || username || videoURL || desc || categories){
        const newVideo = new Video({
            title:title,
            username:req.userEmail,
            userImg:req.userImg,
            videoURL:videoURL,
            description:description,
            categories:categories,
            date: new Date().toLocaleDateString()
        });
        newVideo.save().then(response => {
            res.status(201).json({
                message:"Video Uploaded!"
            })
        }).catch(err => {
            res.status(500).json({
                message:"Something Went Wrong!"
            })
        })
    }else{
        res.status(400).json({
            message:"Filled all the required Fields."
        })
    }
    
}

//Here get post  

//get video by id(interview for example)
//get all video of the one who has posted(my videos)
//get all the videos to show how many videos are there in the platform

const getallPost = async(req,res) => {
    const id = req.params.id;
    let filter = {};
    if(id){
        filter = {
            _id:id
        }
    };
    await Video.find(filter).then(result => {
        res.status(200).json({
            message:"Video Fetched Successfully!",
            videos:result
        })
    }).catch(err => {
        res.status(501).json({
            message:"Unable to Fetch!1"
        })
    });
};


const getallMyPost = async(req,res) => {
    let filter = {
        username:req.userEmail,
        visibility:"Public"
    };
    await Video.find(filter).then(result => {
        res.status(200).json({
            message:"Video Fetched Successfully!",
            videos:result
        })
    }).catch(err => {
        res.status(501).json({
            message:"Unable to Fetch!!"
        })
    });
};


const updateMyPost = async(req, res) => {
    const filter = {
        _id: req.params.id,
        username:req.userEmail
    }
    const updatedContent = req.body
    Video.findOneAndUpdate(filter,updatedContent).then(result => {
        res.status(201).json({
            message: "Post Updated Succesfully!",
        })
    }).catch(err => {
        res.status(400).json({
            message: "Unable to Update Post!",
            err:err
        })
    })
}

const deleteMyPost = async (req, res) => {
    const id = req.params.id;
    Video.findOneAndDelete({_id:id}).then(result => {
        res.status(201).json({
            message:"Post Deleted Successfully!"
        })
    }).catch(err => {
        res.status(401).json({
            message:"Unable to Delete Post!"
        })
    })
};


module.exports = { createNewPost, getallPost, getallMyPost, updateMyPost, deleteMyPost}
