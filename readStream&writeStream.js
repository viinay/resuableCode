var hdfs = require('./webhdfs-client');
var fs = require('fs');

// Initialize readable stream from HDFS source
var remoteFileStream = hdfs.createReadStream('/path/to/remote/file');

// Variable for storing data
var data = new Buffer();

remoteFileStream.on('error', function onError (err) {
  // Do something with the error
});

remoteFileStream.on('data', function onChunk (chunk) {
  // Concat received data chunk
  data = Buffer.concat([ data, chunk ]);
});

remoteFileStream.on('finish', function onFinish () {
  // Upload is done
  // Print received data
  console.log(data.toString());
});
