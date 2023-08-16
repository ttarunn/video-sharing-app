const router =require("express").Router();

const {createNewPost,deleteMyPost, getallMyPost, updateMyPost} = require('../routes/videoauth');


router.post("/upload", createNewPost)
router.get("/myvideos",getallMyPost);
router.get("/myvideo/:id",getallMyPost);
router.put("/updatePost/:id", updateMyPost)
router.delete('/delete/:id', deleteMyPost)



module.exports = router;