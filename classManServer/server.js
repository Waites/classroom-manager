var express = require("express");
var mongoose = require("mongoose");
var app = express();
mongoose.connect("mongodb://localhost/classman");

var studentSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	absents: Number,
	tardies: Number,
	seatx: Number,
	seaty: Number
});

var student = mongoose.model("Student", studentSchema);

app.get("/", function(req, res){
	res.send("works");
});

app.get("/table", function(req, res){
	res.send("Table Data Here");
});

app.get("/seatchart", function(req, res){
	res.send("Seat Data Here");
});

app.get("*", function(req,res){
	res.send("No Data");
});

app.listen(8080, function(){
	console.log("server is up");
});