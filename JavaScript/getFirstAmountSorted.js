
function getFirstAmountSorted(arr, length) {
  var val = [];
  if(length > 0) {
    if(arr.length > 0) {
      arr.sort();
      val = arr.slice(0, length);
    }
  }
  return val;
}

console.log(getFirstAmountSorted(['third', 'second', 'first'],2));
console.log(getFirstAmountSorted(['golden', 'terrier'],1));
console.log(getFirstAmountSorted(['cheerios', 'apple jacks', 'lucky charms'],3));
console.log(getFirstAmountSorted(['golden', 'terrier', 'boxer'],0));
