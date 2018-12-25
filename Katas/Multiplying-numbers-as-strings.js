// This kata is broken as the solution is still returned with scientific notation
function multiply(a,b) {
  // Find strings that start with zero to remove them
  var solution = Number(a) * Number(b)
  return solution.length>1 ? solution.replace(/^[0|\D]*/,'') : solution
}

//Tests
// Some simple multiplications
console.log(multiply("2", "3"), "6");
console.log(multiply("30", "69"), "2070");
console.log(multiply("11", "85"), "935");

// Some corner case
console.log(multiply("2" ,"0"), "0");
console.log(multiply("0", "30"), "0");
console.log(multiply("0000001", "3"), "3");
console.log(multiply("1009", "03"), "3027");

// Some big multiplications
console.log(multiply("98765", "56894"), "5619135910");
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
