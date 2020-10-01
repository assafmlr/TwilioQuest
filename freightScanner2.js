
function scan(arr) {
  retVal = [];
  if(arr.length > 0) {
    arr.forEach((item, i) => {
      if('contraband' === item) {
        retVal.push(i);
      }
    });
  }
  return retVal;
}

console.log(scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']));
