

const argumentOne = process.argv[2];
const argumentTwo = process.argv[3];

if(argumentOne.toLowerCase() < argumentTwo.toLowerCase()) {
  console.log(-1);
}
else if(argumentOne.toLowerCase() > argumentTwo.toLowerCase()) {
  console.log(1);
} else {
  console.log(0);
}
