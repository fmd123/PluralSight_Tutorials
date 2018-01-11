var Task = function(name){
  this.name = name;
  this.completed = false;
}

Task.prototype.completeIt = function(){
  console.log('Completing task: ' + this.name);
  this.completed = true;
}
Task.prototype.saveIt = function(){
  console.log('Saving task: '+ this.name);
}

module.exports = Task;
