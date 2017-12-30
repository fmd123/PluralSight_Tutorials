var book = require('./grades.js').book;
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello World :-)")
});

app.get('/grade', function(req,res){
  var average = 0;
  var letterGrade = '';
  var grades = req.query.grades.split(",");
  console.log(grades);
  for(var i=0; i<grades.length; i++){
    book.addGrade(parseInt(grades[i]))
  }

  average = book.getAverage();
  letterGrade = book.getLetterGrade();

  console.log("below is req.query")
  console.log(req.query);

  res.send("Your average is: " + average + " and your grade is: " + letterGrade)


})
//don't forget to restart server every time you change the code (for now)
app.listen(3000);
console.log("server is ready... ")
