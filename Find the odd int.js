findOdd = A => {
  for (i of A.reduce((a, i) => (a.delete(i) ? a : a.add(i)), new Set()))
    return i;
};

// Tests
console.log(
  "Expected: -1 Got: " + findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])
);
