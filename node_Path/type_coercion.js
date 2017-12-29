var x = 3;
var y = 2.5;
var z = '3';
var a = 'apple'
var answer = x * y;
//adding a number to a string will coerce the number to a string. answer1 = 33.
console.log(answer);
console.log(typeof answer);
var answer1 = x + z;
console.log(answer1);
console.log(typeof answer1);

//to fix this use parseInt()

var answer1a = y + parseInt(z);
console.log(answer1a);
console.log(typeof answer1a);


//but multiplying is different in which case the string will be coerced to a number

var answer2 = y*z;
console.log(answer2);
console.log(typeof answer2);



var answer3 = a*3;
console.log(answer3);
