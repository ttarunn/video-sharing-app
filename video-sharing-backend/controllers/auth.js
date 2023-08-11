const router =require("express").Router();

const {userRegister,userLogin} = require('../routes/authorization')

router.post("/register",userRegister);

router.post("/login",userLogin);

module.exports = router;