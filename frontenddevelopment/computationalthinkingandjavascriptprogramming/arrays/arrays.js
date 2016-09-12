function lastInArray(arr) {
  return arr[arr.length - 1];
}

// console.log(lastInArray([1, 2, 3, 4, 5]));

function rollCall(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// rollCall(['Woody', 'Buzz', 'Jessie']);

var nums = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  
  return result;
}

// console.log(reverseArr(nums));

function find(val, arr) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      index = i;
      break;
    }
  }

  return index;
}

// console.log(find(4, [1, 2, 3, 4, 5]));

function arrToString(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str += String(arr[i]);
  }

  return str;
}

// console.log(arrToString([1, 2, 3, 4, 5]));

function push(arr, val) {
  arr[arr.length] = val;
  return val;
}

// arr = [1, 2, 3, 4, 5];
// 
// console.log(push(arr, 6));
// 
// console.log(arr);

function pop(arr) {
  val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}

// arr = [1, 2, 3];
// console.log(pop(arr));
// console.log(arr);

function unshift(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = val;
  return arr;
}

// arr = [1, 2, 3];
// 
// console.log(unshift(arr, 0));

function shift(arr) {
  var shifted = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return shifted;
}

// var arr = [1, 2, 3];
// console.log(shift(arr));
// console.log(arr);

function indexOf(arr, val) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
 
  return index;
} 

// arr = [1, 2, 3, 4, 5, 3];
// 
// console.log(indexOf(arr, 3));
// console.log(indexOf(arr, 7));

function lastIndexOf(arr, val) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      index = i;
    }
  }
  
  return index;
}

// console.log(lastIndexOf(arr, 3));

function slice(arr, start, end) {
  var result = [];
  for (var i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));

function splice(arr, start, num) {
  var result = [];
  var count = 0;
  function removeAt(arr, i) {
    var val = arr[i];
    for (; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }

    pop(arr);
    return val;
  }

  for (var i = start; i < start + num; i++) {
    push(result, arr[i]);
  }

  for (var i = 0; i < num; i++) {
    removeAt(arr, start);
  }

  return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(splice(arr, 2, 5));
// console.log(arr);

function concat(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    push(result, arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    push(result, arr2[i]);
  }
  return result;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));
//

function join(arr, str) {
  result = '';
  for (var i = 0; i < arr.length - 1; i++) {
    result += arr[i].toString() + str;
  }

  result += arr[arr.length - 1].toString();
  return result;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));
// console.log(join([1, 2, 3], ' and '));

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));


function nthElementOf(arr, index) {
  return arr[index];
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(nthElementOf(digits, 3));
// console.log(nthElementOf(digits, 8));
// console.log(nthElementOf(digits, -1));

function lastNOf(arr, length) {
  result = [];
  if (length > arr.length) {
    length = arr.length;
  }

  for (var i = arr.length - length; i < arr.length; i++) {
    result.push(arr[i]);
  }
  
  return result;
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));
// console.log(lastNOf(digits, 6));

function endsWith(beginningArr, endingArr) {
  result = [];
  result.push(beginningArr[0]);
  result.push(endingArr[endingArr.length - 1]);
  return result;
}

// console.log(endsWith([4, 8, 15], [16, 23, 42]));

function oddElementsOf(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      result.push(arr[i]);
    }
  }
 
  return result;
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));

function combinedArray(even, odd) {
  var result = [];
  for (var i = 0; i < even.length; i++) {
		result.push(even[i]);
		result.push(odd[i]);
	}
  
  return result;
}

// var digits = [4, 8, 15, 16, 23, 42];
// var letters = ['A', 'L', 'V', 'A', 'R', 'H'];
// 
// console.log(combinedArray(digits, letters));

function combineReverse(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  return arr.concat(temp.reverse());
}

// console.log(combineReverse([1, 2, 3]));

function joinArray(arr, joiner) {
  var result = '';
  if (joiner == undefined) {
    joiner = '';
  }
 
  for (var i = 0; i < arr.length - 1; i++) {
    result += String(arr[i]) + joiner;
  }
  
  return result + String(arr[arr.length - 1]);
}

// console.log(joinArray(['a', 'b', 'c'], '+'));
// console.log(joinArray([1, 4, 1, 5, 9, 2, 7]));

function sortDescending(arr) {
  arr.sort(function(a, b) { return b - a; });
}

// arr = [23, 4, 16, 42, 8, 15];
// sortDescending(arr)
// console.log(arr);

function matrixSums(arr) {
  return arr.map(function(e) { return e.reduce(function(a, e) { return a + e; }); });
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));

function uniqueElements(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));

function missing(sorted) {
  var result = [];
  for (var i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) {
      result.push(i);
    }
  }
  
  return result;
}

// console.log(missing([-3, -2, 1, 5]));
// console.log(missing([1, 2, 3, 4]));
// console.log(missing([1, 5]));
// console.log(missing([6]));
