var repo = function(){
  var called = 0;
  var save = function(task){
    called++;
    console.log('Saving '+ task +  '---Called '+ called + " times.");
  }
  console.log("instantiating new task.");
  return{
    save: save
  }
}
//module.exports = repo();
//this creates a new instance of repo when it is exported.
// or could do:
module.exports = new repo;
