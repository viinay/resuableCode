var mailDetails = {
  host:'smtp.gmail.com',
  user:'user@gmail.com',
  pass:'pass'
}

var pingCustomSMTPConfig = function(mailDetails){
	  var customsmtpClient = mailjs['custom'](mailDetails); 
	  return customsmtpClient.testConnection()
};

var getTransporterConfig = function(mailDetails){
    var SMTP_CONFIGS = [ 
        {port:587,secure:false,requireTLS:true,auth:{},tls:{rejectUnauthorized:false}},
        {port:465,secure:true,requireTLS:false,auth:{},tls:{rejectUnauthorized: false}},
        {port:25,secure:false,requireTLS:false,auth:{},tls:{rejectUnauthorized: false}}
    ];
    var self = this;
    return new Promise(function(resolve,reject){
        SMTP_CONFIGS = SMTP_CONFIGS.map(function(config){
            config.host = mailDetails.host;
            config.auth.user = mailDetails.user;
            config.auth.pass = mailDetails.pass;
            return config;
        })
        Promise.all(SMTP_CONFIGS.map(function(config) {
            return self.pingCustomSMTPConfig(config)
                .then(function(result) {
                    return {status:true};
                }).catch(function(error){
                    return {status:false ,error:error.message};
                })
        })).then(function(results) {
            var validConfigs=[];
            var error = [];
            results.forEach(function(x,index){
              if(x){
                validConfigs.push(SMTP_CONFIGS[index])
              }else{
                error.push(x.error);
              }
            })
            if(!!validConfigs[0]){
              return resolve(validConfigs[0])
            }else{
              return reject(error)
            }
        }).catch(function(error){
            return reject(error)
        })
    })
}
