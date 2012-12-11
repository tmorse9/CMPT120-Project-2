var currentLocation = 0;
var north = 1;
var south = 1;
var east = 1;
var west = 1;
			 
					 
function displayNewLocation() {
	 switch (currentLocation) {
		 case 0: location0(); break; //Front Door
		 case 1: location1(); break; //Breezeway	 
		 case 2: location2(); break; //Kitchen
		 case 3: location3(); break; //Hidden Room
		 case 4 : location4(); break; //Pool
		 case 5 : location5(); break; //Center of the pool
		 case 6 : location6(); break; //Mailbox
		 case 7 : location7(); break; //Car
		 case 8 : location8(); break; //Swingset
		 case 9 : location9(); break; //Slide
		 default : updateDisplay("invalid location"); break;
	 }
}


function move(direction) {
	 switch (direction) {
		 
		 case 1 : north() {
			 if (currentLocation === 0) {
				 currentLocation = 1;
			 } else if { (currentLocation === 1) 
				 currentLocation = 2;
			 } else if { (currentLocation === 6) 
				 currentLocation = 0;
			 } else if { (currentLocation === 8) 
				 currentLocation = 9;
			 }
		 }
		 
		 break;
		 
		 case 2 : south() {
			 if (currentLocation === 0) {
				 currentLocation = 6;
			 } else if { (currentLocation === 1) 
				 currentLocation = 0;
			 } else if { (currentLocation === 2) 
				 currentLocation = 1;
			 } else if { (currentLocation === 9) 
				 currentLocation = 8;
			 }
		 }
		 
		 break;
		 
		 case 3 : east() {
			 if (currentLocation === 0) {
				 currentLocation = 4;
			 } else if { (currentLocation === 4) 
				 currentLocation = 5;
			 } else if { (currentLocation === 7) 
				 currentLocation = 6;
			 } else if { (currentLocation === 8)
				 currentLocation = 0;
			 } else if { (currentLocation === 2) 
				 currentLocation = 3;
			 }
		 }
		 
		 break;
		 
		 case 4 west(); {
			 if (currentLocation === 0) {
				 currentLocation = 8;
			 } else if { (currentLocation === 4) 
				 currentLocation = 0;
			 } else if { (currentLocation === 5) 
				 currentLocation = 4;
			 } else if { (currentLocation === 6) 
				 currentLocation = 7; 
			 } else if { (currentLocation === 3)
				 currentLocation = 2;
			 }
		 }
	 }
}
		 

function btn_score_click() {
	 UpdateDisplay ("Your current score is," + score);
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
	 } else if (userinput.value === ("help")) {
		 updateDisplay ("Valid commands are \"N\", \"n\", \"S\", \"s\", \"E\", \"e\", \"W\", \"w\", and \"help\". ")
	 } else {
		 updateDisplay ("Valid input valid command. To see all valid commands please type \"help\" ")
			 	 }
}
