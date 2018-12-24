// Add a _ if the length of the string isn't even and then creates an array of groups using a regex match
function solution(str){
  return (str.length%2?str.concat('_'):
    str).match(/../g)
}

// Create pairs using the current and next item of each element
function solution(str){
  var arr=[]
  str.split('').forEach((c,i)=>{
    arr.push(c+(str[i+1]||'_'))
  })
  return arr
}

console.log(solution('abc'), ['ab', 'c_'])
console.log(solution('abcdef') ,['ab', 'cd', 'ef'])

