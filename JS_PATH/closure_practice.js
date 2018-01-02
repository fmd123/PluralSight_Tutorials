//from JavaScript: The Weird Parts -Alicea
function greet(whattosay){
  return function(name){
    console.log(whattosay + " "+ name);
  }
}

//greet('Ciao')("Francesca");
//will return Ciao Francesca.  greet('Ciao') is being invoked with argument of "Francesca"

//or capture it in an object sayHi
var sayHi = greet("Ciao")
//this also returns Ciao Francesca
var sayHola = greet("Hola")




//copy paste this into about:blank Chrome console and check out prototypes for all functions
//type greet.prototype and open up the constructor function and look at scopes
//for sayHi.prototype will see the Ciao in the [[scopes]] property:
//constructor: ƒ (name)arguments: nullcaller: nulllength: 1name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM57677:2[[Scopes]]: Scopes[2]0: Closure (greet)whattosay: "Ciao" 1: Global {type: "global", name: "", object: Window}__proto__: Object

//so, somehow, the information is being preserved in the prototype? Yes.
//because sayHola.prototype results in a scope with whattosay being equal to Hola.

//if I run greet('Ciao')("Francesca") in Chrome console then I can also do:
//greet('Ciao').prototype and it will return a constructor function with a closure scope.

//cool...
