// Easiest implimentation uses javascripts toString
function rgb(r, g, b){
  const convert = (val)=>{
    return (
      val<0?'00':
      val>255?'FF':
      val>15 ? val.toString(16): '0'+val.toString(16)) .toUpperCase()
  }
  return convert(r)+convert(g)+convert(b)
}

// Tests
console.log(rgb(66, 134, 244), '4286F4')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
