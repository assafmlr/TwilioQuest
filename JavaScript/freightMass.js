function calculateMass(arr) {
  var retVal = 0;
  if(arr.length > 0) {
    arr.forEach((item, i) => {
      retVal += item.length;
    });
  }
  return retVal;
}

const cargo = ['cat', 'dog', 'bird'];

console.log(calculateMass(cargo));
