function getIndexToIns(arr, num) {
  
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  
  return index === -1 ? arr.length : index;
}
