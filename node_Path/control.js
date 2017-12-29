var getDieRoll = function(dieSize){
  //dieSize is number of sides on die
  var result = Math.ceil(Math.random() * dieSize)
  console.log(result);
  return result;
}

var roll = getDieRoll(6);
while(roll<4){
  roll = getDieRoll(6);
  console.log(roll);
}
if(roll >=5){console.log("Nice. You rolled a " + roll)}
else {console.log("Hmmm "+ roll + " isn't so great!")}

if(roll !=4 && roll !=6){
  console.log('logical');
}
