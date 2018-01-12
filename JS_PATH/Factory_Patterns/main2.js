var Task = require('./task');

var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

//console.log(task1)
task1.save();

//main2.js works unlike main.js
//This creates new instantiations of repositories
//repeatedly. Would like to use cache if possible.
//see main3.js & repoFactorywCache.js
