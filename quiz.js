// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

(function(document){

var button = document.getElementById("btn");
console.log("button", button);

var drawTree = function(params) {
	console.log("height", params.height);
	console.log("character", params.character);

	for (var i = 0; i <= params.height; i++) {
		var treeVase = params.character.repeat(i);

		console.log(treeVase);
  }
}

var onClickHandler = function(event) {
	console.log( "2");
 var height= document.getElementById("heightInput").value;     

   console.log("click");
   console.log("height", height);
 var character= document.getElementById("charInput").value;     

   console.log("click click");
   console.log("character", character);
   drawTree({height: height, character: character})
}

button.addEventListener("click", onClickHandler);


})(document);