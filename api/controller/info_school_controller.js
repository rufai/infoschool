'use strict'

var mongoose = require('mongoose'),
	student = mongoose.model('Students');

exports.list_all_students = function(req, res)
{
	student.find({}, function(err, student) 
	{
		if(err)
		{
			res.send(err);		
		}
		res.json(student);
	});
};

exports.create_a_student = function(req, res)
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

