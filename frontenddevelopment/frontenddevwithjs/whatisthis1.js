// What will this point to in the code below?

function whatIsMyContext() {
  return this;
}

// we won't be able to know.  It doesn't show how the function is called.  That's the time the context of the function is determined, not when the function is declared.

// What will this point to in the code below?

function whatIsMyContext() {
  return this;
}

// console.log(whatIsMyContext());

// this is the window object, since the function is called with the implicit global object context, which is window in the browser environment

// what will this point to in the code below?

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

// foo();

// this is the window object, since the baz function is called with the window implicit context

// what will this point to in the code below?

var obj = {
  count: 2,
  method: function() {
    return this.count;
  },
};

// console.log(obj.method());

// this is the object the method is attached to.  In this case, its obj

// What does the following program log out?

function foo() {
	console.log(this.a);
}

var a = 2;

// foo();

// this will log out 2 because this refers to the window implicit context

// What does the following program log out?

var a = 1;

function bar() {
	console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar,
}

// obj.foo();

// the program will log out 2.  In this method invocation, the context is set to obj.

// What will the following code log out?

foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  },
};

// foo.bar(); // this will log out Object {a: 1}
// var qux = foo.bar;
// qux(); // this will log out Uncaught TypeError: this.baz is not a function, since this refers to the implicit context of window, causing the error message

// What will this point to in the code below?
var myObject = {
	count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  },
}

// console.log(myObject.myChildObject.myMethod());

// this will log out undefined

// this is myChildObject, which means this.count is undefined

// In the previous example, how would we change the context, or value of this, to be the parent myObject?

// console.log(myObject.myChildObject.myMethod.call(myObject));

// We can use the method on all functions, call, to pass in the context we wish to use when calling the method.

// what will the following code log out?

var person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName: function() {
    console.log(this.firstName + ' ' + this.lastName + ' is the Amazing Spiderman!');
  },
};

var whoIsSpiderman = person.fullName.bind(person);

// whoIsSpiderman();

// this will log out 'Peter Parker is the Amazing Spiderman!'

// What will the following code log out?

// var a = 1;
// var obj = {
//   a: 2,
//   func: function() {
//     console.log(this.a);
//   }
// }
// 
// obj.func(); // 2
// obj.func.call(); // 1
// obj.func.call(this); // 1
// obj.func(obj); // 2
// 
// var obj2 = {a: 3};
// obj.func.call(obj2); // 3

// What will the following code log out?

// var a = 1;
// 
// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }
// 
// var foo = new Foo();
// 
// foo.bar(); 
// Foo(); 
// 
// var obj = {};
// Foo.call(obj);
// obj.bar();
// 
// console.log(this.a);

// this will log out:
// 2
// 2
// 2
// 2
// 2

// make this code log out 34000

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shipping + this.tax - specialDiscount();
  },
};

console.log(computer.total());
