const Video = require('../models/videoschema');

// This will create Posts
const createNewPost = async(req,res) => {
    const { name, videoURL, description, visibility, categories, duration, thumbnail } = req.body;
    if(name && videoURL && description && categories && duration && thumbnail){
        const newVideo = new Video({
            title:name,
            username:req.name,
            userEmail:req.userEmail,
            userImg:req.userImg,
            videoURL:videoURL,
            description:description,
            categories:categories,
            date: new Date().toLocaleDateString(),
            duration:duration,
            thumbnail:thumbnail,
            visibility:visibility
        });
        newVideo.save().then(response => {
            res.status(201).json({
                message:"Video Uploaded!",
                data:response
            })
        }).catch(err => {
            res.status(500).json({
                message:"Something Went Wrong!",
                err:err
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
    let filter = {visibility:"Public"};
    if(id){
        filter = {
            _id:id,
            visibility:"Public"
        }
    };
    await Video.find(filter).then(result => {
        res.status(200).json({
            message:"Video Fetched Successfully!",
            videos:result
        })
    }).catch(err => {
        res.status(501).json({
            message:"Unable to Fetch!",
            err:err
        })
    });
};


const getallMyPost = async(req,res) => {
    let filter = {
        username:req.userEmail,
    };
    await Video.find(filter).then(result => {
        res.status(200).json({
            message:"Video Fetched Successfully!",
            videos:result
        })
    }).catch(err => {
        res.status(500).json({
            message:"Unable to Fetch!!",
            err:err
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
    const filter = {
        _id: req.params.id,
        username:req.userEmail
    }
    Video.findOneAndDelete(filter).then(result => {
        res.status(201).json({
            message:"Post Deleted Successfully!"
        })
    }).catch(err => {
        res.status(401).json({
            message:"Unable to Delete Post!",
            err:err
        })
    })
};


module.exports = { createNewPost, getallPost, getallMyPost, updateMyPost, deleteMyPost}

