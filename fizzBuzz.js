
const argumentValue = process.argv[2];

var num = Number(argumentValue);

if(num%3===0 && num%5===0) {
  console.log("JavaScript");
}
else if(num%3===0) {
  console.log("Java");
}
else if(num%5===0) {
  console.log("Script");
}
else {
    console.log(num);
}
