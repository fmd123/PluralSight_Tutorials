var die = {
  size: 4,
  totalRolls:0,
  roll: function(){
    var result = Math.ceil(Math.random()*this.size)
    this.totalRolls += 1;
    return result;
  }
}

exports.die = die
