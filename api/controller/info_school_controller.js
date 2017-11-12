'use strict'



var mongoose = require('mongoose'),
	student = mongoose.model('Students'),
	express = require("express");

var app = express();

function processFormFields(req, res)
{

}

exports.list_all_students = function(req, res)
{

	if (req.method.toLowerCase() == "get")
	{
		console.log("function list_all_students")
		// res.json(student);

		student.find({}, function(err, student) 
		{
			if(err)
			{
				res.send(err);		
			}
			
			res.render("list_all_students.ejs", {students : student});
		});
	}else
	{
		var new_student = new student(req.body);

		new_student.save( function(err, student) 
		{
			if (err)
			{
				res.send(err);
			}
			res.json(student);
		});		
	}

// else
	// {
	// 	student.find({}, function(err, student) 
	// 	{
	// 		if(err)
	// 		{
	// 			res.send(err);		
	// 		}
	// 		app.get("/students", function(req, res)
	// 		{
	// 			res.render("list_all_students.ejs");
	// 		});
	// 	});
	// }
};


exports.create_a_student = function(req, res)
{

	console.log(req.method);
	
	res.render("create_a_student.ejs");
	
};

exports.read_a_student =  function(req, res)
{
	student.findById(req.params.studentId, function(err, student) {
		if (err)
		{
			res.send(err);
		}
		res.json(student);
	});

};

exports.update_a_student = function(req, res)
{
	student.findOneandUpdate(
		{_id : req.params.studentId},
	 	req.body, 
	 	{new : true},
	 	function (err, student)
	 	{

	 	}
	 );
};

exports.delete_a_student = function(req, res)
{
	student.remove(
		{
			_id : req.params.studentId
		}, 
		function(err, student) 
		{
			if (err)
			{
				res.send(err)
			}
		}
	);
};

