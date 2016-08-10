function findLongestWord(str) {
  
  str    = str.split(" ");
  a = [];
  for (var i=0; i < str.length; i++){
    a.push(str[i].length);
  }
  return Math.max(...a);
}
