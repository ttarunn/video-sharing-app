const express = require('express');
const app = express();

const PORT = 8080 || process.env.PORT

app.use('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})