var Repo = require('./taskRepository')

//REVEALING MODULE PATTERN -alternate method
//difference is in structure of taskRepository.js

var Task = function(data){
  this.name = data.name;
  this.completed = false;
}

Task.prototype.complete = function(){
  console.log('Completing task: ' + this.name);
  this.completed = true;
}
Task.prototype.save = function(){
  console.log('Saving task: '+ this.name);
  Repo.save(this);
  //this is the task
}

module.exports = Task;
