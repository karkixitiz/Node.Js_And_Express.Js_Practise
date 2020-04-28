const express= require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const logger=require('./middleware/logger')
const members=require('./Members')

//init express
const app=express()

//init middleware
//app.use(logger)

//Handlebars middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Homepage Route
app.get('/',(req,res)=>res.render('index',{
	title:'Member APP',
	members
}))
//set static folder
app.use(express.static(path.join(__dirname,'public')))


app.use('/api/members',require('./routes/api/members'))

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))