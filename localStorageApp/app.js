let nameField = document.getElementById('nameField');
let nameDisplay = document.getElementById('nameDisplay');

document.getElementById("nameForm").addEventListener("click", f);

function showName(e) {
	e.preventDefault();
	var t = nameField.value;
	nameDisplay.innerHTML = t;
 }

 