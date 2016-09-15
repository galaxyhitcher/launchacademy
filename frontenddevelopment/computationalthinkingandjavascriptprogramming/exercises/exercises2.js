function splitString(str, delimiter) {
  var arr = [];

  if (delimiter == '' || delimiter == undefined) {
    for (var i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
    return;
  }

  function getNextElement(string, delimiter) {
    var temp = '';
    var i = 0;
    
    while ((i < string.length) && (string[i] !== delimiter)) {
      temp += string[i];
      i += 1;
    }
    return temp;
  }

  function restOfString(string, delimiter) {
    var rest = '';
    var i = 0;


    while ((i < string.length) && (string[i] !== delimiter)) {
      i++;
    }
    i++;
    
    while (i < string.length) {
      rest += string[i];
      i++;
    }
    return rest;
  }

  while (str.length > 0) {
    if (getNextElement(str, delimiter) != '') {
      arr.push(getNextElement(str, delimiter));
    }
    str = restOfString(str, delimiter);
  }
  for (el in arr) {
    console.log(arr[el]);
  }
}

// console.log(splitString('abc,123,456', ','));
// console.log(splitString('abc,123,456'));
// console.log(splitString('hello', ';'));
// console.log(splitString(';hello;', ';'));

function repeat(string, times) {
  if (parseFloat(times, 10) - parseInt(times, 10) !== 0) {
    return undefined;
  } else if (parseFloat(times, 10) < 0) {
    return undefined;
  }
  var repeated = '';
  for (var i = 0; i < times; i++) {
    repeated += string;
  }
  return repeated;
}

// console.log(repeat('abc', 1));
// console.log(repeat('abc', 2));
// console.log(repeat('abc', -1));
// console.log(repeat('abc', 0));
// console.log(repeat('abc', 'a'));

function startsWith(string, searchString) {
  function buildReference(string, searchString) {
    var reference = '';
    for (var i = 0; i < searchString.length; i++) {
      reference += string[i];
    }
    return reference;
  }

  return searchString == buildReference(string, searchString);
}


// var str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));
// console.log(startsWith(str, 'We put'));
// console.log(startsWith(str, ''));
// console.log(startsWith(str, 'put'));
// 
// var longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));

function toLowerCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if ((string.charCodeAt(i) >= 65) && (string.charCodeAt(i) <= 90)) {
      result += String.fromCharCode(string.charCodeAt(i) + 32);
    } else {
      result += string[i];
    }
  }
  return result;
}

// console.log(toLowerCase('A'));
// console.log(toLowerCase('123'));
// console.log(toLowerCase('abcDEF'));

function substr(string, start, length) {
  var result = '';
  if (parseInt(start, 10) < 0) {
    start = string.length + parseInt(start, 10);
  }
  if (parseInt(length) <= 0) {
    return '';
  }
  for (var i = start; i < parseInt(length) + parseInt(start); i++) {
    if (string[i] == undefined) {
      break;
    }
    result += string[i];
  }
  return result;
}

// var string = 'hello world';
// console.log(substr(string, 2, 4));
// console.log(substr(string, -3, 2));
// console.log(substr(string, 8, 20));
// console.log(substr(string, 0, -20));
// console.log(substr(string, 0, 0));
//

function substring(string, start, end) {
  var length;
  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    end = 0;
  } else if (end == undefined) {
    end = string.length;
  }

  if (String(start) === start) {
    start = 0;
  }

  if (String(end) === end) {
    end = 0;
  }
  
  length = Math.abs(start - end);

  if (end < start) {
    start = end;
  }
  return substr(string, start, length);
}

var string = 'hello world';

// console.log(substring(string, 2, 4));
// console.log(substring(string, 4, 2));
// console.log(substring(string, 0, -1));
// console.log(substring(string, 2));
// console.log(substring(string, 'a'));
// console.log(substring(string, 8, 20));

function rot13(word){
  var rotated = '';

  function lowercaseLetterToNormalAlphabetNumber(letter) {
    var lettercode = letter.charCodeAt(0);
    return lettercode - 96;
  }

  function rotateNormalAlphabetNumber(num) {
    return (num + 13) % 26;
  }

  function normalAlphabetNumberToLowercaseLetter(num) {
    return String.fromCharCode(num + 96);
  }

  function uppercaseLetterToNormalAlphabetNumber(letter) {
    var lettercode = letter.charCodeAt(0);
    return lettercode - 64;
  }

  function normalAlphabetNumberToUppercaseLetter(num) {
    return String.fromCharCode(num + 64);
  }

  for (var i = 0; i < word.length; i++) {
    var letterCode = word[i].charCodeAt(0);
    var letter = word[i];
    if (letterCode > 96 && letterCode > 123) {
      rotated += normalAlphabetNumberToLowercaseLetter(rotateNormalAlphabetNumber(lowercaseLetterToNormalAlphabetNumber(letter)));
    } else if (letterCode > 64 && letterCode < 91) {
      rotated += normalAlphabetNumberToUppercaseLetter(rotateNormalAlphabetNumber(uppercaseLetterToNormalAlphabetNumber(letter)));
    } else {
      rotated += letter;
    }
  }

  return rotated;
}

console.log(rot13(rot13('Teachers enter the door, but you must enter by yourself.')));
