var Task = require('./task');

//this first example takes in three repositories to //instantiate a new task,
//add a user to a task and add a project to the task //and we're going to save it to a database.
//this looks messy because of three different repositories.
//clutters up main.js

//so will replace the three repo vars w/ factory (see main2.js)
var taskRepo = require('./taskRepository');
var userRepo = require('./userRepository');
var projectRepo =   require('./projectRepository');

//this doesn't really work but it is what is in
//the course exercise files.
//It will log "newing up task"
// but taskRepo.get gives error not a function. meh... 
var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
