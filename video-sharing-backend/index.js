const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./controllers/auth');
const videoRoute = require('./controllers/video')

const PORT = 8080 || process.env.PORT


const url ="mongodb+srv://achyuthnarayan789:SCQl5SPiU23aQIzY@cluster0.oiinphw.mongodb.net/video-sharing?retryWrites=true&w=majority";
mongoose.connect(url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error in connection", err);
  });

app.use(express.json());
app.use('/api/auth',userRoute)
//app.use('/api/video',videoRoute)
app.use('/', (req, res) => {
  res.send("Hello World!")
});


app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})