var canvas = document.getElementsByTagName('canvas')[0],
    ctx = canvas.getContext('2d');

// set the canvas to cover the screen
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// move the context co-ordinates to the bottom middle of the screen
ctx.translate(canvas.width/2, canvas.height);

// set up a fill colour for our drawing later
ctx.fillStyle = "rgba(0,0,0,0.9)";

function draw(frame){
  var tool, currentPosition, i, len, toolId;
  if(toolId === undefined){
    // we do not have a toolId, so let's go looking for one
    if(frame.tools.length > 0){
      // if the frame has some tools in it, we choose the first one
      tool = frame.tools[0];
      toolId = tool.id;
      lastPosition = tool.tipPosition;
    }
  } else {
    // we have a current toolId, so we should look for it in this frame
    tool = frame.tool(toolId);
    // if the tool is valid, i.e. it is still in the frame
    if(tool.valid){
      // we take the position of its tip
      currentPosition = tool.tipPosition;
      // we draw a line between the current position and the previous one
      ctx.beginPath();
      ctx.moveTo(lastPosition.x, -lastPosition.y);
      ctx.lineTo(currentPosition.x, -currentPosition.y);
      ctx.stroke();
      // finally, we update the last position
      lastPosition = currentPosition;
    }else{
      // the tool is not valid, let's find a new one.
      toolId = undefined;
      lastPosition = undefined;
    }
  }
}

Leap.loop(draw);