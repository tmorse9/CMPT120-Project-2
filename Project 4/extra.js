var playerHasKey = false;
var playerHasTube = false;
var playerHasMail = false;
var moveCount = 0;


function init() {
	 location0();
}

function displayInventory() {
	 var msg = ""; 
		 if (playerHasKey) {
			 msg ="-Key";
			 updateDisplay(msg);
		 }
		 if (playerHasTube) {
			 msg ="-Tube";
			 updateDisplay(msg);
		 }
		 if (playerHasMail) {
			 msg ="-Mail";
			 updateDisplay(msg);
		 }
	 updateDisplay("Invertory:");
}

function updateDisplay(msg) {
	msg = msg;
	var ta = document.getElementById("taGame");
	ta.value = msg + "\n" + ta.value;
}

function btn_go_click() {
	 var userinput = document.getElementById("txtCommand"); 
	 if (userinput.value === ("N")) {
		 move(north);
	 } else if (userinput.value === ("S")) {
		 move(south);
	 } else if (userinput.value === ("E")) {
	     move(east);
	 } else if (userinput.value === ("W")) {
		 move(west);
	 } else if (userinput.value === ("n")) {
		 move(north);
	 } else if (userinput.value === ("s")) {
		 move(south);
	 } else if (userinput.value === ("e")) {
		 move(east);
	 } else if (userinput.value === ("w")) {
		 move(west);
	 } else if (userinput.value === ("moves")) {
		 updateDisplay ("You have made" + " " + moveCount + " " + "moves")
	 } else if (userinput.value === ("help")) {
		 updateDisplay ("Valid commands are \"N\", \"n\", \"S\", \"s\", \"E\", \"e\", \"W\", \"w\", \"moves\" and \"help\". ")
	 } else {
		 updateDisplay ("Valid input valid command. To see all valid commands please type \"help\" ")
			 	 }
}

