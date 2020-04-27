var fs = require("fs");

fs.readFile('input.txt', function (err, data) {  //program does not wait for file reading and proceeds to print program ended
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");