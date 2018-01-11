var repo = function(){
  var db = {}
  //when repo function is executed, we can create a db variable to instantiate database connection and do all database work in this file here. And because of the way JS closures work, every method that gets called eg get method and save method has access to the database stuff up above. Nothing else has access to it; none of my calling functions can get to it. My db is secured up in this module, but all of my methods can access the database.

  
  return{
    get: function(id){
      console.log('getting task from db: ' + id);
      return {
        name: 'new task from db'
      }

    },
    save: function(task){
      console.log('saving task to db: ' + task.name);
    }
  }
}

module.exports = repo();

//this works with mainTaskRepo.js
