
class Ducktypium {

  constructor(color) {
    if(["red","blue","yellow"].includes(color)){
      this.color = color;
      this.calibrationSequence = [];
    } else {
      throw new Error("");
    }
  }

  refract(color) {
      if("red" === color) {
        if(this.color === "red") {
          return "red";
        }
        if(this.color === "blue") {
          return "purple";
        }
        if(this.color === "yellow") {
          return "organe";
        }
      } else if("blue" === color) {
        if(this.color === "red") {
          return "purple";
        }
        if(this.color === "blue") {
          return "blue";
        }
        if(this.color === "yellow") {
          return "green";
        }
      } else if("yellow" === color){
        if(this.color === "red") {
          return "orange";
        }
        if(this.color === "blue") {
          return "green";
        }
        if(this.color === "yellow") {
          return "yellow";
        }
    } else {
      throw new Error("");
    }
  }

  calibrate(arr) {
    if(arr.length > 0) {
      this.calibrationSequence = arr.sort().map(item => item *3);
    }
  }
}


// The following would produce an error
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence);
