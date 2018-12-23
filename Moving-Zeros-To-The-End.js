// Move an element from it's current index to the end of the array must be iterated more than once for unknown reason
var moveZeros = function (arr) {
  for(var j=0;j<2;j++){
    arr.forEach((element,i)=>{
      if (Number.isInteger(element) && element === 0) {
        arr.splice(i,1)
        arr.push(element)
      }else{
        arr.splice(i,1)
        arr.unshift(element)
      }
    });
  }
  return arr
}

// Create two arrays. One of zeros and the other of the rest and join them to return the result
var moveZeros = function (arr) {
  var zeros=[]
  var others=[]
  arr.forEach((element)=>{
    if (Number.isInteger(element) && element === 0) {
      zeros.push(element)
    }else{
      others.push(element)
    }
  })
  return others.concat(zeros)
}

// Creates two arrays like the above solution but uses a filter to do so
var moveZeros = function (arr) {
  return arr.filter(e=>e!==0).concat(arr.filter(e=>e===0))
}


// Tried to figure out the itteration issue kindof just mixed two of the previous solutions
var moveZeros = function (arr) {
    var temp=arr.filter(e=>e!==0)
    arr.forEach((element,i)=>{
      if (Number.isInteger(element) && element === 0) {
        temp.push(element)
      }
    });
  return temp 
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
console.log(moveZeros([0,0,0,0,0,0,0,0,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

