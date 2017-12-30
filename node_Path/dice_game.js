var dice = require('./die');
var die = dice.die;

die.size = 10;
console.log(dice);
//logs: { die: { size: 10, totalRolls: 0, roll: [Function: roll] } }
console.log(die);
//logs: { size: 10, totalRolls: 0, roll: [Function: roll] }
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
//console.log(totalRolls + " totalRolls");
