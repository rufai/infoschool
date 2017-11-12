var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	path = require("path"),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	routes = require('./api/route/info_school_routes'),
	School = require('./api/model/info_school_model.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/InfoSchooldb');

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", "./views/pages/");

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log("Test listening port at " + port);