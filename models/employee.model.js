const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
     empid:Number,
     ename:String,
     desig:String,
     basic:Number
})
module.exports= mongoose.model('Employee',employeeSchema);

