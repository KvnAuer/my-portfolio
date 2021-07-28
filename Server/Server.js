const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("../public/index.js")
})





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})