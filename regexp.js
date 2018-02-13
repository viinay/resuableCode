#removespaces from string

var clean = str=> str.replace(/[^\w]/g,'_')

//test
var str = "FisrtName LastName Additional Info !!"
clean(str) //'FisrtName_LastName_Additional_Info___'
