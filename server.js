var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	School = require('./api/model/info_school_model.js'),
	bodyParser = require('body-parser'),
	path = require("path");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/InfoSchooldb');

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var routes = require('./api/route/info_school_routes');
routes(app);



app.listen(port);

console.log("Test listening port at " + port);