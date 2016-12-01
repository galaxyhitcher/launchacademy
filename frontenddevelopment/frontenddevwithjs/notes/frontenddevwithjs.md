what you found helpful  
what didn't work well for you  
how well you retained the concepts  
which parts were difficult  
which parts were easy  

data, procedures, objects  
context, this, first-class functions, object oriented language  
execution context, implicit, explicit  
function executed vs. defined, binding of function and context object  
call, apply, explicit context  
hard binding context, bind  
context loss, method taken out of object  
  1. solutions: add context parameter, use bind
context loss, internal function losing method context  
  1. preserve context with a local variable in the lexical scope  
  2. pass along the context for internal functions  
  3. bind the context with a function expression  
function as argument losing surrounding context  
  1. use a local variable in the lexical scope to store <code>this</code>  
  2. Bind the argument function with the surrounding context
  3. use the optional thisArg

#Function Contexts and Objects  

In this lesson, it was very useful to learn how object orientation works in Javascript.  In general, object orientation is a way of bundling functionality with state.  Object properties can be any kind of value, so object properties can clearly be used to store state.  When an object property is a function, these functions can be treated as methods on that object.

The <code>this</code> keyword in Javascript was confusing when I first encountered it, but it makes sense in light of the fact that Javascript is both a functional and object-oriented language.  If functions are *first class citizens* (i.e. values which can be passed around and assigned as object properties), there needs to be a mechanism which assigns the context in which the function is called.  This mechanism is the <code>this</code> keyword.  

When a function is called, it is called with a context.  This context may be explicit or implicit.  When a function is called with no context explicitly provided (implicit context), the context is the global object (the window object, or undefined if the function is called in strict mode).  The important thing to remember is that the context of a function is determined where the function is called rather than where the function is defined.  

A context can be explicitly provided to a function in a few ways using the following methods defined on the Function prototype: call, apply, and bind.  Function.prototype.call takes the following parameters: a context object and any number of parameters.  The return value of this method will be the calling function called in the supplied context with the supplied parameters.  Function.prototype.apply works similarly, except it takes an array of arguments to pass to the function rather than taking those arguments as parameters directly.

The Function.prototype.bind method takes a context object and returns a new function which is the calling function bound to the given context object.  The context of this returned function cannot be called in the future.  

##Context Loss  

There are situations where functions may not have their intended context, and there are ways to mitigate this context loss.  For example, methods can lose their intended context when taken out of their containing object, an internal function can lose it's method context, and a function provided as an argument can lose it's surrounding context.  Using techniques such as adding context parameters to your functions, using the "bind", "apply", and "call" functions, using the optional thisArg in certain functions, and using a variable to capture lexical scope will allow the programmer to specify the intended context for a given function call or method call.

#JQuery and the DOM  

The DOM is simply an object-oriented interface between an HTML or XML document and a programming language.  The DOM, or Document Object Model, can be manipulated using plain vanilla Javascript or using the Javascript library JQuery.  The advantage of using JQuery over vanilla Javascript is that JQuery abstracts away browser implementation details that you would need to attend to if you were developing web applications with vanilla Javascript.  

JQuery is essentially a function which wraps a DOM element or collection of elements so you can manipulate the objects or use those objects with other JQuery methods.  

##JQuery Events  
JQuery can be used to bind and unbind event listeners to DOM nodes in your HTML document.  In event listeners, an event parameter can be passed in.  This event object can be used to prevent the default behavior that the browser would normally execute when an event occurs.  

##JQuery DOM Traversal  
The find() method can be used on a JQuery object to select a child of that object using a CSS-like selector, and the parent() method can be used to traverse outward from an object to it's parent.  Like the parent() method, the closest() method traverses the DOM outward from an element.  Unlike the parent() method, the closest() method never looks at the object itself when traversing the DOM.  To collect all the immediate children of an element, use the children() method.  

Chrome developer tools and JSLint are handy tools for making one's code bug-free and of a good style.  

#Putting it All Together  
The JQuery effects library provides developers with a set of methods which will, in effect, animate DOM elements by dynamically affecting CSS properties.  JQuery makes animations easy relative to the code one would have to write in vanilla Javascript.  

##HTML Data Attributes  
HTML5 introduced data attributes which can be added to HTML elements.  A data attribute starts with "data-".  In JQuery, there are data setter methods and data getter methods. The JQuery attr() method is a setter, which will change the html markup.  The JQuery data() method is a getter.  If the data() method is used as a setter, a value will be stored on the passed in node, and will be retrievable with the data() method, but the change will not be reflected in the HTML markup.  A retrieved DOM element will have a dataset property which will be a collection of key/value pairs such that the keys are data attribute names and the values are data attribute properties.

##JQuery Plugins  
When I first watched the video on this topic, I found it confusing, but after working on the assignments in the rest of this course, it became clear why and how one would create a plugin.  A plugin is essentially a reusable extension to the JQuery language which provides custom methods which can be called from a JQuery object.

#Advanced JQuery and Dynamic Content Creation  

##JQuery Event Delegation  
If you have an event handler bound to many events in a document, it is often more efficient to delegate the event to the parent element by binding the event to the parent element.  

##HTML Templating with Javascript  
Handlebars is a useful templating library which allows you to render your data into HTML without resorting to string concatenation in your Javascript code.  

##AJAX Requests  
AJAX (short for Asynchronous Javascript and HTML) is a way for the client to make HTML requests without needing to refresh the browser.  JQuery offers methods to work with AJAX requests without needing to worry about cross-browser compatability issues.  

#HTML5 APIs  
##Client-side Storage  
two new types of storage in html5 spec  
local storage  
session storage  
properties on the window object  
window.localStorage and window.sessionStorage  
sessionStorage lasts the current session  
Local Storage stays around after browser window or tab closes  
localStorage is accessible as long as the browser has not deleted it  

cookies vs. localStorage  
cookies sent with each HTTP request to server  
cookies used to store user account information if logged in  
localStorage is client-side  
server does not automatically receive access to localStorage data  
cookies hold 4KB of data per site  
localStorage hold 5MB of data per site  
actual storage is storage amount / 2 since string characters in JS are 2 bytes each

There are two new types of storage introduced in the HTML5 specification: local storage and session storage.  localStorage and sessionStorage are both properties on the window object.  sessionStorage lasts as long as the current window or tab is open on the client's browser whereas localStorage persists as long as the browser has not deleted the localStorage data.  

localStorage is different than using cookies in that localStorage is client-side, so the server will not automatically have access to localStorage data.  localStorage can hold much more data than cookies: localStorage can hold 5MB of data per site, whereas cookies can only hold 4KB of data.  The actual amount of data the developer can store is the given storage divided by two since string characters in Javascript are two bytes each.  

##The Canvas API
The HTML5 canvas API provides methods to output graphics using Javascript.  It is low level enough to manipulate the individual pixels of an HTML5 canvas element.  

#Object Creation Patterns  
##Factory Functions   
Factory functions are a way to create objects from a template.  Inside a factory function, an empty object literal is created.  Properties and methods are added to this object and the object is returned from the function.  

There are two limitations of factory functions.  First, every object created from a factory function has a copy of every method defined in the factory function.  Second, checking the "type" of an object is difficult when dealing with an object created from a factory function.
 
##Constructor Functions  
Constructor functions are functions which are intended to be called with the new keyword.  With the new keyword, a new object is created, the value of *this* is pointed at the created object, the code in the function is executed, and finally, if there is not an explicit return, *this* is returned.  

##Objects and Prototypes 
Every object has a prototype object which can be accessed by the "double underscore proto" property.  <code>var foo = Object.create(bar)</code> sets the prototype of <code>bar</code> to <code>foo</code>.  

##Prototypal Inheritance and Behavior Delegation  
When a property or method is looked up on an object, Javascript will look first on the object, and then will traverse the prototype chain to find that property or method.  

From the bottom-up perspective, objects can delegate methods and properties to objects on their prototype chain, and from the top down perspective, objects on the bottom of the prototype chain are said to "inherit" methods and properties.

Properties on a prototype chain can be overridden on an object by locally defining the property on said object.  

##Constructors and Prototypes  
1. Every function has a <code>prototype</code> property which points to an object.  
2. The object pointed to by a function's <code>prototype</code> property, in turn, has a <code>constructor</code> property which points back at the function.
3. A function's <code>prototype</code> property is used when the function is called as a constructor such that any object constructed from said function will have it's prototype set to the "function's prototype object" (i.e. the object pointed to by the function's <code>prototype</code> property.
4. The "Prototype Pattern" of object creation is the following: use constructor functions to create objects, but define shared behaviors between objects on the constructor's <code>prototype</code> object.  

##The Pseudo-classical Pattern and the OLOO Pattern  
The "Pseudo-classical" and "Objects Linking to Other Objects" design patterns allow multiple objects to share state and behavior.  

1. The Pseudo-classical pattern uses a constructor to set states on objects while defining shared methods on the constructor function's prototype object.  

2. The "Objects Linking to Other Objects" pattern defines shared state and behaviors on a prototype object and uses <code>Object.create()</code> to create objects that inherit directly from that prototype object.  

##More Methods on the Object Constructor  
1. <code>Object.create</code> this method returns a new object such that the prototype of said new object is the argument passed in.
2. <code>Object.getPrototypeOf()</code> this method is used to return the prototype object of the argument passed in.
3. <code>Object.defineProperties()</code> this method takes an object as it's first argument, and an object as it's second argument.  The properties passed into the second argument will be defined on the object that is passed as the first argument, and these properties can either be writable or not.  
4. <code>Object.freeze()</code> an object passed into this method will be 'frozen', i.e. the property values which are not objects cannot be changed.  Object references within a frozen object cannot be changed either.  

##Douglas Crockford Lecture: JavaScript the Good Parts  
good parts:
lambda
dynamic objects,
loose typing
Javascript object literals  
lambdas are anonymous functions which 


Inheritance:
classical and prototypal

prototypal inheritance:
class free,
objects inherit from objects, 
differential inheritance (an object contains a link to another object

avoid global variables using closures, return an inner function which enjoys access to variables contained in outer function  

this can be generalized into a constructor pattern (i.e. the module pattern, a powerful constructor pattern).  

power constructors:
1. make an object
2. define variables and function(private members)
3. augment the object with privileged methods
4. return the object

In his lecture **JavaScript: The Good Parts**, Douglas Crockford states that there are four good parts to Javascript:
1. Lambda
2. Dynamic Objects
3. Loose Typing
4. Object Literals

As far as I understand, a lambda in JavaScript is an anonymous function.  JavaScript objects are dynamic.  This means that properties can be added to or removed from JavaScript objects at any time.  Loose typing in JavaScript means that you do not need to explicitly specify the type of a JavaScript object.  Object literals provide an easy way to define objects by simply listing properties and methods as key-value pairs within curly braces.  

According to Crockford, "Inheritance is object-oriented code reuse."  There are two schools of inheritance: classical and prototypal.  Crockford argues that prototypal inheritance is more powerful than classical inheritance since classical inheritance can be simulated using prototypal inheritance but prototypal inheritance cannot be simulated using classical.  

Prototypal inheritance does not use classes, rather, objects inherit properties and methods from other objects via differential inheritance (i.e. an object contains a link to another object).  

Global variables should be avoided in a Javascript program.  One way to avoid using global variables is to use a function closure as a way to scope "private" properties and methods, and then return an object which  uses those properties and methods.  This is called the *module* pattern.  This module pattern can be generalized into the following *power constructor* pattern: 
1. An object is created inside a function.
2. *private* methods and properties are defined inside the function.
3. These methods and properties are added to the object.
4. The object is returned from the function.
