function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalsy(value){
    if(value){
      return value;
    }
  }
  var filtered = arr.filter(isFalsy);
  return filtered;
}
