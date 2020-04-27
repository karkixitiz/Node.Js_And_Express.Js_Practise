var fs=require('fs')
var data=fs.readFileSync('input.txt') // program blocks untile it reads the file and then only it proceeds to end the program
console.log(data.toString());
console.log("Program Ended");