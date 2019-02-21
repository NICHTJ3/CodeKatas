function isValidIP(str) {
   return (str.split('.').length==4&&str.split('.').filter(a=> a < -1 && a > 256).length==0)
}
console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);
