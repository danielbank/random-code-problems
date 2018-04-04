/*
Input:
51
Output:
0.64286
Expected:
0.65625
*/

/**
 * @param {number} N
 * @return {number}
 */
const soupServings = (N) => {
    const soupBowls = [N, N];
    const results = flatten(recursiveServe(soupBowls));
    let numA = 0;
    let numTie = 0;
    results.forEach((result) => {
      if (result === 'a') numA++;
      if (result === 'tie') numTie++;
    });
    console.log(numA, numTie, results.length);
    return ((numA + 0.5 * numTie) / results.length);
};

const recursiveServe = (soupBowls) => {
  return [1,2,3,4].map((i) => {
    let nextSoupBowls = [];
    if (i === 1) nextSoupBowls = serve1(soupBowls);
    if (i === 2) nextSoupBowls = serve2(soupBowls);
    if (i === 3) nextSoupBowls = serve3(soupBowls);
    if (i === 4) nextSoupBowls = serve4(soupBowls);
    if (nextSoupBowls[0] <= 0 && nextSoupBowls[1] <= 0) {
      console.log(nextSoupBowls[0], nextSoupBowls[1], ' tie');
      return 'tie';
    }
    if (nextSoupBowls[0] < 0) {
      console.log(nextSoupBowls[0], nextSoupBowls[1], ' a');
      return 'a';
    }
    if (nextSoupBowls[1] < 0) {
      console.log(nextSoupBowls[0], nextSoupBowls[1], ' b');
      return 'b';
    }
    return recursiveServe(nextSoupBowls);
  });
};

const serve1 = ([a, b]) => [a - 100, b];
const serve2 = ([a, b]) => [a - 75, b - 25];
const serve3 = ([a, b]) => [a - 50, b - 50];
const serve4 = ([a, b]) => [a - 25, b - 75];

const flatten = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}
