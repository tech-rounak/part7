const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("Connected")
}).catch((err)=>{
     console.log(err)
})
require('./employee.model')