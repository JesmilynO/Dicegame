var btn = 0;
var p1 = 0;
var p2 = 0;
var p1score = 0;
var p2score = 0;
var tiescore = 0;
var shakeTimes = 0;
var score, activePlayer

function roll(){
	p1 = Math.floor((Math.random() * 6) + 1);
	p2 = Math.floor((Math.random() * 6) + 1);
	changeDice('die1', p1);
	changeDice('die2', p2);

	if(p1>p2) {p1score++}
    if(p2>p1) {p2score++}   
    if(p1==p2) {tiescore++}	
    if (p1score >= 10){
    	alert("Player 1 wins");
    	document.location.reload();
        clearInterval(interval);
    	}

    if(p2score >= 10){
    	alert("Player 2 wins");
    	document.location.reload();
    	clearInterval(interval);
    }		
    document.querySelector('#p1counter').innerHTML = 'Player 1: ' + p1score	
	document.querySelector('#p2counter').innerHTML = 'Player 2: ' + p2score	
	document.querySelector('#tiecounter').innerHTML = 'Tie: ' + tiescore
	return;

}

function changeDice(id,num){
    var xposition = 64 * (num + 1);
    console.log(xposition);
    document.querySelector('#' + id).style.backgroundPositionX = "-" + xposition + "px";
    
}

function shakeIt() {
	p1 = Math.floor((Math.random() * 6 ) +1);
    p2 = Math.floor((Math.random() * 6 ) +1);
    changeDice('die1', p1);
    changeDice('die2', p2);
	setTimeout(
		function(){ 
			if(shakeTimes <= 6) {
				shakeIt();
				shakeTimes++;
			} else {
				shakeTimes = 0;
				roll();
			}
		}, 200
	);
}