describe("average", function() {
  it("returns an average of an array", function() {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});

describe("weightedAvg", function() {
  it("returns a weighted average given two values and two weights", function() {
    expect(weightedAverage(2, 0.5, 4, 0.5)).toBe(2);
  });
});

describe("studentGrade", function() {
  it("returns a string which describes a student\'s grade", function() {
    expect(studentGrade(90)).toBe('90 (A)');
  });
});

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

describe("getExamStats", function() {
  it("returns an object summarizing the results of an exam", function() {
    expect(getExamStats(studentScores, 0)).toEqual({
																									average: 75.6,
																									minimum: 50,
																									maximum: 100,
 																								});
  });
});
