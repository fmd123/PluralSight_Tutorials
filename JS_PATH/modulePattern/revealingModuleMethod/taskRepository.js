var repo = function(){
  var db = {}

  var get = function(id){
    console.log('getting task from db: ' + id);
    return {
      name: 'new task from db'
    }
  }

    var save = function(task){
      console.log('saving task to db: ' + task.name);
    }

    //define methods above and have list of them in the return and this way you can just go to the return statement, and the methods are available anywhere in the module.

    //The return is more stream lined and if need details can look in the methods above.


  return{
    get: get,
    save: save
  }
}

module.exports = repo();
