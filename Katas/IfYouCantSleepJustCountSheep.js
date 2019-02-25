function countSheep(num) {
  let count="";
  for (var i = 0, len = num; i < len; i++) {
    count+=`${i+1} sheep...`
  }
  return count
}

function countSheep(num) {
  return Array(num).fill(0).reduce((total, _, currentIndex) => total+=`${currentIndex+1} sheep...`, "");
  // return [...Array(num)].reduce((total, _, currentIndex) => total+=`${currentIndex+1} sheep...`, "");
}

console.log(countSheep(1) === "1 sheep...");
console.log(countSheep(2) === "1 sheep...2 sheep...");
console.log(countSheep(3) === "1 sheep...2 sheep...3 sheep...");
