const str = "Hello my name is Surbhi Goel";
console.log("Given array is ", str);

// Solution 1
function highestScoringWord1(s) {
  const words = s.split(" ");
  const scores = words.map((word) => {
    let score = 0;
    for (let letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  const highestScore = Math.max(...scores);
  const index = scores.findIndex((i) => {
    return i === highestScore;
  });

  return words[index];
}

const result1 = highestScoringWord1(str);
console.log("Highest scoring word is = ", result1);

// ----------------------------------------

//Solution 2
function highestScoringWord2(s) {
  const words = s.split(" ");
  const scores = words.map((word) => {
    let score = 0;
    for (let letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let index = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
        highestScore = scores[i];
        index = i;
    }
  }

  return words[index];
}

const result2 = highestScoringWord2(str);
console.log("Highest scoring word is = ", result2);
