// Declaring variable for click event
var submitButton = document.getElementById("button");


// validates that both fields are complete.  if not, alert pops up, if both complete, the function runs
function validate() {
 // validating user input
  var heightInput = document.getElementById("height");
  var charInput = document.getElementById("character");
 // empty object for key values 
  var treeObject = {};
 // spacing variable
  var line = "";
  if (((heightInput.value).length === 0) || ((charInput.value).length === 0)) {
    alert("Please enter both a height and a character!")
  }
  else {
    treeObject.height = document.getElementById("height").value;
    treeObject.character = document.getElementById("character").value;
    buildTree(treeObject);
  }
 }

// function to build tree in console with values passed in from validation
function buildTree(treeObject) {
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

// enter key event
addEventListener("keypress", enterKey);
function enterKey(e){
    var keyCode = e.keyCode;
    if(keyCode == 13){
        validate();
    }
};



