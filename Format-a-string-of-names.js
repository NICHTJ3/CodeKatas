// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

// Solution one
function list(names) {
  names = names.map(a => a.name)
  switch (names.length) {
    case 0:
      return ''
    case 1:
      return names[0]
    case 2:
      return names[0] + " & " + names[1]
    default:
      formattedStringOfNames = ''
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (i == names.length - 1) {
          formattedStringOfNames += name
        }
        else if (i < names.length - 2) {
          formattedStringOfNames += name + ', '
        }
        else {
          formattedStringOfNames += name + ' & '
        }
      }
      return formattedStringOfNames
  }
}

// Solution two
//Uses a map and a replace

//Solution three
//Uses a reduce
function list (names){
  return names.reduce((prev, current, index, array) => {
    if (index == 0) {
      return current.name;
    }
    else if (index == array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

var list = (names) => names.map(function (person) { return person.name; }).join(", ").replace(/,(?!.*,)/gmi, " & ");
//Tests
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Expected: Bart, Lisa, Maggie, Homer & Marge')
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie')
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa')
console.log(list([{ name: 'Bart' }]), 'Bart')
console.log(list([]), '')
