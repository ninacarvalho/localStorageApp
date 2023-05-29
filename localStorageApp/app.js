let nameField = document.getElementById('nameField');

const subButton = document.getElementById('subButton');
const delAllButton = document.getElementById('delAllButton');

let employeesList = [];

subButton.addEventListener("click", showName);
delAllButton.addEventListener('click', delAll);

function update() {
	while (ulEmployees.firstChild) {
		ulEmployees.removeChild(ulEmployees.firstChild)
	}
	
	employeesList.forEach(e => {
		liCreator(e)
	});
}

function showName(e) {
	e.preventDefault();
	var name = nameField.value;

	employeesList.push(name);
	liCreator(name);
 }

 function delAll(e) {
	e.preventDefault();
	
	employeesList = [];
	update();
 }

 liCreator = (n) => {
	let li = document.createElement('li');
	li.innerText = n;
	ulEmployees.appendChild(li);
}