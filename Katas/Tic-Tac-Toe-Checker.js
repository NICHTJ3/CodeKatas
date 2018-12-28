const column=(board,n) =>board.map(x=>x[n])
const diagonal=(board,reversed) => reversed ?
  board.slice().reverse().map((element,i)=>element[i]):
  board.map((element,i)=>element[i])

const isSolved = (board)=>{
  //Get columns and diagonals
  let columns=[]
  for(i=0;i<3;i++)columns.push(column(board,i))
  let diagonals=[]
  for(i=0;i<2;i++)diagonals.push(diagonal(board,i==0))

  //Check for winner. Sets winner to -1 for no solve as default
  let winner=-1
  board.forEach((row)=>{
    if (row.every(v=>v===row[0])&&row[0]!=0)
      winner= row[0]
  });
  columns.forEach((column)=>{
    if (column.every(v=>v===column[0])&&column[0]!=0)
      winner= column[0]
  })
  diagonals.forEach((diagonal)=>{
    if (diagonal.every(v=>v===diagonal[0])&&diagonal[0]!=0)
      winner= diagonal[0]
  })

  //Check for draw
  if(board.every((x)=>x.every((y)=>y!=0)))
    winner = 0

  //Return winner
  return winner
}

// Very Cheeky uses regex to check solved
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   return (/222|2...2...2|2....2....2|2..2..2/.test(board))?2:
     (/111|1...1...1|1....1....1|1..1..1/.test(board))?1:
     (/0/.test(board))?-1:0
}

console.log(isSolved([[0,0,1],
  [0,1,2],
  [2,1,0]]) === -1);


console.log(isSolved([[2,2,2],
  [0,1,2],
  [2,1,0]]) === 2);
