var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    five = require("johnny-five"),
    board, servo, range, led,
    board = new five.Board(),
    Joint = require('./joint');


board.on("ready", function() {
  var servo1 = new Joint({
    minPos: -60, //-90
    maxPos: 60, //90
    pin: 8,
    range: [0, 180]
  });

  var servo2 = new Joint({
    minPos: -60,
    maxPos: 60,
    pin: 9,
    range: [0, 180]
  });

  var led = new five.Led(13);

  ws.on('message', function(data, flags) {
      frame = JSON.parse(data);

      if(frame.hands.length > 0 && frame.hands.length < 2){
        led.on();

        console.log('x= '+Math.floor((frame.hands[0].palmNormal[0])*100));
        console.log('y= '+Math.floor((frame.hands[0].palmNormal[2])*100));

        servo1.move( Math.floor((frame.hands[0].palmNormal[0])*100) );
        servo2.move( Math.floor((frame.hands[0].palmNormal[2])*100) );
      }

      if(frame.hands.length === 2){
        led.off();
      }

      if(frame.hands.length === 0){
        servo1.move(0);
        servo2.move(0);
        led.off();
      }
  });
});