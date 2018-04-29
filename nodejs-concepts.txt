/* remove reference from object*/

var a = Object.assign({}, b); //ES6 feature and currently not available in all browsers

alternatively we can do->
let obj= {
    hello: 'hello'
};
let string = JSON.stringify(obj);
let newObj = JSON.parse(string);

