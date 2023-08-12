const Video = require('../models/videoschema');

// This will create Posts
const createNewPost = async(req,res) => {
    try{
        req.body.videoURL = req.file.path

        const newVideo = new Video({...req.body}); 


        await newVideo.save();

        res.status(201).json({message:'video uploaded succesfully'})
    }
     catch (error){
        res.status(500).json({error:'Failed to upload the video'})
    }
}

//Here get post  

//get video by id(interview for example)
//get all video of the one who has posted(my videos)
//get all the videos to show how many videos are there in the platform



const getsinglePost = async (req,res) => {
    const id = req.params.id;
    try{
        const video = await Video.findOne({_id:id});
    }
    catch(error){
        res.status(500).json({error:"failed to get the video"})
    }
}


const getallPost = async(req,res) => {
    try{
        const allVideos = await Video.find({});
        res.status(200).json(allVideos);
    }
    catch(err){
        res.status(500).json(err)
    }
}





