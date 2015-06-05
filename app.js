var express = require("express");
var app = express();

var puppies = [];
var id = 1;

app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("index.ejs")
});
app.get("/puppies/new", function(req,res){
	res.render("newPuppies.ejs")
});
app.get("/puppies", function(req, res){
	var puppy = {};
	puppy.puppyName = req.query.puppyName;
	puppy.puppyAge = req.query.puppyAge;
	puppy.id = id;
	id++;
	puppies.push(puppy);
	console.log(puppies);
	res.redirect("/")
});

app.listen(3000, function(){

});