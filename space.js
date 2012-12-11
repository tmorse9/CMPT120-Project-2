// 
// space.js
//{id,	name,	description,	item,	toString()}
// spaceShip prototype
//
function spaceShip(_name, _clazz, _creator, _hp, _homeWorld) {
	 this.name    = _name;
	 this.clazz   = _clazz;
	 this.creator = _creator;
	 this.hp      = _hp;
	 this.color   = "silver"
	 if (_homeWorld === undefined) {
	     this.homeWorld = "Hoth";
     } else { 
	     this.homeWorld = _homeWorld;
     }
	 //changes 10-31-12 toString method
	 this.toString = function() {
		 var retVal = "";
		 retVal = "[spaceShip]" 				 + "\n" +
				  "name:" + this.name 			 + "\n" +
				  "class:" + this.clazz 		 + "\n" +
				  "creator:" + this.creator 	 + "\n" +
				  "Horse Power:" + this.hp		 + "\n" +
				  "color:" + this.color 		 + "\n" +
				  "home world:" + this.homeWorld + "\n";
		 return retVal;
	 }
     // end 10-31-12

}
 
 function tester() {
	 //create myShip as an instance of the spaceShip prototype
	 myShip = new spaceShip("Alan", "CS-1", "Kirok", "1.5");
	 // changes 10-31-12 toString method
	 //alert(myShip)
	 // end 10-31-12
	 yourShip = new spaceShip("Justin", "Bashful", "Sleepy", "Doopey");
	 updateText(myShip/*.name + "," + myShip.hp + "," + myShip.color);*/);
	 updateText(yourShip/*.name + "," + yourShip.hp + "," + yourShip.color*/);
	 yourShip.color = "white";
	 updateText(yourShip);
}
 