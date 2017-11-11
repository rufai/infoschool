'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  student_name: 
  {
    type: String,
    required: 'Kindly enter your name'
  },
  date_created: 
  {
    type: Date,
    default: Date.now
  },
  school_name : 
  {
    type : String,
    required : 'Please enter the name of your school'
  },
  course_of_study : 
  {
    type : String,
    required : 'What course are you studying?'
  },
  year_of_study :
  {
    type : Number,

  },
  age :
  {
    type : Number,
    min : 14
  }
});

module.exports = mongoose.model('Students', StudentSchema);