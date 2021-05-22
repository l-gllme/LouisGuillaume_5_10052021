
const productSection = document.getElementById('widthMain')

//récupération des données de l'api puis incrustation dynamique dans l'HTML
fetch('http://localhost:5000/api/teddies')
	.then(res => {
		if (res.ok) {
			res.json().then(data => {
				for(let i in data){

					const newDiv = document.createElement("div");
					newDiv.classList.add('product');
					newDiv.setAttribute('id', data[i]._id);
					const newA = document.createElement("a");
					//passage des données pas lurl a la page card lors du click
					newA.href = "HTML/card.html?id="+data[i]._id;
					const secondDiv = document.createElement("div");
					secondDiv.classList.add('absoluteProduct');
					const newH2 = document.createElement("h2");
					newH2.innerHTML = data[i].name;
					const newP = document.createElement("p");
					newP.innerHTML = data[i].price/100 + "€";
					const newImg = document.createElement("img");
					newImg.src = data[i].imageUrl;

					productSection.appendChild(newDiv);
					newDiv.appendChild(newA);
					newA.appendChild(secondDiv);
					secondDiv.appendChild(newH2);
					secondDiv.appendChild(newP);
					newA.appendChild(newImg);
				}
			})
		}else {
			console.log('Error');
		}
	})