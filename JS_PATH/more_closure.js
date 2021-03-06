//USEFUL LINKS: https://www.reddit.com/r/javascript/comments/5bfa4h/has_anyone_noticed_that_chrome_now_exposes/?st=jbvxa9nw&sh=4424f05d

//[[Scopes]] is a private property that Chrome developer tools add and use internally, in C++, here in the source. It displays the variables that are in the scope of a function, i.e. which variables can be accessed from that function. -https://stackoverflow.com/questions/45506745/what-is-scopes-in-dispatch-of-redux
//links to closure explanations: https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript

//https://en.wikipedia.org/wiki/Closure_(computer_programming)
// "Operationally, a closure is a record storing a function together with an environment: a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created. A closure—unlike a plain function—allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope."

//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    }
    //functions created but not invoked.
    )
  }
  //what is i equal to right now? 3 and that is what will be on prototype
  return arr;
}

var fs = buildFunctions();
//fs is an array of 3 identical yet distinct functions
fs[0]()
fs[1]()
fs[2]()
//all three will log 3; this is because all three point to same outer reference.
//all three were created in same environment but not invoked at time of making (i.e. with as IFFEs).  at time the array was returned i was 3.

//if console.log fs[0].prototype will see in constructor function:
//[[Scopes]]:Scopes[2] 0:Closure (buildFunctions) i:3 1:Global {type: "global", name: "", object: Window}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//What if you want to have the functions return different values?
function letsBuildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    let j = i;
    //let is block scoped so each iteration of for loop will cause each newly created function to point to a different j.
    arr.push(function() {
      console.log(j);
    })
  }
  return arr;
}

var fsLet = letsBuildFunctions();
//fs is an array of 3 functions but each returns a different j. (0,1,2,)
fsLet[0]()
fsLet[1]()
fsLet[2]()

//old school ES5 way without let: Use an IFFE structure
function BuildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      function(j) {
      return function() {
        console.log(j);
      }
    }(i))
    //immediately invoke the function with an argument of i in parameter j. j will store whatever i it sees in the loop at that moment. so 0 1 2 logged.
  }
  return arr;
}

var fs2 = BuildFunctions2();
//fs is also an array of 3 functions but each returns a different j. (0,1,2,)
//again nothing happens until invocation of BuildFunctions2

fs2[0]()
fs2[1]()
fs2[2]()
