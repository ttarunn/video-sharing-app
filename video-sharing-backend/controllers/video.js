const router =require("express").Router();

const {createNewPost,getallPost, getallMyPost} = require('../routes/videoauth');


router.post("/upload", createNewPost)
router.get("/",getallPost);
router.get("/id/:id",getallPost);
router.get("/myvideos",getallMyPost);



module.exports = router;