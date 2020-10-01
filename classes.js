
class Materializer {

  constructor(target) {
    this.target = target;
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }

  materialize() {
    if(this.activated) {
      return this.target;
    } else {
      return undefined;
    }
  }
}

var c = new Materializer("bla")
console.log(c.materialize());
c.activate();
console.log(c.materialize());
