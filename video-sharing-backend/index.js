const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const userRoute = require('./controllers/auth');
const videoRoute = require('./controllers/video')
const dotenv = require('dotenv');
const authentication = require('./routes/authentication');
const bodyParser = require('body-parser')
const { getallPost, updateViews } = require('./routes/videoauth');

dotenv.config()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error in connection", err);
  });

app.use(express.json());
app.use('/api/auth', userRoute)
app.use('/api/video/getAllPosts', getallPost)
app.use('/api/video/getPost/:id', getallPost)
app.use("/api/video/updateViews/:id", updateViews)
app.use('/api/video', authentication, videoRoute)
app.use('/', (req, res) => {
  res.send("Hello World!")
});


app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})