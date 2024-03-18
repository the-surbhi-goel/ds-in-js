# Highest Scoring word

Write a function to find highest scoring word from a string.
Each Letter of a word scores a point according to its position like a=1, b=2, c=3 etc

### Requirements

```
/**
    * Function must accept a string
    * Function must return a word which have highest score
*/
```

### Function Signature

```
/**
 * @param {string}
 * @returns {string}
 */
 function highestScoringWord(string): string;
```

### Example

```
highestScoringWord("Hello my name is Surbhi Goel"); // return Surbhi
```

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function highestScoringWord(s) {
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
```

</details>

<details>
<summary>Click Here for solution 2</summary>

```
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
```

</details>
