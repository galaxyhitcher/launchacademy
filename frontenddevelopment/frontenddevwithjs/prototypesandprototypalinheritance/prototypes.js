// function getDefiningObject(object, propKey) {
//   while (!!object) {
//     if (object.hasOwnProperty(propKey)) {
//       return object;
//     };
//
//     object = object.__proto__;
//   }
//   return object;
// }
//
// var foo = {
//   a: 1,
//   b: 2,
// };
//
// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);
//
// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // true
// console.log(getDefiningObject(qux, 'e'));             // null

// function shallowCopy(object) {
//   var new_obj = {};
//   for (var prop in object) {
//     new_obj[prop] = object[prop];
//   }
//   return new_obj;
// }

// function shallowCopy(object) {
//   var result = Object.create(Object.getPrototypeOf(object));
//   for (var prop in object) {
//     if (Object.prototype.hasOwnProperty.call(object, prop)) {
//       result[prop] = object[prop];
//     }
//   }
//
//   return result;
// }

// function shallowCopy(object) {
//   var result = Object.create(Object.getPrototypeOf(object));
//   for (var prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result[prop] = object[prop];
//     }
//   }
//
//   return result;
// }
//
// var foo = {
//   a: 1,
//   b: 2,
// };
//
// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log("c is " + this.c);
// }
//
// var baz = shallowCopy(bar);
// console.log(baz.a);       // 1
// baz.say();                // c is 3
//
// function extend(destination) {
//   for (var i = 1; i < arguments.length; i++) {
//     var source = arguments[i];
//     for (var prop in source) {
//       if (Object.prototype.hasOwnProperty.call(source, prop)) {
//         destination[prop] = source[prop];
//       }
//     }
//   }
//
//   return destination;
// }
//
// var foo = {
//   a: 0,
//   b: {
//     x: 1,
//     y: 2,
//   },
// };
//
// var joe = {
//   name: 'Joe',
// };
//
// var funcs = {
//   sayHello: function() {
//     console.log('Hello, ' + this.name);
//   },
//
//   sayGoodBye: function() {
//     console.log('Goodbye, ' + this.name);
//   },
// };
//
// var object = extend({}, foo, joe, funcs);
//
// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.area = function() {
//   return Math.PI * (this.radius ** 2);
// }
//
// var a = new Circle(3);
// var b = new Circle(4);
//
// console.log(a.area().toFixed(2)); // 28.27
// console.log(b.area().toFixed(2)); // 50.27

// What will the following coe log out and why?

// function Ninja(){
//   this.swung = true;
// }
//
// var ninja = new Ninja();
//
// Ninja.prototype.swingSword = function(){
//   return this.swung;
// }
//
// console.log(ninja.swingSword());

// What will the following code log out and why?

// function Ninja(){
//   this.swung = true;
// }
//
// var ninja = new Ninja();
//
// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   }
// }
//
// console.log(ninja.swingSword());

// function Ninja(){
//   this.swung = false;
// }
//
// var ninjaA = new Ninja();
// var ninjaB = new Ninja();
//
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }
//
// // Add a swing method to the Ninja prototype which
// // returns itself and modifies swung
//
// console.log(ninjaA.swing().swung)      // this needs to be true
// console.log(ninjaB.swing().swung)      // this needs to be true

// var ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();
//
// var ninjaB = Object.create(ninjaA);
// // var ninjaB = new ninjaA.constructor();
// // create a ninjaB object
//
// console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true

// var shape = {
//   type: '',
//   getType: function() {
//     return this.type;
//   },
// }
//
// function Triangle(a, b, c) {
//   this.type = 'triangle';
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }
//
// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }
//
// Triangle.prototype.constructor = Triangle;
// var t = new Triangle(1, 2, 3);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 6
// console.log(t.getType());                   // "triangle"

// function User(first, last) {
//   this.first = first;
//   this.last = last;
//   this.name = first + ' ' + last;
//   return this;
// }
//
// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');
//
// console.log(name);        // Jane Doe
// console.log(user1.name);   // John Doe
// console.log(user2.name);   // John Doe

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }
//
// var foo = {
//   a: 1,
// };
//
// var bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// Object.prototype.begetObject = function() {
//   function F() {};
//   F.prototype = this;
//   return new F();
// }
//
// var foo = {
//   a: 1,
// };
//
// var bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  object.constructor = constructor;
  return result === undefined ? object : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
console.log(john.greeting());          // Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
