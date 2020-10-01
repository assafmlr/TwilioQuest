
function scan(arr) {
  var retVal = 0;
  if(arr.length > 0) {
    arr.forEach((item, i) => {
      if('contraband' === item) {
        retVal = retVal + 1;
      }
    });
  }
  return retVal;
}

console.log(scan(['contraband', 'contraband','asdqdwa','asdad1']));
