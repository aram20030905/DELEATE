var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
   app.get('/',function(req,res){
      res.sendFile(path.join(__dirname,'./public/form.html'));
   });



   app.post('/addInfo',function(req,res){
    const login=req.body.name
    console.log(login)
    const pass=req.body.age
    console.log(pass)

   });

   app.use(express.static('public'))

   app.get('/*',function(req,res){
      res.send("<h1>404 not found</h1>");
   });





   app.listen(3000,function(){
      console.log("Example is running on port 3000")
   })


