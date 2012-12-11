//NAME
var currentLocation = 0;

function textFunction() {
	 switch(currentLocation) {
	     case 0 : document.getElementById("idnorth").style.visibility="visible";
	 			  document.getElementById("idsouth").style.visibility="visible";
	              document.getElementById("ideast").style.visibility="visible";
	              document.getElementById("idwest").style.visibility="visible";

	     break;

	     case 1 : document.getElementById("idnorth").style.visibility="visible";
	 			  document.getElementById("idsouth").style.visibility="visible";
	 			  document.getElementById("ideast").style.visibility="hidden";
	 			  document.getElementById("idwest").style.visibility="hidden";

	 	 break;

		 case 2 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="visible";
	 			  document.getElementById("ideast").style.visibility="visible";
	 			  document.getElementById("idwest").style.visibility="hidden";

	 	 break;

         case 3 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="hidden";
				  document.getElementById("idwest").style.visibility="visible";

		 break;

 		 case 4 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="visible";
	 			  document.getElementById("idwest").style.visibility="visible";

	 	 break;

		 case 5 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="hidden";
	 			  document.getElementById("idwest").style.visibility="visible";

	 	 break;

	     case 6 : document.getElementById("idnorth").style.visibility="visible";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="hidden";
	 			  document.getElementById("idwest").style.visibility="visible";

	 	 break;

	     case 7 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="visible";
	 			  document.getElementById("idwest").style.visibility="hidden";

	 	 break;

	     case 8 : document.getElementById("idnorth").style.visibility="visible";
	 			  document.getElementById("idsouth").style.visibility="hidden";
	 			  document.getElementById("ideast").style.visibility="visible";
	 			  document.getElementById("idwest").style.visibility="hidden";

	 	 break;

	     case 9 : document.getElementById("idnorth").style.visibility="hidden";
	 			  document.getElementById("idsouth").style.visibility="visible";
	 			  document.getElementById("ideast").style.visibility="hidden";
	 		 	  document.getElementById("idwest").style.visibility="hidden";
	 	 break;
	 }
}