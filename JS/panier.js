// ----- Résumé du panier ----- //

// initialisation de variables et constantes
const nameBasket = document.getElementById("name--basket");
const colorBasket = document.getElementById("color--basket");
const priceBasket = document.getElementById("price--basket");

let totalPrice = document.getElementById("total-price");
let sumPrice = 0;
let addPrice = 0;
let idArray = [];

//boucle dans le local storage pour récuperer les éléments qui s'y trouvent
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    // Désérialisation de l'objet JSON
    let myproduct = JSON.parse(localStorage.getItem(key));

    // Implémentation de l'objet dans l'HTML
    const newName = document.createElement("p");
    newName.innerHTML = myproduct.productName
    const newPrice = document.createElement("p");
    newPrice.innerHTML = myproduct.price + "€"
    const newColor = document.createElement("p");
    newColor.innerHTML = myproduct.color

    nameBasket.appendChild(newName);
    priceBasket.appendChild(newPrice);
    colorBasket.appendChild(newColor); 
    
    idArray[i] = myproduct._id;

    // Calcul de la somme totale
    addPrice = myproduct.price
    sumPrice =  sumPrice + addPrice;
    totalPrice.innerHTML = sumPrice;
}

console.log(idArray);

// ----- Informations de commande ----- //

