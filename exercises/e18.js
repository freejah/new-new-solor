/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  const discoveryYears = asteroids
  .map(asteroid => asteroid.discoveryYear);

  const count = discoveryYears
  .reduce((a, num) => {
    a[num] = (a[num] || 0) + 1;
    return a;
  }, {});

  let maxOccurrences = -1;
  let yearWithMostOccurrences = null;

  // Iterate over the keys using a for...in loop
  for (let num in count) {
    // Ensure the key is not inherited from the prototype chain
    if (count[num] !== undefined) {
      const occurrences = count[num];
      if (occurrences > maxOccurrences) {
        maxOccurrences = occurrences;
        yearWithMostOccurrences = Number(num);
      }
    }
  }

  return yearWithMostOccurrences;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
