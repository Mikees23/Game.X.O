var field = document.getElementById('field');
var pp = "p1";
var gameover = false;
var pointX = 0;
var pointO = 0;

//create blocks
function createDivs(){
	var f = 9
	for (var i = 1; i <= f; i++) {
		var div = document.createElement('div');
		div.className = "item";
		div.id = +i;
		field.appendChild(div);
	}
}

//Init
function xoCreate(){
	var xoCreate = document.createElement('p');
	xoCreate.classList.add('elem')
	if (pp == "p1") {
		xoCreate.innerHTML = 'x'
		xoCreate.classList.add('x')
	} else {
		xoCreate.innerHTML = 'o'
		xoCreate.classList.add('o')
	}
	return xoCreate;
}

//chekWinners 
function checkWinner(){
	// WIN X axis(x)
	if (document.getElementById('1').classList[1] === 'hasx' && 
			document.getElementById('2').classList[1] === 'hasx' && 
			document.getElementById('3').classList[1] === 'hasx') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('2').style.background = '#d6ffdd';
				document.getElementById('3').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('4').classList[1] === 'hasx' && 
			document.getElementById('5').classList[1] === 'hasx' && 
			document.getElementById('6').classList[1] === 'hasx') {
				document.getElementById('4').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('6').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('7').classList[1] === 'hasx' && 
			document.getElementById('8').classList[1] === 'hasx' && 
			document.getElementById('9').classList[1] === 'hasx') {
				document.getElementById('7').style.background = '#d6ffdd';
				document.getElementById('8').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('1').classList[1] === 'hasx' && 
	// WIN X axis(y)
			document.getElementById('4').classList[1] === 'hasx' && 
			document.getElementById('7').classList[1] === 'hasx') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('4').style.background = '#d6ffdd';
				document.getElementById('7').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('2').classList[1] === 'hasx' && 
			document.getElementById('5').classList[1] === 'hasx' && 
			document.getElementById('8').classList[1] === 'hasx') {
				document.getElementById('2').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('8').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('3').classList[1] === 'hasx' && 
			document.getElementById('6').classList[1] === 'hasx' && 
			document.getElementById('9').classList[1] === 'hasx') {
				document.getElementById('3').style.background = '#d6ffdd';
				document.getElementById('6').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('1').classList[1] === 'hasx' && 
	// WIN X axis(z)
			document.getElementById('5').classList[1] === 'hasx' && 
			document.getElementById('9').classList[1] === 'hasx') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	}else if (document.getElementById('3').classList[1] === 'hasx' && 
			document.getElementById('5').classList[1] === 'hasx' && 
			document.getElementById('7').classList[1] === 'hasx') {
				document.getElementById('3').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('7').style.background = '#d6ffdd';
				gameover = true; 

				pointX++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('1').classList[1] === 'haso' && 
	// WIN O axis(x)
			document.getElementById('2').classList[1] === 'haso' && 
			document.getElementById('3').classList[1] === 'haso') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('2').style.background = '#d6ffdd';
				document.getElementById('3').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('4').classList[1] === 'haso' && 
			document.getElementById('5').classList[1] === 'haso' && 
			document.getElementById('6').classList[1] === 'haso') {
				document.getElementById('4').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('6').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('7').classList[1] === 'haso' && 
			document.getElementById('8').classList[1] === 'haso' && 
			document.getElementById('9').classList[1] === 'haso') {
				document.getElementById('7').style.background = '#d6ffdd';
				document.getElementById('8').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('1').classList[1] === 'haso' && 
			document.getElementById('4').classList[1] === 'haso' && 
			document.getElementById('7').classList[1] === 'haso') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('4').style.background = '#d6ffdd';
				document.getElementById('7').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('2').classList[1] === 'haso' && 
			document.getElementById('5').classList[1] === 'haso' && 
			document.getElementById('8').classList[1] === 'haso') {
				document.getElementById('2').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('8').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('3').classList[1] === 'haso' && 
			document.getElementById('6').classList[1] === 'haso' && 
			document.getElementById('9').classList[1] === 'haso') {
				document.getElementById('3').style.background = '#d6ffdd';
				document.getElementById('6').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('1').classList[1] === 'haso' && 
		// WIN O axis(z)
			document.getElementById('5').classList[1] === 'haso' && 
			document.getElementById('9').classList[1] === 'haso') {
				document.getElementById('1').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('9').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);
	} else if (document.getElementById('3').classList[1] === 'haso' && 
			document.getElementById('5').classList[1] === 'haso' && 
			document.getElementById('7').classList[1] === 'haso') {
				document.getElementById('3').style.background = '#d6ffdd';
				document.getElementById('5').style.background = '#d6ffdd';
				document.getElementById('7').style.background = '#d6ffdd';
				gameover = true; 

				pointO++;
				countPoints(pointX, pointO);

	} else if (field.querySelectorAll('.elem').length === 9) {
			var item = field.getElementsByClassName('item');
			var colorBackground = '#fff3f3'
			item[0].style.background = colorBackground;
			item[1].style.background = colorBackground;
			item[2].style.background = colorBackground;
			item[3].style.background = colorBackground;
			item[4].style.background = colorBackground;
			item[5].style.background = colorBackground;
			item[6].style.background = colorBackground;
			item[7].style.background = colorBackground;
			item[8].style.background = colorBackground;
			gameover = true; 
	}
}

function pvpMode(){
	var items = field.getElementsByClassName('item');
	for(var i = 0; i < items.length; i++) {
		//Event handler
		items[i].onclick = function(){
			if(pp == "p1" && !gameover) {
				if ( !this.classList.contains('hasx') && !this.classList.contains('haso')) {
					this.appendChild(xoCreate());
					this.classList.toggle('hasx');
					pp = "p2";
					checkWinner();
					whoTurn();
				} 	
			} else if (pp == "p2" && !gameover) {
				if ( !this.classList.contains('haso') && !this.classList.contains('hasx') ) {
					this.appendChild(xoCreate());
					this.classList.toggle('haso');
					pp = "p1";
					checkWinner();
					whoTurn();
				} 
			}
		}
	}
}

function whoTurn() {
	if (pp == 'p1') {
	 	document.querySelector('.field > .counter').getElementsByTagName('h3')[0].style.textShadow ='0px 0px 20px rgb(51, 255, 231)' ;
	} else {
		document.querySelector('.field > .counter').getElementsByTagName('h3')[0].style.textShadow = '';
	}

	if (pp == 'p2') {
		document.querySelector('.field > .counter').getElementsByTagName('h3')[1].style.textShadow ='0px 0px 20px rgb(51, 255, 231)' ;
	}  else {
		document.querySelector('.field > .counter').getElementsByTagName('h3')[1].style.textShadow = '';
	}
}

function removeDivs() {
	var elem = field.querySelectorAll('div');
	for (var i = 0; i < elem.length; i++) {
		elem[i].remove();
	}
}

function countPoints(pointX, pointO) { 
	document.querySelectorAll('input[type="text"]')[0].value = pointX;
	document.querySelectorAll('input[type="text"]')[1].value = pointO;
}

whoTurn();
createDivs();
pvpMode();

function newGame(){
	pp = "p1";
	gameover = false;
	whoTurn();
	removeDivs();
	createDivs();
	pvpMode();
}


//customs optional
// document.querySelectorAll('input[type="number"]')[0].readOnly = true;
// document.querySelectorAll('input[type="number"]')[1].readOnly = true;

// document.querySelectorAll('input[type="text"]')[0].value = 100;