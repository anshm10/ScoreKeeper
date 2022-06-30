var b = document.querySelector("button");
var b2 = document.getElementById("p2")
var bscore = 0;
var b2score = 0;
var d1 = document.querySelector("#d1");
var d2 = document.querySelector("#d2");
var d3 = document.querySelector("#d3");
var gameOver = false;
var winningScore = 5;
var r = document.querySelector("#reset");
var i = document.querySelector("input");

b.addEventListener("click",function(){
	if(!gameOver){
		bscore++;
	if(bscore === winningScore){
		gameOver = true;
		d1.classList.add("winner");
	}
	d1.textContent = bscore;
	}
	
});

b2.addEventListener("click",function(){
	if(!gameOver){
		b2score++;
	if(b2score === winningScore){
		gameOver = true;
		d2.classList.add("winner");
	}
	d2.textContent = b2score;
	}
});

r.addEventListener("click",reset)

function reset(){
	bscore = 0;
	b2score = 0;
	d1.textContent = 0;
	d2.textContent = 0;
	d1.classList.remove("winner");
	d2.classList.remove("winner");
	gameOver = false;
}

i.addEventListener("change", function(){//any time the value changes
	d3.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})
