function getParameter( parameterName){
	let parameter = new URLSearchParams( window.location.search);
	return parameter.get(parameterName);
}

const id = getParameter("id");

const img = document.getElementById('img');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');

const optionSelect = document.getElementById('option-select');

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
					newOption.value = data.colors[i]
					newOption.innerHTML = data.colors[i]
					optionSelect.appendChild(newOption);
				}
				let product = {
					_id: id,
					productName: data.name,
					color: optionSelect.value,
					price: data.price/100
				};
				let productJSON = JSON.stringify(product);
				const sendToBasket = document.getElementById('add-basket');
				sendToBasket.addEventListener('click',() => {
					alert("Produit ajouté au panier !")
					let randomId = Date.now() ;
					localStorage.setItem(randomId,productJSON);
				});
			})
		}else{
			console.log("Error");
		}
	})