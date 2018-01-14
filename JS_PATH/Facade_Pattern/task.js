var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

var TaskService = function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log("completing task " + task.name);
    },
    setCompleteDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + " completed on " + task.completedDate);
    },
    notifyCompletion: function(task, user) {
      console.log("notifying " + user + "of completion of " + task.name);
    },
    save: function(task) {
      console.log("saving Task " + task.name);
    }
  }
}();

var TaskServiceWrapper = function() {
  var completeAndNotify = function(task) {
    TaskService.complete(task);
    if (task.completed == true) {
      TaskService.setCompleteDate(task);
      TaskService.notifyCompletion(task, task.user);
      TaskService.save(task);
    }
  }
  return {completeAndNotify: completeAndNotify}
}();

var myTask = new Task({name: 'myTask', priority: 1, project: "big project", user: "Francesca", completed: false});

var myBestTask = new Task({name: 'myBestTask', priority: 1, project: "Learn React", user: "Francesca", completed: false});

//move this code below into a facade function:
// TaskService.complete(myTask);
// if(myTask.completed == true){
//   TaskService.setCompleteDate(myTask);
//   TaskService.notifyCompletion(myTask);
//   TaskService.save(myTask);
// }
TaskServiceWrapper.completeAndNotify(myTask);
TaskServiceWrapper.completeAndNotify(myBestTask);
console.log(myTask);

//very cool. :-) 
