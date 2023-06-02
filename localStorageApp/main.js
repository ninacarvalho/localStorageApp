const removeAllButton = document.getElementById('removeAllButton');
let campoInput = document.getElementById('campoInput');
let valorInput = document.getElementById('valorInput');
let ulEmployees = document.getElementById('ulEmployees');

const campo = {
	campo: "",
	valor: ""
}

const cadastro = localStorage.getItem('CadastroDescontoPorCliente')?
		JSON.parse(localStorage.getItem('CadastroDescontoPorCliente')) :
		{
			tela: "CadastroDescontoPorCliente",
			campos: []
		}
		
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

	cadastro.campos.forEach((campo) => {
		liCreator(campo.campo, campo.valor)
	});
	
	localStorage.setItem('CadastroDescontoPorCliente', JSON.stringify(cadastro));
}

function create(dataCampo, dataValor) {
	campo.campo = dataCampo;
	campo.valor = dataValor;
	cadastro.campos.push(campo);

	localStorage.setItem('CadastroDescontoPorCliente', JSON.stringify(cadastro));

	const obj = JSON.parse(localStorage.getItem('CadastroDescontoPorCliente'));
	console.log(obj.tela);
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

subButton.addEventListener('click', function (e) {
	e.preventDefault()
	let campo = campoInput.value;
	let valor = valorInput.value;

	create(campo, valor);
	liCreator(campo, valor);
	campoInput.value = '';
	valorInput.value = '';
});

cadastro.campos.forEach((campo) => {
	liCreator(campo.campo, campo.valor)
});

function liCreator(campo, valor) {
	let text = campo + ': ' + valor;
	const li = document.createElement('li');
	li.text = text;
	li.textContent = text;
	ulEmployees.appendChild(li);

	removeButtonCreator(li);
}