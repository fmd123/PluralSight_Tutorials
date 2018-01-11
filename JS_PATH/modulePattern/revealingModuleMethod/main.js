var Task = require('./taskRepo')

var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
//fictional database that doesn't exist.

var task2 = new Task({name: 'feed dog'});
var task3 = new Task({name: 'fly to moon'});
var task4 = new Task({name: 'draw a picture'});

task1.complete();
task2.save();
task3.save();
task4.save();
