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

app.get('/',function(req,res){
	console.log('server set up is ready')
	res.send(`<a href="/download">download pdf</a>`)
})

var fs = require('fs')
var pdf = require('html-pdf'); 
    
app.get('/download',function(req,res){
    pdf.create(fs.readFileSync('./file1.html', 'utf8')).toStream(function(err, stream){
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=file1.pdf');
        res.statusCode = 200;
        stream.on('end',()=>{
            res.end()
        })
        stream.pipe(res);
    });
})
