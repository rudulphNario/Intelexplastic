//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


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








app.listen(3000, function(){
    console.log("Server starterd on port 3000.");
});