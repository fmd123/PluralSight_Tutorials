var book = require('./lib/grades.js').book;

// book.addGrade(90);
// book.addGrade(85);
// book.addGrade(72);
// console.log(book.getAverage());

//for below when someone runs something in terminal like:
//node program.js 75 98 24 89
//this will add each additional argument into the gradebook.
//need parseInt to turn each string into an integer
for(var i = 2; i<process.argv.length; i++){
  book.addGrade(parseInt(process.argv[i]))
};

console.log(book._grades);
console.log(book.getAverage());

//coool!
