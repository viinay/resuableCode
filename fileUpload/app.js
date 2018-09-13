var express = require('express');
var port = 3000;
var bodyParser = require('body-parser')
var multer  = require('multer')
var nodemailer = require('	');

var smtpConfig = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true, // use TLS
    auth: {
        user: "leads@drnkqwench.com",
        pass: "DRNKudit2!"
    },
    tls: {
        rejectUnauthorized: false
    }
};


var transporter = nodemailer.createTransport(smtpConfig);



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  }//,
  // filename: function (req, file, cb) {
  //   cb(null, file.fieldname + '-' + Date.now())
  // }
})
var upload = multer({ storage: storage })

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
	console.log(req)
	res.send('home welcome file uploader')
})



app.post('/uploadfile',upload.any(), function(req, res) {
	console.log('-----------------------------------------------------files--------')
	console.log(req.files)
	sendReport(req , req.files)

})





function sendReport(req,files){

	console.log(files);

    var mailOptions = {
        from: 'leads@drnkqwench.com <leads@drnkqwench.com>', // sender address
        to: 'leads@drnkqwench.com', // list of receivers
        subject: 'QWENCH - Career-form', // Subject line
        text: 'QWENCH - leads@drnkqwench.com',// plain text body
        html: `<ul>
            <li><span> State: </span><span>  ${req.body.category} </span></li>
            <li><span> Location: </span><span>  ${req.body.choices} </span></li>
            <li><span> Your Name: </span><span>  ${req.body.careerfname} </span></li>
            <li><span> Email: </span><span>  ${req.body.careeremail} </span></li>
            <li><span> Cell Phone: </span><span>  ${req.body.careercontact} </span></li><br />
            <li><span><strong> Reference #1 (required)</strong></span> </li>
            <li><span> Full Name: </span><span>  ${req.body.careerf1name} </span></li>
            <li><span> Relationship to you: </span><span>  ${req.body.careerrelation1} </span></li>
            <li><span> Cell Phone: </span><span>  ${req.body.careercontactref1} </span></li><br />
            <li><span><strong> Reference #2 (required)</strong> </span> </li>
            <li><span> Full Name: </span><span>  ${req.body.careerf2name} </span></li>
            <li><span> Relationship to you: </span><span>  ${req.body.careerrelation2} </span></li>
            <li><span> Cell Phone: </span><span>  ${req.body.careercontactref2} </span></li>
            <li><span> How did you hear about us? </span><span>  ${req.body.careerf3name} </span></li>
            <li><span> What position are you applying for? </span><span>  ${req.body.careerrelation3} </span></li>
            <li><span> Tell us about your experience! </span><span>  ${req.body.careerexperience} </span></li>
            <li><span> Why do you want to work at QWENCH juice bar? </span><span>  ${req.body.careerposition} </span></li>
            <li><span> What are your available days / times? </span><span>  ${req.body.careertime} </span></li>
            <li><span> Are you looking for a year-round or seasonal employment? </span><span>  ${req.body.careeremployment} </span></li>
            <li><span> When can you start? </span><span>  ${req.body.careerstartdate} </span></li>
            <li><span> Upload your resume </span><span>  ${req.body.careerresume} </span></li>
        </ul>` ,// html body
        attachments:[{
                filename:files[0].originalname,
                content: 'hello world!',
                path: files[0].path
                //contentType: 'text/plain'
        }]
    };


    transporter.sendMail(mailOptions, (error, info) => {
        var status = false;
        if (error) {
            status = false;
            console.log(error.message)
        }else {
            status = true;
        }
        res.json({status:status,data:{email: req.body.email }});

    });
}

app.listen(port, function() {
	console.log('server on '  + port)
})
