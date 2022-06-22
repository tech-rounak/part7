const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Employee = mongoose.model('Employee')
router.get('/',(req,res)=>{
     res.render("NewEmp",{msg:''});
})
router.post('/',async(req,res)=>{
     const emp = new Employee()
     emp.empid = req.body.empid
     emp.ename = req.body.ename
     emp.desig = req.body.desig
     emp.basic = req.body.basic
     const empDB = await emp.save((err,data)=>{
          if(!err)
               res.render("NewEmp",{msg:"Data SAVED Sucessfully"})
     })
    
})

 router.get("/show",async(req,res)=>{
          const emp = await Employee.find((err,data)=>{
               if(!err)
               res.render('showEmpDetails',{data:data});
          })
     })
router.get("/delete/:id",(req,res)=>{
          Employee.findByIdAndDelete(req.params.id,(err,data)=>{
               if(!err)
               res.redirect("/employee/show");
          })
     })
router.get("/edit/:id",(req,res)=>{
     // console.log(req.params.id);
      Employee.findById(req.params.id,(err,data)=>{
               if(!err)
               res.render("Edit",{data:data});
          })
     
})
router.post("/update",(req,res)=>{
     const _id=req.params._id;
     // console.log(req.params.id);

      Employee.findByIdAndUpdate({_id:req.body._id},req.body,{new:true},(err,data)=>{
               if(!err)
               res.redirect("/employee/show");
          })
     
})

module.exports=router