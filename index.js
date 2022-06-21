const express = require('express')
require('./models/db');
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
     extended:true
}))
app.get('/',(req,res)=>{
     res.render('home');
})
app.set('view engine','ejs')
const empController = require('./Controllers/employeeController')
app.use('/employee',empController)

app.listen(3000,()=>{
     console.log("Server is running at PORT 3000")
})