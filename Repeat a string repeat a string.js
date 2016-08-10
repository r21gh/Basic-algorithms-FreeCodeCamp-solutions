function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num<0){return "";}
  str = Array(num+1).join(str);
  return str;
}
