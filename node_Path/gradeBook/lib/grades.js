var gradeBook = {

  _grades: [],

  reset: function(){
    this._grades =[];
  },
  addGrade: function(newGrade){
    this._grades.push(newGrade);
  },

  getCountOfGrades: function(){
    return this._grades.length;
  },

  getAverage: function(){
    var total = 0;
    for(i=0; i<this._grades.length; i++){
      total += this._grades[i]
    }
    return total/this._grades.length;

  }


};

exports.book = gradeBook;
