var events = require('event');

var eventEmitter = new events.EventEmitter();

var connetcHandler = function connected(){
    console.log('connection successful.');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', connectHandler);

eventEmitter.on('data_received',function(){
    console.log('data received successfully');
});

eventEmitter.emit('connection');

console.log("Program Ended");