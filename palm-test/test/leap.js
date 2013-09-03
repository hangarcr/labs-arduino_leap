$(document).ready(function() {
    //set functions for events that fire when the user does certain things   
    var handEnters = function() {
        $("body").text("A hand has entered the FOV"); 
    }; 
    var handExits = function() {
        $("#actions").text("A hand has exited the FOV"); 
    }; 
    var onConnect = function() {
        //$("body").text("Connected to Leap WebSocket!"); 
    };
    var onDisconnect = function() {
        $("#main").hide();
        $("#connection").text("WebSocket connection closed");
    };
    var onFrame = function() {
        //put the whole object into a var for local use
        var leapData = window.leapData; 

        if(leapData.numHands > 0){

            $("#play").css("right", (leapData.hands[0].palmNormal[0])*100+200);  //-- x
            $("#play").css("top", (leapData.hands[0].palmNormal[2])*100+100);   //-- Y
            //$("#play").css("width", (leapData.hands[0].palmPosition[2])*10); //-- z
            //$("#play").css("height", (leapData.hands[0].palmPosition[2])*10); //-- z


            $("span#palm-x-number").text(leapData.hands[0].palmNormal[0]);
            $("span#palm-y-number").text(leapData.hands[0].palmNormal[1]);
            $("span#palm-z-number").text(leapData.hands[0].palmNormal[2]);
        }

        //this displays the object on the console when you use two hands and point 8 fingers
        if(leapData.numHands > 1 && leapData.numPointables > 7) console.dir(leapData);
           
        //display objects - if we display every frame we get a bug in chrome and it slows then chrashes eventually so display 10 times a second instead
        if(leapData.frameCount % Math.round(leapData.fps/10) == 0) {
            $("#fps").text(Math.round(leapData.fps));

            var str = JSON.stringify(leapData, undefined, 2);  
            $("#output").html("<pre>" + str + "</pre>");  
            if(leapData.numHands > 0) {
                var str = JSON.stringify(leapData.hands[0], undefined, 2);
                $("#hand1").html("<pre>" + str + "</pre>"); 
            }
            if(leapData.numHands > 1) {
                var str = JSON.stringify(leapData.hands[1], undefined, 2); 
                $("#hand2").html("<pre>" + str + "</pre>");             
            }
            if(leapData.numPointables > 0) {
                var str = JSON.stringify(leapData.pointables, undefined, 2);
                $("#pointables").html("<pre>" + str + "</pre>");  
            }
        } 
    };

    var onPointerChange = function() {
        $('#box').toggleClass('fingers');
        detectClassAndChange($().leap().numPointables)
    };

    function detectClassAndChange(numFingers){
        if(numFingers <= 0){
            $("#dedos").text("piedra");
        }

        if((numFingers == 5) && (numFingers >= 4)) {
            $("#dedos").text("papel");
        }

        if((numFingers == 1) && (numFingers <= 3)){
            $("#dedos").text("tijera");
        }
    }


    var onHandChange = function() {
        $('#box').toggleClass('colored');
        console.log('changed');
    };


    var onSecondChange = function() {
        $("#time").text(parseInt($("#time").text())+1);
    };
    var taps = 0;
    var onTap = function(pointable) {
        taps = taps+1;
        $("#actions").text("Tap! Total: "+taps);
        console.log(pointable);
    }; 


    //put the functions into an array
    var events = {
        "onPointerChange" : onPointerChange,
        //"onHandChange" : onHandChange,
        //"onHandEnter" : handEnters,
        //"onHandExit" : handExits,
        "onConnect" : onConnect,
        "onDisconnect" : onDisconnect,
        "onFrame" : onFrame,
        //"onSecondChange" : onSecondChange,
        //"onTap" : onTap,
    };

    //you can change one at a time
    //$().leap("setEvent","onHandEnter", handEnters);

    //or update any number of them at once
    $().leap("setEvents",events);           
});