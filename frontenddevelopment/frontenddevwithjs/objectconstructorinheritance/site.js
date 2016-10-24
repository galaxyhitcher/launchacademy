function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
};

Vehicle.prototype = {
  doors: 4,
  wheels: 4,
};

var sedan = Vehicle();
var coupe = Vehicle();
coupe.doors = 2;

function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

function Motorcycle() {
  var o = this;
  if (!(o instanceof Motorcycle)) {
    o = new Motorcycle();
  }
  o.doors = 0;
  o.wheels = 2;
  return 0;
}

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;

var crx = new Coupe();
var monster = new Motorcycle();
console.log(monster);

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();
console.log(lesabre instanceof Sedan);
console.log(lesabre instanceof Vehicle);
console.log(new Sedan());
