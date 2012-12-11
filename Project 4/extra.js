
var itemList = new Array();
var inventory = new Array();
var moveCount = 0;

function init() { 
	 textFunction();
	 callItem();
	 initializeLocation();
	 updateDisplay(locales[currentLocation].description); 
	 takeItem();
}

function newItem(_id, _name, _description, _take) {
	 this.id 		  = _id;
	 this.name 		  = _name;
	 this.description = _description;
	 this.take        = _take;

	 this.toString = function() {
	 	 var retVal = "";
	 	 retVal = "[newItem]"
	 	 		  "id:" + this.id                   + "\n" +
	 	 		  "name:" + this.name               + "\n" +
	 	 		  "description:" + this.description + "\n" +
	 	 		  "take:" + this.take               + "\n";
	 	 return retVal;
	 }
}

function callItem() {
	 item8 = new newItem("8", "Old rusty key", "You have found an old rusty key but you don't know where it goes?", false);
	 item6 = new newItem("6", "A Piece of Mail", "You found a piece of mail that has a bunch of writing on it!", false);
	 item5 = new newItem("5", "A pink donut tube", "You found a pink donut tube in the center of the pool so you swim through the middle and hold on to it!", false);
	 item1 = new newItem("1", "Hybrad car keys", "You found keys to a Hybrad car but they don't look normal to you?", false);

	 itemList[8] = item8;
	 itemList[6] = item6;
	 itemList[5] = item5;
	 itemList[1] = item1;
}


function takeItem() {
	
	 switch(currentLocation) {
		 case 8 : if (itemList[8].take === false) {
			         itemList[8].take = true;
				     inventory[inventory.length] = itemList[8].name;
				     updateDisplay("An old rusty key was added to your backpack");
				  } else {
				  	 updateDisplay("You can only carry one of this item");
				  } 
				  break;
		 case 6 : if (itemList[6].take === false) {
					 itemList[6].take = true;
					 inventory[inventory.length] = itemList[6].name;
					 updateDisplay("A piece of mail was added to your backpack");
				  } else {
				  	 updateDisplay("You can only carry one of this item");
				  }
				  break;
		 case 5 : if (itemList[5].take === false) {
					 itemList[5].take = true;
					 inventory[inventory.length] = itemList[5].name;
					 updateDisplay("A pink donut tube was added to your backpack");
				  } else {
				  	 updateDisplay("You can only carry one of this item");
				  }
				  break;
		 case 1 : if (itemList[1].take === false) {
					 itemList[1].take = true;
					 inventory[inventory.length] = itemList[1].name;
					 updateDisplay("Hybrad car keys were added to your backpack");
				  } else {
				  	 updateDisplay("You can only carry one of this item");
				  }
				  break;
		 default : ;
				  break;
	}
}

function displayInventory() {
	 if (inventory.length > 0) {
	 for (newItem in inventory) {
		 updateDisplay(inventory[newItem]);
	 }
	 updateDisplay("Items in your backpack:");
	 } else {
		 updateDisplay("Your backpack is empty");
	 }

}



function updateDisplay(msg) {
	 msg = msg;
	 var ta = document.getElementById("taGame");
	 ta.value = msg + "\n" + ta.value + "\n";
}

function btn_go_click(command) {
	 var command = document.getElementById("txtCommand");
		 switch(command.value) {
			 case "N"         : 
			 case "n"         : 
			 case "North"     : 
			 case "north"     : move(north);
				 break;
			 case "S"         : 
			 case "s"         : 
			 case "South"     : 
			 case "south"     : move(south);
				 break;
			 case "E"         : 
			 case "e"         : 
			 case "East"      : 
			 case "east"      : move(east);
				 break;
			 case "W"         : 
			 case "w"         : 
			 case "West"      : 
			 case "west"      : move(west);
				 break;
			 case "help"      :
			 case "Help"      : updateDisplay("Acceptable inputs are 'N, n, North, north, S, s, South, south, E, e, East, east, W, w, West, west, Help, help, score, t, take, i, inventory'");
				 break;
			 case "t"	      :
			 case "take"      : takeItem();
				 break;
			 case "inventory" :
			 case "i"         : displayInventory();
				 break;
			 case "score"     : btn_score_click();
			 	 break;
			 default          : updateDisplay("Incorrect text please input 'help' to see acceptable text!");
				 break;
		}
}
