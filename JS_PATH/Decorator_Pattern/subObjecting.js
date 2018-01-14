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


var UrgentTask = function(name, priority){
  Task.call(this, name);
  this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function () {
  console.log('notifying important people');
}

UrgentTask.prototype.save = function(){
  this.notify();
  console.log("do special stuff for urgent before saving");
  Task.prototype.save.call(this)
}

var ut = new UrgentTask("water trees", 1);
console.log(ut);
ut.complete();
ut.save();
console.log(ut);
