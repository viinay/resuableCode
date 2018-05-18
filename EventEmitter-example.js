var events = require('events')

var emitter = new events.EventEmitter()

console.log(emitter)
var onelistener = function(one){
    console.log(one)
}
var twolistener = function(two){
    console.log('2',two)
}
emitter
    .on('one',onelistener)
    .on('one',twolistener)
    .on('two',function(one){
        console.log(one)
    })
    .on('three',function(three){
        console.log(three)
    })

emitter.emit('one','one')
emitter.removeAllListeners('one')//working
emitter.removeListener('one',onelistener) //pass the same combination of 'event' & 'listener'
emitter.emit('one','one')
emitter.emit('two','two')
emitter.emit('three','three')
