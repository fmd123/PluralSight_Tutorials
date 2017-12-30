var gradeBook = {

  _grades: [],
  result: 0,
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
    var result = 0;
    for(i=0; i<this._grades.length; i++){
      total += this._grades[i]
    }
    result =  total/this._grades.length;
    console.log(this._grades);
    console.log('this is result: ' + result);
    console.log(total)
    return result;
  },

  getLetterGrade: function () {
    var resulting = 0;
    resulting = this.getAverage();
    console.log(resulting)
    if(resulting >=90){
      this.reset();
      return "A"
    }else if (resulting >=80){
      this.reset();
      return 'B'

    }else if (resulting >=70){
      this.reset();
      return 'C'
    }else if (resulting >=60){
      this.reset();
      return 'D'
    }else{
      this.reset();
      return 'F'

    }
  }


};

exports.book = gradeBook;
