
function scanAndFilter(arr, str) {
  var retArr = [];
  if(arr.length > 0) {
    arr.forEach((item, i) => {
      if(item !== str) {
        retArr.push(item);
      }
    });
  }
  return retArr;
}

console.log(scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'], 'ray guns'));
console.log(scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'], 'apples'));
