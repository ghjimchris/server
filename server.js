 //jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));git

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1+num2;

    console.log(req.body);
    res.send("The results of the calculation is " + results);
});

app.get("/about", (req, res) => {
 res.send("akwaaba");
});

app.listen(3000, function() {
    console.log("server started on port 3000");
});