// Numbers
const zero = (op) => equation(op,0)
const one = (op) => equation(op,1)
const two = (op) => equation(op,2)
const three = (op) => equation(op,3)
const four = (op) => equation(op,4)
const five = (op) => equation(op,5)
const six = (op) => equation(op,6)
const seven = (op) => equation(op,7)
const eight = (op) => equation(op,8)
const nine = (op) => equation(op,9)

// Operations
const plus = (a) => (b) => a+b
const minus = (a) => (b) => b-a
const times = (a) => (b) => a*b
const dividedBy = (a) => (b) => b/a

// Equation solver
const equation = (op,num) => !op ? num : ~~op(num)

// Tests
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
