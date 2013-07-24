var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437');

ws.on('message', function(data, flags) {
    console.log(dataa);
});

var ws = new WebSocket("ws://localhost:6437/");
ws.onmessage = function(event) {
  console.log(event.data);
};