function theBeatlesPlay(musicians, instruments){
  var array= [];
  for(var i = 0; i <musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  var newArr =[];
  var i = 0;
  while (i<facts.length){
    newArr.push(facts[i] + "!!!")
    i++;
  }
  return newArr;
}