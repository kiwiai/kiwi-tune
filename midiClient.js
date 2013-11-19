var socket = io.connect('http://build.kiwiwearables.com:3000');

console.log("hello");

socket.on('connect', function() {
    socket.emit('listen', {device_id: 14, password: '123'});
    console.log("connected");
});


socket.on('listen_response', function(data) {

       var toParse = JSON.parse(data.message);

       var Ax = parseFloat(toParse.ax);
       var Ay = parseFloat(toParse.ay);
       var Az = parseFloat(toParse.az);  

       var Gx = parseFloat(toParse.gx);
       var Gy = parseFloat(toParse.gy);
       var Gz = parseFloat(toParse.gz);
       
       var dataNum = Gx + Gy + Gz;

       	_orientation = 100 + dataNum*100;
       	//alert(_orientation + " data = " + data);
       	processMidi();
}); 
 
     
 
