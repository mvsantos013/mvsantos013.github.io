/** This function generates n elements for the Fibonacci sequence.
 *	@param n number: Number of elements to generate. (must be >= 1).
 *	@returns number[]: Elements on the fibonnaci sequence.
 */
const fibonacci = (n: number): number[] => {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }
  if (n === 1) {
    return [1];
  }

  const result: number[] = [1, 1];

  for (let i = 2; i < n; i++) {
    const previousElement: number = result[i - 1];
    const previous2Element: number = result[i - 2];
    const nextElement: number = previousElement + previous2Element;
    result.push(nextElement);
  }

  return result;
};

// Automated tests for assuring the code is correct
const tests: { [key: number]: number[] } = {
  1: [1],
  2: [1, 1],
  3: [1, 1, 3],
  5: [1, 1, 2, 3, 5],
  6: [1, 1, 2, 3, 5, 8],
  8: [1, 1, 2, 3, 5, 8, 13, 21],
};

Object.entries(tests).forEach(([n, expectedAnswer]) => {
  const result: number[] = fibonacci(parseInt(n));

  if (JSON.stringify(result) !== JSON.stringify(expectedAnswer)) {
    throw new Error(
      `Test failed for n=${n}. Expected ${expectedAnswer}. Got ${result}.`
    );
  }

  console.info(`Test for n=${n} has passed.`);
});
