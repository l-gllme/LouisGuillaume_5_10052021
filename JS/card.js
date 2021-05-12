function getParameter( parameterName){
	let parameter = new URLSearchParams( window.location.search);
	return parameter.get(parameterName);
}

const id = getParameter("id");
console.log(id);

const img = document.getElementById('img');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');

const optionSelect = document.getElementById('option-select');

fetch('http://localhost:5000/api/teddies/' + id)
	.then(res => {
		if(res.ok){
			res.json().then(data =>{
				console.log(data);
				img.src = data.imageUrl
				price.innerHTML = "Prix: "+data.price/100 + "€"
				name.innerHTML = data.name
				description.innerHTML = data.description

				for(i in data.colors){
					const newOption = document.createElement("option");
					newOption.value = data.colors[i]
					newOption.innerHTML = data.colors[i]
					optionSelect.appendChild(newOption);
				}
			})
		}else{
			console.log("Error");
		}
	})

const sendToBasket = document.getElementById('add-basket');
let storage = 1 ;

sendToBasket.addEventListener('click',() => {
	alert("Produit ajouté au panier !")
	localStorage.setItem(storage, id);
	storage++;
});