'use strict'
class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  completeIt() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  }
  saveIt() {
    console.log('Saving task: ' + this.name);
  }

}

module.exports = Task;
