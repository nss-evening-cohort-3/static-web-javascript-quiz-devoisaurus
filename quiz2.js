// Declaring variable for click event
var submitButton = document.getElementById("button");
// Setting up empty object to pass key values to
var treeObject = {};
// Declaring variable for spacing
var line = "";
// used for validation function
var heightInput = document.getElementById("height");
var charInput = document.getElementById("character");

// validates that both fields are complete.  if not, alert pops up, if both complete, the function runs
function validate() {
  if (((heightInput.value).length === 0) || ((charInput.value).length === 0)) {
    alert("Please enter both a height and a character!")
  }
  else {
  	treeObject.height = document.getElementById("height").value;
		treeObject.character = document.getElementById("character").value;
		// console.log("test", treeObject);
  	buildTree(treeObject);
  }
 }

// function to build tree in console with mathy things
function buildTree() {
 for (var i = 1; i <= treeObject.height; i ++) {
     line=""; 
    for (var j = 0; j <= treeObject.height-i-1; j++) {
      line += " ";
    }
    for (var j = 1; j<= 2*i - 1; j++) {
      line += treeObject.character;
  }
    console.log(line);
  }
  
};



// click event for button
submitButton.addEventListener("click", validate);
