var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");

// config
mongoose.connect("mongodb://localhost/classman");


// Models
var Student = mongoose.model("Student", {
	fname: String,
	lname: String,
	absents: Number,
	tardies: Number,
	seatx: Number,
	seaty: Number
});


app.get("/", function(req, res){
	res.send("works");
});

app.get("/table", function(req, res){
	console.log("parsing students table view")
	Student.find(function(err,students){
		if(err){
			res.send(err)
		}
		res.json(students);
	});
	
});

app.get("/seatchart", function(req, res){
		console.log("parsing seating chart")
	Student.find(function(err,students){
		if(err){
			res.send(err)
		}
		res.json(students);
	});
});

app.get("*", function(req,res){
	res.send("No Data");
});

app.listen(8080, function(){
	console.log("server is up");
});