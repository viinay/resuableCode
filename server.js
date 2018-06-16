var express = require('express')
var app = express()
var bodyParser = require('body-parser') 
var urlendoded = bodyParser.urlencoded({extended:false})

var port = 3001
app.listen(port,function(){
	console.log('server running on port :',port)
})

app.use(bodyParser.json())
app.use(urlendoded)
app.use("/public", express.static(__dirname+"/public"));

app.get('/',function(req,res){
	console.log('server set up is ready')
	res.send('server set up is ready')
})
