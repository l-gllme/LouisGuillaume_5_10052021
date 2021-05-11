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

fetch('http://localhost:5000/api/teddies/' + id)
	.then(res => {
		if(res.ok){
			res.json().then(data =>{
				console.log(data);
				img.src = data.imageUrl
				price.innerHTML = data.price/100 + "€"
				name.innerHTML = data.name
				description.innerHTML = data.description
			})
		}else{
			console.log("Error");
		}
	})