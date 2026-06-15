const { setHeader } = require('@tinyhttp/res');
const fs=require('fs')
const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url=='/'){
        res.write("Hello world");
        res.end();
    }
    if(req.url=="/viewstudent"){
        fs.readFile("./db.json","utf8",(err,data)=>{
            if(err){
                console.log("Error in reading");
                return res.end();
            }
            res.write(data);
            res.end();
        })
    }
    if(req.url='/login'){
        fs.readFile("./db.json",'utf8',(err,data)=>{
            if(err){
                console.log("fetching data failed");
                return res.end();
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
})
server.listen(4000,()=>{
    console.log("listing at 4000");
})