var express = require('express');
var app = express();

var services = require('./services');
services.initAllPlugins();


app.use(function(req,res, next){
	res.setHeader("Access-Control-Allow-Origin","*");
	next();
});


app.get("/answers",function(req,res){

	res.end(JSON.stringify({'answers' : services.getAnswers()}));
});


app.post("/response/:commandId",function(req,res){
	console.log("appelle a post ")
	res.end(JSON.stringify({'response' : services.getResponse(req.params.commandId,null)}));

});


app.get('/',function(req,res){
res.send('hello word');
});
app.listen(3000,function(){

console.log('exemple de Node JS');
});