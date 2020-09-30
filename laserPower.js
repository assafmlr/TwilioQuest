
function calculatePower(arr) {
  val = 0;
  if(arr.length > 0) {
    val = arr.map(item => item*2).reduce((sum, current) => sum + current, 0);
  }
  return val;
}

console.log(calculatePower([2,3,4]));
