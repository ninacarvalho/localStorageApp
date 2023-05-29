let nameInput = document.getElementById('nameInput');
let nameForm = document.getElementById("nameForm");

const subButton = document.getElementById('subButton');
const removeAllButton = document.getElementById('removeAllButton');

let employeesList = [];

nameForm.addEventListener('submit', insertNewEmployee);
subButton.addEventListener('click', insertNewEmployee);
removeAllButton.addEventListener('click', removeAll);

function updateScreen() {
	while (ulEmployees.firstChild) {
		ulEmployees.removeChild(ulEmployees.firstChild)
	}
	
	employeesList.forEach(e => {
		liCreator(e)
	});
}

function insertNewEmployee(e) {
	e.preventDefault();

	var name = nameInput.value;

	employeesList.push(name);
	liCreator(name);
	
	nameInput.value = '';
 }

 function removeAll(e) {
	e.preventDefault();
	
	employeesList = [];
	updateScreen();
 }


 editButtonCreator = (li) => {
	const button = document.createElement('button');
	button.innerText = 'edit';

	button.addEventListener('click', function () {
		const i = employeesList.indexOf(li.text);
		nameInput.value = li.text;
		employeesList.splice(i,1);
		updateScreen();
	});

	li.appendChild(button);
}


 removeButtonCreator = (li) => {
	const button = document.createElement('button');
	button.innerText = 'delete';

	button.addEventListener('click', function () {
		const i = employeesList.indexOf(li.text);
		employeesList.splice(i,1);
		updateScreen();
	});

	li.appendChild(button);
}

 const liCreator = (n) => {
	let liEmployee = document.createElement('li');
	liEmployee.innerText = n;
	ulEmployees.appendChild(liEmployee);
 	
	removeButtonCreator(liEmployee);
	console.log('li employee: ' + liEmployee.innerHTML);
	
	editButtonCreator(liEmployee);
}

