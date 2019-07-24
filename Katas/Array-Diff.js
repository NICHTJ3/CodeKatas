//Solutions

//Filter array for things not in the other
function array_diff(a, b) {
  return a.filter(c => !b.includes(c));
}

// First attempt does not work for random arrays
function array_diff(a, b) {
  let temp = [];
  for (let [, e] of a.entries()) {
    if (b.indexOf(e) < 0) {
      temp.push(e);
    }
  }
  return temp;
}

// Tests
console.log(array_diff([], [4, 5]), []);
console.log(array_diff([1, 2, 2], [2]), [1]);
console.log(array_diff([3, 4], [3]), [4]);
console.log(array_diff([1, 8, 2], []), [1, 8, 2]);
