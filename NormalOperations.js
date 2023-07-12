// starting programing 
// create loop that runs for three times 
for(var i = 0; i < 3; i++){
  // prompt user twice for an integer
  var a = prompt("Name an integer");
  var b = prompt("Name another integer");
  console.log(compare(a,b));
}
// function compare
function compare(num, numb){
  if(num < numb){
    return num + " is less than " + numb;
  }
  else if(numb < num){
    return numb + " is less than "+ num;
  }
  else
    return "they are equal";
}
//create function called eliminate
function eliminate(remove){
  for(var k = 0; k < remove; k++){
    removeItem(names,randomNumber(0,names.length-1));
  }
  return names;
}
// create empty list called names
var names = [];
// create loop that runs 6 times
for(var j = 0; j<6; j++){
 var c = prompt("Name a name") ;
 appendItem(names, c);
}
var remove = prompt("how many people would you like to vote off the island");
var result = eliminate(remove);
console.log(result);
