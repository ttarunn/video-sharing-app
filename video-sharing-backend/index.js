const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./controllers/auth');
const videoRoute = require('./controllers/video')
const dotenv = require('dotenv');
const authentication = require('./routes/authentication');
const { getallPost } = require('./routes/videoauth');

dotenv.config()

const PORT = 8080 || process.env.PORT

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error in connection", err);
  });

app.use(express.json());
app.use('/api/auth',userRoute)
app.use('/api/video/getPosts', getallPost)
app.use('/api/video/getPosts/:id', getallPost)
app.use('/api/video', authentication, videoRoute)
app.use('/', (req, res) => {
  res.send("Hello World!")
});


app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})