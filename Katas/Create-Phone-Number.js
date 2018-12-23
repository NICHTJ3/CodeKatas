// Creating the string from an array
function createPhoneNumber(numbers) {
  numbers=numbers.join('')
  return '('+numbers.slice(0,3)+') '+numbers.slice(3,6)+'-'+numbers.slice(6)
}

// Adding elements to the array and then returning the string
function createPhoneNumber(numbers){
  numbers.unshift('(')
  numbers.splice(4,0,') ')
  numbers.splice(8,0,'-')
  return numbers.join('')
}

// Turn the array into a string and then use the replace function to add elements to the search results. Note the regex will match all characters supplied
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

// Same as above but will only match digits
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
