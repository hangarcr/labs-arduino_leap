var webSocket = require('ws'),
    play = require('play'),
    ws = new webSocket('ws://127.0.0.1:6437');
 
 
var drum = {
    config : {
        playing : 'false',
        uniqueHandZPosition : 'outside',
        firstHandZPosition : 'outside',
        secondHandZPosition : 'outside'
    },
    data : {},
    init : function(){
        drum.detectHands();
        //console.log(drum.data);
    },
    detectHands : function(){
        if(drum.config.playing == 'false'){
            if(drum.data.pointables && drum.data.pointables.length > 0 && drum.data.pointables.length < 2 && drum.data.pointables[0].tool === true){
                drum.detectPosition();

                //X in pointable console.log(console.log();
                //Y in pointable console.log(console.log(drum.data.pointables[0].tipPosition[1]));
                //Z in pointable console.log(console.log(drum.data.pointables[0].tipPosition[2]));
            }
 
            if(drum.data.pointables && drum.data.pointables.length > 1 && drum.data.pointables.length < 3 && drum.data.pointables[1].tool === true){
                //drum.detecTwoPosition();
                console.log('dos pointable');
            }
        }
    },
    detectPosition : function(){
        var pointablesPositionX = Math.floor(drum.data.pointables[0].tipPosition[0]),
            pointablesPositionY = Math.floor(drum.data.pointables[0].tipPosition[1]),
            pointablesPositionZ = Math.floor(drum.data.pointables[0].tipPosition[2]);

            console.log(pointablesPositionX);
            console.log(pointablesPositionY);
            console.log(pointablesPositionZ);

            console.log("division");

            handPositionX = pointablesPositionX;
            handPositionY = pointablesPositionY;
            handPositionZ = pointablesPositionZ;

            console.log(handPositionX);
            console.log(handPositionY);
            console.log(handPositionZ);

            console.log("end");

 
        if(handPositionX > -100 && handPositionX < 0){

            if(handPositionZ < 150 && drum.config.uniqueHandZPosition == 'outside'){
                console.log('touch');
                drum.config.uniqueHandZPosition = 'inside';
            }else {
                
            }


            // if(handPositionY < 300 && handPositionY > 200){
            //     if(handPositionZ > 150 && drum.config.uniqueHandZPosition == 'outside'){
            //         console.log("Izquierda arriba");
            //         drum.config.uniqueHandZPosition = 'inside';
            //         drum.play(1);
            //     }else if(handPositionZ < 150 && drum.config.uniqueHandZPosition == 'inside'){
            //         drum.config.uniqueHandZPosition = 'outside';
            //     }
            // }
 
            // if(handPositionY < 200 && handPositionY > 100){
            //     if(handPositionZ > 150 && drum.config.uniqueHandZPosition == 'outside'){
            //         console.log("Izquierda abajo");
            //         drum.config.uniqueHandZPosition = 'inside';
            //         drum.play(2);
            //     }else if(handPositionZ < 150 && drum.config.uniqueHandZPosition == 'inside'){
            //         drum.config.uniqueHandZPosition = 'outside';
            //     }
            // }





 
        }else if(handPositionX < 100 && handPositionX > 0){
            if(handPositionY < 300 && handPositionY > 200){
                if(handPositionZ > 150 && drum.config.uniqueHandZPosition == 'outside'){
                    console.log("Derecha arriba");
                    drum.config.uniqueHandZPosition = 'inside';
                    drum.play(3);
                }else if(handPositionZ < 150 && drum.config.uniqueHandZPosition == 'inside'){
                    drum.config.uniqueHandZPosition = 'outside';
                }
            }
 
            if(handPositionY < 200 && handPositionY > 100){
                if(handPositionZ > 150 && drum.config.uniqueHandZPosition == 'outside'){
                    console.log("Derecha abajo");
                    drum.config.uniqueHandZPosition = 'inside';
                    drum.play(4);
                }else if(handPositionZ < 150 && drum.config.uniqueHandZPosition == 'inside'){
                    drum.config.uniqueHandZPosition = 'outside';
                }
            }
        }
    },
    detecTwoPosition : function(){
        var handOnePositionX = Math.floor(drum.data.hands[0].palmPosition[0]),
            handOnePositionY = Math.floor(drum.data.hands[0].palmPosition[1]),
            handOnePositionZ = Math.floor(drum.data.hands[0].palmPosition[2]),
             
            handTwoPositionX = Math.floor(drum.data.hands[1].palmPosition[0]),
            handTwoPositionY = Math.floor(drum.data.hands[1].palmPosition[1]),
            handTwoPositionZ = Math.floor(drum.data.hands[1].palmPosition[2]);
 
        //Hand One
        if(handOnePositionX > -100 && handOnePositionX < 0){
            if(handOnePositionY < 300 && handOnePositionY > 200){
                //&& handOnePositionZ < 200 &&
                if(handOnePositionZ > 150 && drum.config.firstHandZPosition == 'outside'){
                    console.log("Izquierda arriba");
                    drum.config.firstHandZPosition = 'inside';
                    drum.play(1);
                }else if(handOnePositionZ < 150 && drum.config.firstHandZPosition == 'inside'){
                    drum.config.firstHandZPosition = 'outside';
                }
            }
 
            if(handOnePositionY < 200 && handOnePositionY > 100){
                //handOnePositionZ < 200 &&
                if(handOnePositionZ > 150 && drum.config.firstHandZPosition == 'outside'){
                    console.log("Izquierda abajo");
                    drum.config.firstHandZPosition = 'inside';
                    drum.play(2);
                }else if(handOnePositionZ < 150 && drum.config.firstHandZPosition == 'inside'){
                    drum.config.firstHandZPosition = 'outside';
                }
            }
 
        }else if(handOnePositionX < 100 && handOnePositionX > 0){
            if(handOnePositionY < 300 && handOnePositionY > 200){
                //&& handOnePositionZ < 200 
                if(handOnePositionZ > 150 && drum.config.firstHandZPosition == 'outside'){
                    console.log("Derecha arriba");
                    drum.config.firstHandZPosition = 'inside';
                    drum.play(3);
                }else if(handOnePositionZ < 150 && drum.config.firstHandZPosition == 'inside'){
                    drum.config.firstHandZPosition = 'outside';
                }
            }
 
            if(handOnePositionY < 200 && handOnePositionY > 100){
                //&& handOnePositionZ < 200 
                if(handOnePositionZ > 150 && drum.config.firstHandZPosition == 'outside'){
                    console.log("Derecha abajo");
                    drum.config.firstHandZPosition = 'inside';
                    drum.play(4);
                }else if(handOnePositionZ < 150 && drum.config.firstHandZPosition == 'inside'){
                    drum.config.firstHandZPosition = 'outside';
                }
            }
        }
 
        //Hand Two
        if(handTwoPositionX > -100 && handTwoPositionX < 0){
            if(handTwoPositionY < 300 && handTwoPositionY > 200){
                //&& handTwoPositionZ < 200 
                if(handTwoPositionZ > 150 && drum.config.secondHandZPosition == 'outside'){
                    console.log("Izquierda arriba");
                    drum.config.secondHandZPosition = 'inside';
                    drum.play(1);
                }else{
                    drum.config.secondHandZPosition = 'outside';
                }
            }
 
            if(handTwoPositionY < 200 && handTwoPositionY > 100){
                //&& handTwoPositionZ < 200 
                if(handTwoPositionZ > 150 && drum.config.secondHandZPosition == 'outside'){
                    console.log("Izquierda abajo");
                    drum.config.secondHandZPosition = 'inside';
                    drum.play(2);
                }else if(handTwoPositionZ < 150 && drum.config.secondHandZPosition == 'inside'){
                    drum.config.secondHandZPosition = 'outside';
                }
            }
 
        }else if(handTwoPositionX < 100 && handTwoPositionX > 0){
            if(handTwoPositionY < 300 && handTwoPositionY > 200){
                //&& handTwoPositionZ < 200 
                if(handTwoPositionZ > 150 && drum.config.secondHandZPosition == 'outside'){
                    console.log("Derecha arriba");
                    drum.config.secondHandZPosition = 'inside';
                    drum.play(3);
                }else if(handTwoPositionZ < 150 && drum.config.secondHandZPosition == 'inside'){
                    drum.config.secondHandZPosition = 'outside';
                }
            }
 
            if(handTwoPositionY < 200 && handTwoPositionY > 100){
                //&& handTwoPositionZ < 200
                if(handTwoPositionZ > 150 && drum.config.secondHandZPosition == 'outside'){
                    console.log("Derecha abajo");
                    drum.config.secondHandZPosition = 'inside';
                    drum.play(4);
                }else if(handTwoPositionZ < 150 && drum.config.secondHandZPosition == 'inside'){
                    drum.config.secondHandZPosition = 'outside';
                }
            }
        }
    },
    play : function(instrument){
        if(drum.config.playing == 'false'){
            drum.config.playing = 'true';
 
            console.log("unique hand positon on play: "+drum.config.uniqueHandZPosition);
 
            switch(instrument)
            {
            case 1:
                //Izquierda arriba
                console.log('sonido 1');
                play.sound('./sounds/hihat.wav');
                break;
            case 2:
                //Izquierda abajo
                console.log('sonido 2');
                play.sound('./sounds/revolante.wav');
                break;
            case 3:
                //Derecha arriba
                console.log('sonido 3');
                play.sound('./sounds/platillo.wav');
                break;
            case 4:
                //Derecha abajo
                console.log('sonido 4');
                play.sound('./sounds/bombo.wav');
                break;
            default:
                return false;
            }
 
            console.log('playing');
            var hihatTime = setTimeout(function(){
                drum.config.playing = 'false';
            },200);
        }
    }
};
 
ws.on('message', function(data, flags) {
    drum.data = JSON.parse(data);
    drum.init();
});