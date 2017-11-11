'use strict'

module.exports = function(app) 
{

	var info_school = require('../controller/info_school_controller.js');


	app.route('/')
		.get(info_school.list_all_students)
		.post(info_school.create_a_student);

	app.route('/students')
		.get(info_school.list_all_students)
		.post(info_school.create_a_student);

	app.route('/students/:studentId')
		.get(info_school.read_a_student)
		.post(info_school.update_a_student)
		.delete(info_school.delete_a_student);

};