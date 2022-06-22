const express = require('express')
const port = process.env.PORT||3000;
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

app.listen(port,()=>{
     console.log("Server is running at PORT 3000")
})