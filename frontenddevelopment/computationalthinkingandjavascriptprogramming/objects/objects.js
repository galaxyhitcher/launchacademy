var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, prop) {
  return Object.keys(obj).includes(prop);
}

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

var wins = {
  steve: 3, 
  susie: 4,
};

function incrementProperty(obj, prop) {
  if (objectHasProperty(obj, prop)) {
    obj[prop] += 1;
  } else {
    obj[prop] = 1;
  }
  
  return obj.prop;
}
 
// incrementProperty(wins, 'susie');
// console.log(wins);
// incrementProperty(wins, 'lucy');
// console.log(wins);

function copyProperties(obj1, obj2) {
  var count = 0;
  for (prop in obj1) {
    obj2[prop] = obj1[prop];
    count += 1;
  }

  return count;
}

// var hal = {
//   model: 9000,
//   enabled: true,
// };
// 
// var sal = {};
// copyProperties(hal, sal);
// console.log(sal);
      
function wordCount(str) {
  var obj = {};
  str.split(' ').forEach(function(word) { incrementProperty(obj, word) });
  return obj;
}

// console.log(wordCount('box car cat bag box'));

function radiansToDegrees(radians) {
  return 180 / (Math.PI * radians);
}

//var val = -180;
//
//console.log(Math.abs(val));

// console.log(Math.sqrt(16777216));

//console.log(Math.pow(16, 6));

// var a = 50.72;
// var b = 49.2;
// var c = 49.86;
// 
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

function getRandom(lower, upper) {
  var swap;
  if (lower == upper) {
    return lower;
  } else if (lower > upper) {
    swap = lower;
    lower = upper;
    upper = swap;
  }

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

// console.log(getRandom(10, 20));

function dateSuffix(num) {
  if (num == 1) {
    return 'st';
  } else if (num == 2) {
    return 'nd';
  } else if (num == 3) {
    return 'rd';
  } else {
    return 'th';
  }
}
  
var today = new Date;

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formattedMonth(date) {
	return 'Today\'s day is ' + daysOfWeek[date.getDay() - 1] + ', ';
}

function formattedYear(date) {
  return date.getYear() + 1900;
}

function formattedDay(date) {
	return months[date.getMonth()] +  ' the ' + date.getDate() + dateSuffix(date.getDate()) + ', ';
}

function formattedDate(date) {
  return formattedMonth(date) + formattedDay(date) + date.getFullYear(); 
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log(formattedDate(today));
console.log(today.getTime());
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));

var nextWeek = new Date(today);

console.log(nextWeek == today);

console.log(nextWeek.toDateString() == today.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() == nextWeek.toDateString());

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(val) {
  return String(val).length < 2 ? '0' + val : val;
}

console.log(formatTime(today));

function greetings(arr, obj) {
  console.log('Hello, ' + arr.join(' ') + '! Nice to have a ' + obj.title + ' ' + obj.occupation + ' around.');
}

function repeatedCharacters(string) {
  var result = {};
  var lowerCaseStringSplit = string.toLowerCase().split('');

  for (key in lowerCaseStringSplit) {
    if (lowerCaseStringSplit[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  for (var key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

console.log(repeatedCharacters('the quick brown fox jumps over the lazy dog.'));

var title = 'The Three-Body Problem';

// strings should be single quoted

var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;

// multiple assignment should be avoided, and variable names should be camel-cased

var completed = lastPageRead === 400;

//strict equality operator should be used

if (finishedBook()) {
  console.log('You have finished reading this book.');
}

// there should be braces around multi-line if statements

// finally, the style guide recommends using two spaces to indent code and surrounding operators with spaces
