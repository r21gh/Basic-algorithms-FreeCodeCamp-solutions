function largestOfFour(arr) {
  list = [];
  for (var i=0; i < 4; i++){
    list.push(Math.max(...arr[i]));
  }
  return list;
}
