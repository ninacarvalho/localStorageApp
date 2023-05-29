const removeAllButton = document.getElementById('removeAllButton');
let nameInput = document.getElementById('nameInput');
let ulEmployees = document.getElementById('ulEmployees');
let storageList = localStorage.getItem('storage') ?
	JSON.parse(localStorage.getItem('storage')) :
	[];

removeAllButton.addEventListener('click', removeAll);

removeButtonCreator = (li) => {
	const button = document.createElement('button');
	button.innerText = 'delete';

	button.addEventListener('click', function () {
		const i = storageList.indexOf(li.text);
		storageList.splice(i,1);
		updatePage();
	});

	li.appendChild(button);
}	

const updatePage = () => {
	while (ulEmployees.firstChild) {
		ulEmployees.removeChild(ulEmployees.firstChild)
	}

	storageList.forEach(item => {
		liCreator(item)
	});
	
	nameInput.value = ""
	localStorage.setItem('storage', JSON.stringify(storageList));

	console.log(storageList)
	console.log(localStorage.getItem('storage'))
}


function create(data) {
	storageList.push(data);
	localStorage.setItem('storage', JSON.stringify(storageList));
}

function edit(index, data) {
	storageList.splice(index, 0, data);
	localStorage.setItem('storage', JSON.stringify(storageList));
}

function remove(index) {
	storageList.splice(index, 1);
	localStorage.setItem('storage', JSON.stringify(storageList));
}


function removeAll(e) {
	e.preventDefault();
	
	localStorage.clear();
	storageList = [];
	updatePage();
 }

function insertNewEmployee(e) {
	e.preventDefault();
	create(nameInput.value);
}

subButton.addEventListener('click', function (e) {
	e.preventDefault()
	let name = nameInput.value;

	create(name);
	liCreator(name);
	nameInput.value = '';
});

storageList.forEach(item => {
	liCreator(item)
});

function liCreator(text) {
	console.log("text: " + text.value)
	const li = document.createElement('li')
	li.text = text
	li.textContent = text
	ulEmployees.appendChild(li)

	removeButtonCreator(li)
}