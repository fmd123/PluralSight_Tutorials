var book = require('../lib/grades').book;


exports['setUp'] = function(callback){
  book.reset();
  callback();
};
exports["can add new grade"] = function (test){
  book.addGrade(90);
  var count = book.getCountOfGrades();
  test.equal(count, 1);
  test.done();
};

exports['can average grades'] = function(test){
  book.addGrade(100);
  book.addGrade(50);

  var avg = book.getAverage();
  test.equal(avg, 75);
  test.done();
};

exports['can post an A grade'] = function(test){
  book.addGrade(100);
  book.addGrade(95);
  console.log(book._grades);

  var letterGrade = book.getLetterGrade()
  test.equal(letterGrade, 'A')
  test.done()
};

exports['can post an F grade'] = function(test){
  book.addGrade(10);
  book.addGrade(90);

  var result = book.getLetterGrade()
  test.equal(result, 'F')
  test.done()
}
