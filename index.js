

var Express=require("express")
var bodyparser=require("body-parser")
var app=Express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.post("/",(req,res)=>{
    res.send("Hello")
})

app.post("/student",(req,res)=>{
    var getname=req.body.name;
    var getroll=req.body.roll;
    var getadm=req.body.admno;
    var getcollege=req.body.college;
    res.status(200).json({"name":getname,"roll":getroll, "admno":getadm, "college":getcollege})
})

app.listen(3001, (error)=>{
    if(error){
        console.log("Error Occured")
    }
    else{
        console.log("Server Running")
    }
})