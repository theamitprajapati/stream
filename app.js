const express = require("express");
const fs = require("fs");
const esm = require("express-status-monitor")
const app = express();

app.use(esm())

app.get("/",function(req,res){

    let stream =  fs.createReadStream("./amit.txt")

    stream.on("data",(chunk)=>{

        res.write(chunk)
    })
    stream.on('end',function(){
        console.log("Close end")
        res.end()
    })
})



app.listen(8000,()=>console.log("Server Running 8000"))



