function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for (var i =0; i < howMany ; i++){
    arr.splice(0,1);
  }
  return arr;
}
