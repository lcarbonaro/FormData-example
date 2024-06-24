const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// must use multer to parse FormData
const multer  = require('multer');
const upload = multer();

const app = express();
const port = 3000;

// an example of middleware for logging requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request: ${req.url}`);
    next();
});

// middleware to enable CORS
app.use(cors());

// middleware to parse incoming JSON data in request body
// however, this will not work with FormData; use multer instead
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.send("Hello World!");
});

// need upload.none() if fields only, no files
app.post("/form", upload.none(), (req, res) => {
    let formInputs = req.body;
    console.log( JSON.stringify(formInputs) );
    res.json({ message: "Form inputs submitted successfully" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
