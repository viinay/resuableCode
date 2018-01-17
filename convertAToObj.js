var arrayOfObjsWithNameValueProps = [{
    name:'From',
    value:'vinay@gmail.com'
},{
    name:'To',
    value:'vinay2@gmail.com'
}]

function convertAToObj(Arr){

    var Obj = {}
    Arr.forEach(function(obj){
        Obj[obj.name] = obj.value;
    })
    return Obj;
}

var Obj = convertAToObj(arrayOfObjsWithNameValueProps)

console.log(Obj)
