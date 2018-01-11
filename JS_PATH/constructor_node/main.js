var Task = require('./task')


var task1 = new Task('take a walk');
var task2 = new Task('feed dog');
var task3 = new Task('fly to moon');
var task4 = new Task('draw a picture');

task1.completeIt();
task2.saveIt();
task3.saveIt();
task4.saveIt();
console.log('this is task1: ' + task1);
console.log(Task.prototype);
console.log(task1.__proto__);

//you can see that they both point to same thing (Task's prototype)
