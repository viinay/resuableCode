var temp = `Hi { _firstname | there } how are you doing ? you have { _subscribed | no }`;

var bake = function(temp,data){
    var _temp = temp;
    var choicePattern = /{\s*(\S*)\s*\|\s*(\S*)\s*}/g;
    var choiceMatch = choicePattern.exec(temp);
    console.log('choiceMatch :',choiceMatch)
    if(!!choiceMatch){
        var matchValue = choiceMatch[0];
        var dynamicValue = choiceMatch[1];
        var staticValue = choiceMatch[2];
        if(dynamicValue in data){
            console.log('present')
            _temp = _temp.replace(matchValue,dynamicValue)
        }else{
            console.log('absent')
            _temp = _temp.replace(matchValue,staticValue)
        }
    }

    for(var prop in data){
        var regexp = new RegExp(prop,'g')
        _temp = _temp.replace(regexp,data[prop])
    }
    
    return _temp;
}

//var bakedTemp = bake(temp,{_firstname:'vinay',_subscribed:'yes'})
//console.log(bakedTemp)

var choicePattern = /\S*/g;/*{ firstname | there }*/
console.log(choicePattern.exec(temp))
