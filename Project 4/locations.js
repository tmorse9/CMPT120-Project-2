//NAME


function location0() {
	 updateDisplay("You are outside your front door.");
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="visible";
	 document.getElementById("idsouth").style.visibility="visible";
	 document.getElementById("ideast").style.visibility="visible";
	 document.getElementById("idwest").style.visibility="visible";
}

function location1() {
	 updateDisplay("You are now in the breezeway of your house");
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="visible";
	 document.getElementById("idsouth").style.visibility="visible";
	 document.getElementById("ideast").style.visibility="hidden";
	 document.getElementById("idwest").style.visibility="hidden";
}

function location2() {
	 updateDisplay("You have made it to the kitchen but it looks different, you start to look around");
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="visible";
	 document.getElementById("ideast").style.visibility="visible";
	 document.getElementById("idwest").style.visibility="hidden";
}

function location3() {
	 //Updates text but allows you to enter room
	 if (playerHasKey) {
		 updateDisplay("The key works on this trap door!! You found a hidden room!!!!");
	 } else { 
		 updateDisplay("You have found a trap door but it is locked! :( go look outside for the key");
	 }
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="hidden";
	 document.getElementById("idwest").style.visibility="visible";
}

function location4() {
	 updateDisplay("You have come to the edge of the pool");
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="visible";
	 document.getElementById("idwest").style.visibility="visible";
}

function location5() {
	 updateDisplay("You are swimming in the middle of the pool");
	 if(!playerHasTube) {
		 updateDisplay("A tube!! you swim threw the bottom of the whole and pop out of the top!!");
		 playerHasTube = true;
	 }else {
		 updateDisplay("You still have the tube so you use it again!");
	 }
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="hidden";
	 document.getElementById("idwest").style.visibility="visible";
}

function location6() {
	 updateDisplay("You are out at your mail box!");
	 if(!playerHasMail) {
		 updateDisplay("There is a piece of mail in the mailbox, you take it!");
		 playerHasMail = true;
	 } else {
		 updateDisplay("");	 
     }
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="visible";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="hidden";
	 document.getElementById("idwest").style.visibility="visible";
}

function location7() {
	 updateDisplay("You see a strange car, you go investigate but no one is in it...");
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="visible";
	 document.getElementById("idwest").style.visibility="hidden";
}

function location8() {
	 updateDisplay("You are at the swingset");
	 if(!playerHasKey) {
		 updateDisplay("You have found a key to an unknown door!!!");
		 playerHasKey = true;
	 } else {
		 updateDisplay("");	 
     }
	 moveCount = moveCount + 1;
	 document.getElementById("idnorth").style.visibility="visible";
	 document.getElementById("idsouth").style.visibility="hidden";
	 document.getElementById("ideast").style.visibility="visible";
	 document.getElementById("idwest").style.visibility="hidden";
}

function location9() {
	 updateDisplay("You want to go down the slide!!");
	 moveCount = moveCount + 1
	 document.getElementById("idnorth").style.visibility="hidden";
	 document.getElementById("idsouth").style.visibility="visible";
	 document.getElementById("ideast").style.visibility="hidden";
	 document.getElementById("idwest").style.visibility="hidden";
}