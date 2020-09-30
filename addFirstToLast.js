
function addFirstToLast(arr)  {
  var ret = '';
  if(arr.length > 0) {
   ret = arr[0] + arr[arr.length -1];
  }
  return ret;
}

// The lines of code below will test your function when you run it from the
// command line with Node.js
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
