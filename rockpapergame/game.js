var userAnswer = prompt("choose your weapon!!!! ROCK PAPER OR SCISSORS")

var computerAnswer = Math.ceil(Math.random() * 3);

var rock = 1;
var paper = 2;
var scissors = 3;

alert(computerAnswer);

if(userAnswer==rock || userAnswer == "rock" && computerAnswer == rock){
alert("its a tie")
}else if(userAnswer=="rock" || userAnswer == "rock"&& computerAnswer==paper){
    alert("ha you loose")
}
else if (userAnswer == "paper" ||  userAnswer == "paper" && computerAnswer == Paper) {
	alert("You Tied")
}

else if (userAnswer == "paper" ||  userAnswer == "paper" && computerAnswer == scissors) {
	
	alert(" ha you lost")
}

else if (userAnswer == "scissors" ||  userAnswer == "scissors" && computerAnswer == Rock) {

	alert("ha you lost");
}

else if (userAnswer == "scissors" ||  userAnswer == "scissors" && computerAnswer == Paper) {
	
	alert("You Won sike i won")
}

else if (userAnswer == "scissors" ||  userAnswer == "scissors" && computerAnswer == scissors) {
	
	alert("we are tied computer still wins")
}

else{
	
	alert("Pick Rock, Paper or Spock!")

}







// var playerOne;
// var computerChoice
// var scissor = Mrandom();
// var rock = random();
// var paper= random();
// playerOne=prompt("rock paper or scissors");
// computerChoice = Math.random();
// if (computerChoice < .34){
//     computerChoice = "rock"
// }else if (computerChoice <=.67){
//     computerChoice = "paper";
// }else{
//     computerChoice = "scissors"
// }
// alert("computer choose " + computerChoice);

// if(scissors>rock ){
//     alert("scissors win");


// }

// if(scissors<rock){
//     alert("scissors looses");
// }

// if(scissor === scissor){
//     alert('its a tie');
// }

// if(playerOne>computerChoice){
//     alert("player wins")
// }else if 
//     (playerOne === computerChoice){
//     alert("its a tie")
//     } else{
//         alert("computer wins");
//     }