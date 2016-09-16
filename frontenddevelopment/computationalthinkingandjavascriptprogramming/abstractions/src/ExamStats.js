function average(arr) {
  return arr.reduce(function(prev, curr, arr) {
    return prev + curr;
	}) / arr.length;
}

function weightedAvg(score1, w1, score2, w2) {
  return score1 * w1 + score2 * w2;
}

function studentGrade(score) {
  score = Math.ceil(score);
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
}
