function myForEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// var min = Infinity;
// var getMin = function(value) {
//   min = value <= min ? value : min;
// };
// 
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);

function myFilter(array, func) {
  var result = [];
  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });
  
  return result;
}

// var isPythagoreanTriple = function(triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };
// 
// console.log(myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
//           {a: 1, b: 2, c: 3}], isPythagoreanTriple));

function myMap(array, func) {
  var result = [];
  array.forEach(function(element, index, array) {
    result.push(func(array[index]));
  });

  return result;
}

// var plusOne = function(n) { return n + 1; };
// 
// console.log(myMap([1, 2, 3, 4], plusOne));

// function getBooksTitle(books) {
//   return myMap(books, getTitle);
// }

// var books = [
//   { title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   { title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics',
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];
// 
// var getTitle = function(book) {
//   return book['title'];
// };
// 
// console.log(getBooksTitle(books, getTitle));
// console output
/* [ 'JavaScript and JQuery: Interactive Front-End Web Development',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics' ] */

function myReduce(array, func, initial) {
  var value, index;

  if (initial) {
    value = initial;
    index = 0;
  } else {
    value = array[0];
    index = 1;
  }

  array.slice(index).forEach(function(element) {
    value = func(value, element);
  });

  return value;
}

// var smallest = function(result, value) {
//   return result <= value ? result : value;
// };
// 
// console.log(myReduce([5, 12, 15, 1, 6], smallest));
//

function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

// var isAString = function(value) {
//   return typeof value === 'string';
// };
// 
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(arr) {
  return arr.map(function(dimensions) {
    return dimensions[0] * dimensions[1];
  }).reduce(function(prev, curr, areas) {
    return prev + curr;
  });
}

function totalSquareArea(arr) {
  // filter down to squares
  // map dimensions to areas
  // reduce to total area
  return arr.filter(function(dimensions) {
              return dimensions[0] === dimensions[1];
            })
            .map(function(dimensions){
              return dimensions[0] * dimensions[1];
            })
            .reduce(function(prev, curr, areas) {
              return prev + curr;
            });
}

// console.log(totalArea(rectangles));
// console.log(totalSquareArea(rectangles));
//
var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// function processReleaseData(data) {
//   // filter down to the objects which have both title and id data present
//   // map to objects which have id and title data for each release
//   return data.filter(function(movie) {
//         return movie.id && movie.title;
//       })
//       .map(function(movie) {
//         return {id: movie.id, title: movie.title};
//       });
// };
// 
// console.log(processReleaseData(newReleases));

function octalToDecimal(number) {
  // split number into array of digits
  // reverse array
  // multiply by powers of 8
  // sum array
  return number.split('')
               .reverse()
               .map(function(current, index, digits) {
                 return current * Math.pow(8, index);
               })
               .reduce(function(prev, curr, index) {
                 return prev + curr;
               });
}

// console.log(octalToDecimal('011'));

function anagram(word, list) {
  // filter through list
  return list.filter(function(element) {
    var letters = element.split('');
    var lettersObj = {};
    var wordObj = {};
    var flag = true;
    for (var i = 0; i < letters.length; i++) {

      lettersObj[letters[i]] = (lettersObj[letters[i]] ? lettersObj[letters[i]] + 1 : 1);
    }
    
    for (i = 0; i < word.split('').length; i++) {
      wordObj[word.split('')[i]] = wordObj[word.split('')[i]] + 1 || 1;
    }
    Object.keys(lettersObj).forEach(function(key) {
      if (lettersObj[key] != wordObj[key]) {
        flag = false;
      }
    });
    
    Object.keys(wordObj).forEach(function(key) {
      if (wordObj[key] != lettersObj[key]) {
        flag = false;
      }
    });
    
    return flag;
	});
}

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(function(band) {
    band.name = band.name.split(' ')
										.map(function(word) {

											return word[0].toUpperCase() + word.slice(1);
										})
                    .map(function(word) {
											return word.split('')
																 .filter(function(letter) { return letter !== '.' })
															   .join('');
										})
  									.join(' ');
    band.country = 'Canada';
    return band;
  });
}

// console.log(processBands(bands));
// 
// [ { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function average(arr) {
  return arr.reduce(function(prev, curr, arr) {
    return prev + curr;
	}) / arr.length;
}

function sum(arr) {
  return arr.reduce(function(prev, curr, arr) {
    return prev + curr;
  });
}

function weightedAvg(score1, w1, score2, w2) {
  return (score1 * w1) + (score2 * w2);
}

function studentGrade(score) {
  score = Math.round(score);
  if (score <= 100 && score >= 93) {
    return String(score) + ' (A)';
  } else if (score >= 85 && score <= 92) {
    return String(score) + ' (B)';
  } else if (score >= 77 && score <= 84) {
    return String(score) + ' (C)';
  } else if (score >= 69 && score <= 76) {
    return String(score) + ' (D)';
  } else if (score >= 0 && score <= 59) {
    return String(score) + ' (F)';
  }
}

function getExamStats(scores, i) {
  var scoreArr = [];
  for (var score in scores) {
    scoreArr.push(scores[score]);
  }

  var scoreData = scoreArr.map(function(student) {
    return student.scores.exams[i];
  });

  var min = scoreData.reduce(function(prev, current, data) {
    return current < prev ? current : prev;
  });

  var max = scoreData.reduce(function(prev, current, data) {
    return current > prev ? current : prev;
  });

  var avg = average(scoreData);

  return {
           average: avg,
           minimum: min,
           maximum: max,
         };
}

function generateClassRecordSummary(scores) {
  var numberOfExams = 0;
  var exams = [];
  var students = [];
  var studentGrades;

  for (var record in scores) {
    students.push(scores[record]);
  }

  numberOfExams = students[0].scores.exams.length;

  for (var i = 0; i < numberOfExams; i++) {
    exams.push(getExamStats(scores, i));
  }

  studentGrades = students.map(function(student) { return studentGrade(weightedAvg(average(student.scores.exams), .65, sum(student.scores.exercises), .35)) });
  // studentGrades = students.map(function(student) {
  //   return studentGrade(weightedAvg(average(student.exams), 0.65, average(student.exercises), 0.35));
  // });
  
  return {
           studentGrades: studentGrades,
           exams: exams,
        }
 };
 
console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
