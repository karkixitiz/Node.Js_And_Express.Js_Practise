// # HELLO WORLD
/* function sayHello(name){
	console.log('Hello ' +name) 
}
sayHello('kiran karki')
 */
//Global Object in javascript
//in node js we have global instead of window in browser
/* setTimeout()
clearTimeout()

setInterval()
clearInterval() */


//# MODULE

//console.log(module)

/* const logger=require('./logger')
logger.log('message') */
//console.log(logger)

// Path Module

/* const path=require('path')
var pathObj=path.parse(__filename)
console.log(pathObj) */


// OS module

/* const os=require('os')
var totalMemory=os.totalmem()
var freeMemory=os.freemem()
//console.log('total memory: ' +totalMemory) 
//Template string
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`) */

// module file
/* 
var fs=require('fs')
// const files=fs.readdirSync('./') //synchronous meathod
// console.log(files)

fs.readdir('./',function(err,files){
	if(err) console.log('error',err)
	else
	console.log('Results',files)
}) */

//Events

/* const EventEmitter=require('events')
//const emitter=new EventEmitter();
const Logger=require('./logger')
const logger=new Logger()
//Register a listener
logger.on('messageLogged',(arg)=>{
	console.log('Listener Called',arg)
})
 logger.log('message') */


 // HTTP Module

 const http=require('http')

 const server=http.createServer((req,res)=>{
	 if(req.url==='/'){
		 res.write('Hello world')
		 res.end()
	 }

	 if(req.url==='/api/courses'){
		 res.write(JSON.stringify([1,2,3]))
		 res.end()
	 }
 })
 server.listen(3000)

 //Register event handler
 server.on('connection',(socket)=>{
	 console.log('New Connection...')
 })

 console.log('Listening on port 3000')