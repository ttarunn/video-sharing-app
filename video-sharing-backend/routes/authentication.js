const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const verifiedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userEmail = verifiedData.email
        req.userImg = verifiedData.userImg
        req.name = verifiedData.name
        next()
    } catch (error) {
        res.status(401).json({
            errorDesc: "Authentication failed!",
            error: error
        })
    }
};