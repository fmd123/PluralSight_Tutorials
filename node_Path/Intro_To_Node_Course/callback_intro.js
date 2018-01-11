var maxTime = 1000;

//if input is even, double it
//if input is odd, error
//(call takes random amount of time<1s)

var evenDoubler = function(v, callback){
  //v for value
  var waitTime =
  Math.floor(Math.random()*(maxTime +1));

  if(v%2){
    setTimeout(function(){
      callback(new Error("Odd input"));
    }, waitTime);
  }else{
    setTimeout(function(){
      callback(null, v*2, waitTime);
    }, waitTime);
  }

};

var handleResults = function(err, results, time){
  //time it took to do call
  if(err){
    console.log("ERROR: " + err.message);
  }else{
    console.log("The results are: " + results + " (" + time + " ms)");
  }
};

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
evenDoubler(4, handleResults);
evenDoubler(5, handleResults);
//above will all have random waitTime values and don't know what order will get these.
//this line will always come first -no waitTime.
console.log(("-.-.-.-..-.-.-.-.-.-.-"));
