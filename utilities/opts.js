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
