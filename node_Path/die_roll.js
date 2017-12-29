var getDieRoll = function(){
return Math.ceil(Math.random()*6);
//this will return whole numbers from 1 to 6
          }
var firstDie = getDieRoll()

console.log(firstDie);

//DON'T FORGET THE RETURN!!! otherwise firstDie will be undefined.

//Math.round(Math.random()*6) will return whole numbers from 0 to 6
