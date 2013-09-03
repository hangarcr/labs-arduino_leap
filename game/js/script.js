(function($){

var rpsGame;

rpsGame = {
	setDefaults : {
		scissors : 0,
		paper : 0,
		rock : 0,
		pointsGamer : 0,
		pointsComputer : 0,
		pointsToWin : 3,
		minRandom : 1,
		maxRandom : 3,
		randomNumber : 0,
		userNumber : 0
	},
	init : {
		initApp : function(){
			rpsGame.logicGame.updateStatus();
		}
	},
	logicGame : {
		goPlay : function(button){
			var that = button;
			rpsGame.logicGame.userPoints(that);
			rpsGame.logicGame.computerPoints();
			rpsGame.logicGame.compare();
			rpsGame.logicGame.updateStatus();
		},
		compare : function(){
			//1 = Rock, 2 = Paper, 3 = Scissors

			console.log(rpsGame.setDefaults.userNumber);
			console.log(rpsGame.setDefaults.randomNumber);


			//Wins Computer
			//If Computer Paper and User Rock
			if((rpsGame.setDefaults.userNumber == 1) && (rpsGame.setDefaults.randomNumber == 2)){
				rpsGame.setDefaults.pointsComputer = rpsGame.setDefaults.pointsComputer+1;
			}

			//If Computer Rock and User Scissor
			if((rpsGame.setDefaults.userNumber == 3) && (rpsGame.setDefaults.randomNumber == 1)){
				rpsGame.setDefaults.pointsComputer = rpsGame.setDefaults.pointsComputer+1;
			}

			//If Computer Scissor and User Paper
			if((rpsGame.setDefaults.userNumber == 2) && (rpsGame.setDefaults.randomNumber == 3)){
				rpsGame.setDefaults.pointsComputer = rpsGame.setDefaults.pointsComputer+1;
			}

			//User Wins
			//If Computer Rock and User Paper
			if((rpsGame.setDefaults.userNumber == 2) && (rpsGame.setDefaults.randomNumber == 1)){
				rpsGame.setDefaults.pointsGamer = rpsGame.setDefaults.pointsGamer+1;
			}

			//If Computer Scissor and User Rock
			if((rpsGame.setDefaults.userNumber == 1) && (rpsGame.setDefaults.randomNumber == 3)){
				rpsGame.setDefaults.pointsGamer = rpsGame.setDefaults.pointsGamer+1;
			}

			//If Computer Paper and User Scissor
			if((rpsGame.setDefaults.userNumber == 3) && (rpsGame.setDefaults.randomNumber == 2)){
				rpsGame.setDefaults.pointsGamer = rpsGame.setDefaults.pointsGamer+1;
			}


			//Same Result
			if( ((rpsGame.setDefaults.userNumber == 1) && (rpsGame.setDefaults.randomNumber == 1)) || ((rpsGame.setDefaults.userNumber == 2) && (rpsGame.setDefaults.randomNumber == 2)) || ((rpsGame.setDefaults.userNumber == 3) && (rpsGame.setDefaults.randomNumber == 3))){
				//rpsGame.logicGame.sameResult();
			}
		},
		userPoints : function(button){
			rpsGame.setDefaults.userNumber = $(button).attr('data-tool');
		},
		computerPoints : function(){
			rpsGame.setDefaults.randomNumber = Math.floor(Math.random() * (rpsGame.setDefaults.maxRandom - rpsGame.setDefaults.minRandom + 1)) + rpsGame.setDefaults.minRandom;
		},
		updateStatus : function(){
			$("p#computer span").text(rpsGame.setDefaults.pointsComputer);
			$("p#user span").text(rpsGame.setDefaults.pointsGamer);
			rpsGame.logicGame.checkWins();
		},
		checkWins : function(){
			if(rpsGame.setDefaults.pointsComputer == 3){
				var r = confirm("COMPUTER WINS!!!");
				if(r === true){
					location.reload();
				}
			}

			if(rpsGame.setDefaults.pointsGamer == 3){
				var z = confirm("USER WINS!!!");
				if(z === true){
					location.reload();
				}
			}
		}
	}
};

$(document).ready(function(){
	rpsGame.init.initApp();

	$("button").click(function(){
		rpsGame.logicGame.goPlay(this);
	});
});
})(jQuery);