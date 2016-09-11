function printOddNumbers(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// printOddNumbers(15);

function multiplesOfThreeAndFive() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(String(i) + '!');
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log(String(i));
    }
  }
} 

// multiplesOfThreeAndFive();

function printMultiples(number) {
  for (var i = 100; i > 0; i--) {
    if (i % number == 0 && i % 2 == 1) {
      console.log(i);
    }
  }
}

// printMultiples(17);

// console.log('next test');

// printMultiples(21);

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz();

function isPrime(number) {
  if (number == 0) return false;
  if (number == 1) return false;
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(43)); // true
// console.log(isPrime(55)); // false
// console.log(isPrime(0)); //false

function isXor(val1, val2) {
  if (val1 && !val2 || !val1 && val2) {
    return true;
  } else {
    return false;
  }
}

// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false
// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
// console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false

function guessPassword() {
  var password = 'password';
  var guess;
  for(var i = 0; i < 3; i++) {
    guess = prompt('What is the password: ');
    if (guess == password) {
      alert('You have successfully logged in.');
      return;
    } else {
      continue;
    }
  }
  alert('You have been denied access.');
}

// guessPassword();

function studentGrade(score) {
	var gradeSum = 0;
  var letterGrade;
	var gradeAvg;
  for(var i = 0; i < 3; i++) {
		gradeSum += parseInt(prompt("Enter score " + String(i + 1)));
  }
	gradeAvg = gradeSum / 3;
  if (gradeAvg >= 90) {
    letterGrade = 'A';
  } else if (gradeAvg >= 70) {
    letterGrade = 'B';
  } else if (gradeAvg >= 50) {
    letterGrade = 'C';
  } else {
    letterGrade = 'F';
  }
  console.log('Based on the average of your 3 scores your letter grade is ' + '\"' + letterGrade + '\".');
}

// studentGrade(90);

function gcd(a, b) {
  if (a % b == 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}

// console.log(gcd(12, 4));
// console.log(gcd(15, 10));
// console.log(gcd(9, 2));

function checkGoldbach(n) {
  var flag = false;
  for(var i = 1; i <= n / 2; i++) {
    if (isPrime(i) && isPrime(n - i)) {
      flag = true;
      console.log(String(i) + ' ' + String(n - i));
    }
  }
  if (!flag) {
    console.log(null);
  }
}

// checkGoldbach(100); 
// checkGoldbach(3);
// console.log('next');
// checkGoldbach(12);
// console.log('next');
// checkGoldbach(4);

function generatePattern(n) {
	function generateRow(n, cols) {
		var str = '';
		for (var i = 1; i <= n; i++) {
			str += String(i);
		}
		for(var j = 0; j < cols - n; j++) {
			str += '*';
		}
		console.log(str);
	}
  for(var i = 1; i <= n; i++) {
    generateRow(i, n);
  }
}

// console.log(generatePattern(7));

function indexOf(firstString, secondString) {
  var secondStringLength;

  function myLength(str) {
		var i = 0;
		while (!!str[i]) {
			i += 1;
		}
		return i;
  }
  
  firstStringLength = myLength(firstString);
  secondStringLength = myLength(secondString);

  function stringMatched(str1, str2, index) {
    str2Length = myLength(str2);
    for (var i = 0; i < str2Length; i++) {
      if (str1[index + i] !== str2[i]) {
        return false;
      }
    }
    return true;
  }

  for (i = 0; i < firstStringLength; i++) {
    if (stringMatched(firstString, secondString, i)) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf('Some strings', 's'));
// console.log(indexOf('Blue Whale', 'Whale'));
// console.log(indexOf('Blue Whale', 'Blute'));
// console.log(indexOf('Blue Whale', 'leB'));

function lastIndexOf(firstString, secondString) {
  var tempIndex = -1;
  function myLength(str) {
		var i = 0;
		while (!!str[i]) {
			i += 1;
		}
		return i;
  }

  function stringMatched(str1, str2, index) {
    str2Length = myLength(str2);
    for (var i = 0; i < str2Length; i++) {
      if (str1[index + i] !== str2[i]) {
        return false;
      }
    }
    return true;
  }
  
  for (var i = 0; i < myLength(firstString); i++) {
    if (stringMatched(firstString, secondString, i)) {
      tempIndex = i;
    }
  }
  
  return tempIndex;
}

console.log(lastIndexOf('SomeStrings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));

function trim(str) {
  function trimFront(str) {
    var i = 0;
    var restOfString = '';
		while (str[i] == ' ') {
			i++;
		}
		while (i < str.length) {
			restOfString += str[i];
			i += 1;
		}
    return restOfString;
  }

  function trimBack(str) {
    var i = str.length - 1;
    var frontOfString = '';
    while (str[i] == ' ') {
      i--;
    }
    while (i >= 0) {
      frontOfString = str[i] + frontOfString;
      i -= 1;
    }
    return frontOfString;
  }
  return trimBack(trimFront(str)); 
}
