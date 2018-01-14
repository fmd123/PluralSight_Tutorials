var Task = function (name){
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function(){
  console.log("completing task: " + this.name);
  this.completed = true;
};

Task.prototype.save = function (){
  console.log("Saving Task: "+ this.name);
};

var myTask = new Task ("legacy Task");

myTask.complete();
myTask.save();
//above is all the stuff we have already learned...
//don't want to mess with Task because might introduce bugs so...

var urgentTask = new Task("urgent Task");
//can change urgentTask and add properties and methods
urgentTask.priority = 2;
urgentTask.notify = function(){
  console.log("notifying important people.");
}
urgentTask.complete();
//urgentTask.save();
//urgentTask.notify();

urgentTask.save = function(){
  this.notify();
  Task.prototype.save.call(this);
}
urgentTask.save();
//logs out:
//completing task: legacy Task
//Saving Task: legacy Task
//completing task: urgent Task
//notifying important people.
//Saving Task: urgent Task
