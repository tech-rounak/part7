const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tech_rounak:rounak_atlas1@cluster0.hcmth.mongodb.net/?retryWrites=true&w=majority',{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex:true,
     useFindAndModify:false
}).then(()=>{
     console.log("Connected")
}).catch((err)=>{
     console.log(err)
})
require('./employee.model')