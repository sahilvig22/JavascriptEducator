

var sc = document.getElementById('sc').addEventListener('click', function(){
	var sctext = document.getElementById('sctext');
	sctext.innerHTML = '<h6 style="color:green;">'+'You single clicked !'+'</h6>';
});

var dc = document.getElementById('dc').addEventListener('dblclick', function(){
	var dbtext = document.getElementById('dbtext');
	dbtext.innerHTML = '<h6 style="color:green;">'+'You double clicked !'+'</h6>';
});

var md = document.getElementById('md').addEventListener('mousedown', function(){
	var mdtext = document.getElementById('mdtext');
	mdtext.innerHTML = '<h6 style="color:green;">'+'Mouse down clicked !'+'</h6>';
});

var mu = document.getElementById('mu').addEventListener('mouseup', function(){
	var mutext = document.getElementById('mutext');
	mutext.innerHTML = '<h6 style="color:green;">'+'Mouse released !'+'</h6>';
});

var bodycolor = document.getElementById('bodycolor').addEventListener('click', function(){
	var body = document.querySelector('body').style.backgroundColor = '#FFD700';
});


var bodycolor2 = document.getElementById('bodycolor2').addEventListener('click', function(){
	var body = document.querySelector('body').style.backgroundColor = 'white';
});


var clientx = document.getElementById('clientx').addEventListener('click', function(e){
	var clientxOutput = document.getElementById('clientxOutput').innerHTML = '<h6>'+e.clientX+'</h6>';
});

var clienty = document.getElementById('clienty').addEventListener('click', function(e){
	var clientyOutput = document.getElementById('clientyOutput').innerHTML = '<h6>'+e.clientY+'</h6>';
});

var offsetx = document.getElementById('offsetx').addEventListener('click', function(e){
	var offsetxOutput = document.getElementById('offsetxOutput').innerHTML = '<h6>'+e.offsetX+'</h6>';
});

var offsety = document.getElementById('offsety').addEventListener('click', function(e){
	var offsetyOutput = document.getElementById('offsetyOutput').innerHTML = '<h6>'+e.offsetY+'</h6>';
});

var offset = document.getElementById('offset').addEventListener('mousemove', function(e){
	var offsetOutput = document.getElementById('offsetOutput');
	offsetOutput.innerHTML = '<h6>X: '+e.offsetX+'<br>Y: '+e.offsetY+'</h6>';
});

var boxColor = document.getElementById('boxColor').addEventListener('mousemove', function(e){
	// var boxColorOutput = document.getElementById('boxColorOutput');
	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",100)";

});


var target = document.getElementById('target').addEventListener('click', function(e){
	var targetOutput = document.getElementById('targetOutput').innerHTML = '<h6>'+e.target+'</h6>';
});

var targetid = document.getElementById('targetid').addEventListener('click', function(e){
	var targetidOutput = document.getElementById('targetidOutput').innerHTML = '<h6>'+e.target.id+'</h6>';
});


var targetclass = document.getElementById('targetclass').addEventListener('click', function(e){
	var targetclassOutput = document.getElementById('targetclassOutput').innerHTML = '<h6>'+e.target.className+'</h6>';
});


var eventType = document.getElementById('eventType').addEventListener('click', function(e){
	var eventTypeOutput = document.getElementById('eventTypeOutput').innerHTML = '<h6>'+e.type+'</h6>';
});

var alt = document.getElementById('alt').addEventListener('click', function(e){
	var altOutput = document.getElementById('altOutput').innerHTML = '<h6>'+e.altKey+'</h6>';
});

var shift = document.getElementById('shift').addEventListener('click', function(e){
	var shiftOutput = document.getElementById('shiftOutput').innerHTML = '<h6>'+e.shiftKey+'</h6>';
});

var ctrl = document.getElementById('ctrl').addEventListener('click', function(e){
	var ctrlOutput = document.getElementById('ctrlOutput').innerHTML = '<h6>'+e.ctrlKey+'</h6>';
});


var box = document.getElementById('box').addEventListener('mouseenter', function(e){
	var boxHoverOutput = document.getElementById('boxHoverOutput');
	boxHoverOutput.innerHTML = '<h6>Mouse Enter!</h6>';
	console.log(e.type);
});

var box = document.getElementById('box').addEventListener('mouseleave', function(e){
	var boxHoverOutput = document.getElementById('boxHoverOutput');
	boxHoverOutput.innerHTML = '<h6>Mouse Leave!</h6>';
	console.log(e.type);
});

var box = document.getElementById('box').addEventListener('mouseover', function(e){
	var boxHoverOutput = document.getElementById('boxHoverOutput');
	boxHoverOutput.innerHTML = '<h6>Mouse Over!</h6>';
	console.log(e.type);
});

var box = document.getElementById('box').addEventListener('mouseout', function(e){
	var boxHoverOutput = document.getElementById('boxHoverOutput');
	boxHoverOutput.innerHTML = '<h6>Mouse Out!</h6>';
	console.log(e.type);
});

var box2 = document.getElementById('box2').addEventListener('mouseover', function(){
	var boxHoverOutput2 = document.getElementById('boxHoverOutput2');
	boxHoverOutput2.innerHTML = '<h6>Mouse Over!</h6>';
});

var box2 = document.getElementById('box2').addEventListener('mouseout', function(){
	var boxHoverOutput2 = document.getElementById('boxHoverOutput2');
	boxHoverOutput2.innerHTML = '<h6>Mouse Out!</h6>';
});

var box3 = document.getElementById('box3').addEventListener('mousemove', function(e){
	var mouseMoveOutput = document.getElementById('mouseMoveOutput');
	mouseMoveOutput.innerHTML = '<h6>Mouse Move Fired</h6>';
	console.log(e.type);
	
});

var showInput = document.getElementById('showInput').addEventListener('input', function(e){
	var showInputOutput = document.getElementById('showInputOutput');
	showInputOutput.innerHTML = '<h6>'+e.target.value+'</h6>'
});


var keydown = document.getElementById('keydown').addEventListener('keydown', function(e){
	var keydownOutput = document.getElementById('keydownOutput');
	keydownOutput.innerHTML = '<h6>Keydown Event Fired</h6>';
});

var keyup = document.getElementById('keyup').addEventListener('keyup', function(e){
	var keyupOutput = document.getElementById('keyupOutput');
	keyupOutput.innerHTML = '<h6>Keyup Event Fired</h6>';
});

var keypress = document.getElementById('keypress').addEventListener('keypress', function(e){
	var keypressOutput = document.getElementById('keypressOutput');
	keypressOutput.innerHTML = '<h6>Keypress Event Fired</h6>';
});


var focusblur = document.getElementById('focusblur');

focusblur.addEventListener('focus', function(e){
var focusblurOutput = document.getElementById('focusblurOutput');
focusblurOutput.innerHTML = '<h6>Focus Event Fired</h6>';
});

focusblur.addEventListener('blur', function(e){
var focusblurOutput = document.getElementById('focusblurOutput');
focusblurOutput.innerHTML = '<h6>Blur Event Fired</h6>';
});

var cut = document.getElementById('cut').addEventListener('cut',function(e){
	var cutOutput = document.getElementById('cutOutput');
	cutOutput.innerHTML = '<h6>You cut the text</h6>'
});

var paste = document.getElementById('paste').addEventListener('paste',function(e){
	var pasteOutput = document.getElementById('pasteOutput');
	pasteOutput.innerHTML = '<h6>You pasted the text</h6>'
});

var cutBody = document.getElementById('cutBody').addEventListener('cut',function(e){
	document.body.style.backgroundColor = '	#FFD700';
});

var select = document.getElementById('select').addEventListener('input',function(e){
	var selectOutput = document.getElementById('selectOutput');
	selectOutput.innerHTML = '<h6>You selected '+e.target.value+'</h6>';
});

//JAVASCRIPT ANIMATIONS
//CHAIN
function chain(){
	var chain = document.getElementById('chain');
	chain.innerHTML = '&#xf0c1;';

	setTimeout(() => {
	chain.innerHTML = '&#xf127;';
	},1000);
}
chain();

setInterval(chain,2000);


//BELL
function bell(){
	var bell = document.getElementById('bell');
	bell.innerHTML = '&#xf0f3;';

	setTimeout(() => {
		bell.innerHTML = '&#xf1f6;';
	},1000);
}

bell();
setInterval(bell, 2000);

//BATTERY
function battery(){
	var battery = document.getElementById('battery');
	battery.innerHTML = '&#xf244;';

	setTimeout(() => {
		battery.innerHTML = '&#xf243;';
	},1000);  

	setTimeout(() => {
		battery.innerHTML = '&#xf242;';
	},2000); 

	setTimeout(() => {
		battery.innerHTML = '&#xf241;';
	},3000); 

	setTimeout(() => {
		battery.innerHTML = '&#xf240;';
	},4000);
}

battery();
setInterval(battery, 5000);

//ARROWS
function arrows(){
	var arrows = document.getElementById('arrows');
	arrows.innerHTML = '&#xf107;';

	setTimeout(() => {
		arrows.innerHTML = '&#xf104;';
	},1000);  

	setTimeout(() => {
		arrows.innerHTML = '&#xf106;';
	},2000); 

	setTimeout(() => {
		arrows.innerHTML = '&#xf105;';
	},3000); 

	setTimeout(() => {
		arrows.innerHTML = '&#xf103;';
	},4000);

	setTimeout(() => {
		arrows.innerHTML = '&#xf100;';
	},5000);

	setTimeout(() => {
		arrows.innerHTML = '&#xf102;';
	},6000);  

	setTimeout(() => {
		arrows.innerHTML = '&#xf101;';
	},7000);

}

arrows();
setInterval(arrows, 8000);

//EMOJI
function emoji(){
	var emoji = document.getElementById('emoji');
	emoji.innerHTML = '&#xf582;';

	setTimeout(() => {
		emoji.innerHTML = '&#xf584;';
	},1000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf586;';
	},2000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf588;';
	},3000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf58a;';
	},4000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf597;';
	},5000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf598;';
	},5000);

	setTimeout(() => {
		emoji.innerHTML = '&#xf584;';
	},6000);

}
emoji();
setInterval(emoji, 7000);

//MODAL
var modalBtn = document.getElementById('modalBtn');
var modal1 = document.getElementById('modal1');
modalBtn.addEventListener('click',showModal);

function showModal(){
	var modal1 = document.getElementById('modal1');
	modal1.style.display = 'block';
	
}

var closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click',closeModal);
function closeModal(){
	modal1.style.display = 'none';
}

//WEIGHT CONVERTER APP
document.getElementById('convertedValues').style.visibility = 'hidden';
		var gramsInput = document.getElementById('gramsInput').addEventListener('input', function(){  //yahan humne andar he function ko call kara liya isiliye function word he likhna padega, usko naam de doge toh nahi chalega coz then it will search for a function named "whatever you named it" outside of this in the script tag.
			document.getElementById('convertedValues').style.visibility = 'visible';
			var value = document.getElementById('gramsInput').value;
			document.getElementById('poundsOutput').innerHTML = value* .0022;
			document.getElementById('kilosOutput').innerHTML = value/1000;
			document.getElementById('ozOutput').innerHTML = value*0.03527;
		});

document.getElementById('myForm').addEventListener('submit', postName);


function postName(e){
      e.preventDefault();

      var name = document.getElementById('name').value;
  

      var params = "name="+name; //Have to do this since we're using POST method.


      var xhr = new XMLHttpRequest(); //variable could be named anything. We chose xhr coz it's smaller and probably makes more sense.
      xhr.open('POST', 'insert.php', true); //'method','url','asynchronus?'
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //Have to do this coz POST method

      xhr.onload = function(){
        // console.log(this.responseText);
        document.getElementById('userAdded').innerHTML = this.responseText;
      }

      xhr.send(params);
    }


    document.getElementById('fetchData').addEventListener('click', loadUsers);

    function loadUsers(){
    	var xhr = new XMLHttpRequest();
    	xhr.open('GET', 'display.php', true);
    	xhr.onload = function(){
    		if(this.status == 200){
    			var users = JSON.parse(this.responseText);

    			var output = '';

    			for(var i in users){
    				// output += '<ul'+
    				// '<li>ID: '+users[i].id+'</li>' +
    				// '<li>Name: '+users[i].name+'</li>' +
    				// '</ul>';

    				output += `<ul><li>ID: ${users[i].id}<br>Name: ${users[i].name}</li></ul>`; //USED ES-6 backticks syntax
    			}
    			document.getElementById('displayData').innerHTML = output;
    		}
    	}
    	xhr.send();
    }

