//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const port = 3000;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", function(req, res){
    res.render("home");
});



app.get("/quote", function(req, res){
    res.render("quote");
});








app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server is running on port 3000");
  });