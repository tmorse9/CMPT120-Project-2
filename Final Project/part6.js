
var currentLocation = 0;
var north = 0;
var south = 1;
var east = 2;
var west = 3;
var locales = new Array();
var nav = [          //n0   s1  e2  w3  
	/*location 0*/   [  1,  6,  4,  8],
	/*location 1*/	 [  2,  0, -1, -1],
	/*location 2*/	 [ -1,  1,  3, -1],
	/*location 3*/	 [ -1, -1, -1,  2],
	/*location 4*/	 [ -1, -1,  5,  0],
	/*location 5*/	 [ -1, -1, -1,  4],
	/*location 6*/	 [  0, -1, -1,  7],
	/*location 7*/	 [ -1, -1,  6, -1],
	/*location 8*/	 [  9, -1,  0, -1],
	/*location 9*/	 [ -1,  8, -1, -1],
		 ]
			 

function newLocation(main_id, main_name, main_description, main_item) {
	 this.id          = main_id;
	 this.name        = main_name;
	 this.description = main_description;

	 if (main_item === undefined) {
	 	 this.item = "";
	 } else if ((typeof(itemList[currentLocation]) !== 'undefined') && (itemList[currentLocation].take === true)) {
	 	    this.item = "";
	 } else {
	 	this.item = main_item;
	}

	 this.toString = function() {
	 	 var retVal = "";
	 	 retVal = "[newLocation]"		             + "\n" +
	 	  		   "id:" + this.id 		             + "\n" +
	 	  		   "name:" + this.name               + "\n" +
	 	  		   "description:" + this.description + "\n" +
	 	  		   "item:" + this.item               + "\n";
	 	 return retVal;
	 }
 }


function initializeLocation() {
	 location0 = new newLocation("0", "Front Door", "You are outside your front door.", "");
	 location1 = new newLocation("1", "Breezeway", "You are now in the breezeway of your house", itemList[1].description);
	 location2 = new newLocation("2", "Kitchen", "You have made it to the kitchen but it looks different, you start to look around", "");
	 location3 = new newLocation("3", "Hidden Room", "You have found a trap door but it is locked! :(, go look outside for the key", "");
	 location4 = new newLocation("4", "Pool", "You have come to the edge of the pool", "");
	 location5 = new newLocation("5", "Center of the pool", "You are swimming in the middle of the pool", itemList[5].description);
	 location6 = new newLocation("6", "Mailbox", "You are out at your mail box!", itemList[6].description);
	 location7 = new newLocation("7", "Car", "You see a strange car, you go investigate but no one is in it...", "");
	 location8 = new newLocation("8", "Swingset", "You are at the swingset", itemList[8].description);
	 location9 = new newLocation("9", "Slide", "You want to go down the slide!!", "");

	 locales[0] = location0;
	 locales[1] = location1;
	 locales[2] = location2;
	 locales[3] = location3;
	 locales[4] = location4;
	 locales[5] = location5;
	 locales[6] = location6;
	 locales[7] = location7;
	 locales[8] = location8;
	 locales[9] = location9;


}




function displayArray(array2display) {
	 for (var i=0; i < array2display.length; i++) {
		 updateDisplay(i + ":" + array2display[i]);
	 }
	 
}

function move(direction) {
	 //updateDisplay(nav);
	 moveCount = moveCount + 1;
	 var newArea = nav[currentLocation][direction];
	 if(newArea >= 0) { 
		 currentLocation = newArea;
		 textFunction(currentLocation);		 
		 newItem();
		 takeItem();
		 updateDisplay(locales[currentLocation].description);
		 updateDisplay(itemList[currentLocation].description);
		 useCommand();


		 
	 } else {
		 updateDisplay("you can not go this way");
	 }
}
		
		 

function btn_score_click() {
	 updateDisplay("Your current score is," + moveCount);
}

function useCommand(action) {
	 switch(action) {
	 	 case "use" : if ((currentLocation === 3) && (item1 === true) && (use === false)) {
	 	 	 use = true;
	 	 	 updateDisplay("You have used the rusty key to unlock the hidden room!");
	 	 	 winningMove();
	 	 } else { 
	 	 	 updateDisplay("You need a key inorder to open this door.");
	 	 }
	 }
}

function winningMove() {
	 updateDisplay("You unlock the room of secrets, that means you have beaten the game!!!! your score is" + moveCount); 
}