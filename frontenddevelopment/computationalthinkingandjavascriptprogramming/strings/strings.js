var firstName = "Louis";
var lastName = "Heimel";

fullName = firstName + ' ' + lastName;

//console.log(fullName);

// console.log(fullName.split(' '));

var language = "JavaScript";

idx = language.indexOf('S');
// console.log(idx);

var charCode = language.charCodeAt(idx);

// console.log(charCode);

// console.log(String.fromCharCode(charCode));

var lastA = language.lastIndexOf('a');

// console.log(lastA);

var a = 'a';
var b = 'b';

// console.log(a > b);

b = b.toUpperCase();

// console.log(a > b);

var aIndex;
var vIndex;

aIndex = language.indexOf('a');
vIndex = language.indexOf('v');

// console.log(language.substr(aIndex, 4));

// console.log(language.substr(vIndex, 4));

// console.log(language.substring(aIndex, 4));
// 
// console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too.';

var compound_sentence = fact1 + ' and ' + fact2.toLowerCase();

// console.log(compound_sentence);

// console.log(fact1[0]);
// console.log(fact2[0]);

var pi = 22 / 7;

// console.log(pi.toString().lastIndexOf('14'));
//
// var boxNumber = 356.toString();

var boxNumber = (356).toString();

// console.log(boxNumber);
// 
// console.log(typeof boxNumber);
// 
// boxNumber = parseInt(boxNumber, 10);
// 
// console.log(typeof boxNumber);
// 
// boxNumber = boxNumber + '';
// 
// console.log(typeof boxNumber);

var name = prompt('What is your name?');

if (name.endsWith('!')) {
  console.log('HELLO' + ' ' + name.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name);
}
