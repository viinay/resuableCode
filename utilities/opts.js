function validateProperties(required, options) {
  console.log('here')
  return !required.some(function (item) {
    if (typeof(options[item]) === 'undefined') {
      return true;
    }
    return false;
  });
}


var r = validateProperties(['apple','orange'],{apple:'hai',obrange:'hai',banana:'be hai'})
console.log(r)//false 


function validateProperties(required, options, formatString, callback) {
  return !required.some(function (item) {
    if (typeof(options[item]) === 'undefined') {
      errs.handle(
        errs.create({ message: util.format(formatString, item) }),
        callback
      );
      return true;
    }
    return false;
  });
}
