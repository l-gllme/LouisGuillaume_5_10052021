//Fonction de recupération de l'id dans l'URL
function getParameter( parameterName){
	let parameter = new URLSearchParams( window.location.search);
	return parameter.get(parameterName);
}
//Récupération de l'id
const id = getParameter("id");

// Initialistations de variables
const img = document.getElementById('img');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');

const optionSelect = document.getElementById('option-select');

//recupération des données de lapi pour un seul objet
fetch('http://localhost:5000/api/teddies/' + id)
	.then(res => {
		if(res.ok){
			res.json().then(data =>{
				img.src = data.imageUrl
				price.innerHTML = "Prix: "+data.price/100 + "€"
				name.innerHTML = data.name
				description.innerHTML = data.description

				for(i in data.colors){
					const newOption = document.createElement("option");
					newOption.value = data.colors[i];
					newOption.innerHTML = data.colors[i]
					optionSelect.appendChild(newOption);
				}
				let product = {
					_id: id,
					productName: data.name,
					color: optionSelect.value,
					price: data.price/100
				};
				
				//envoi des données au local storage
				const sendToBasket = document.getElementById('add-basket');
				sendToBasket.addEventListener('click',() => {
				product.color = optionSelect.value;
				sendToLocalStorage(product);
				});
			})
		}else{
			console.log("Error");
		}
	})

function sendToLocalStorage(product){
	let productJSON = JSON.stringify(product);
	alert("Produit ajouté au panier !");
	let randomId = Date.now();
	localStorage.setItem(randomId,productJSON);
};