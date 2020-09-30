
const argumentValue = process.argv[2];

var num = Number(argumentValue);

if(num === 0) {
  console.log("alive");
} else {
  console.log("other");
}
