// ----- Résumé du panier ----- //

// initialisation de variables et constantes
const nameBasket = document.getElementById("name--basket");
const colorBasket = document.getElementById("color--basket");
const priceBasket = document.getElementById("price--basket");

let totalPrice = document.getElementById("total-price");
let sumPrice = 0;
let addPrice = 0;
let idArray = [];
totalPrice.innerHTML = "Cout Total: "+sumPrice+" €";

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
    totalPrice.innerHTML = "Cout Total: "+sumPrice+" €";
}

// ----- Informations de commande ----- //

submitBtn = document.getElementById("btn-submit");

// Btn pour vider le panier
clearBtn = document.getElementById("clear--basket");

clearBtn.addEventListener('click',() =>{
    localStorage.clear();
    document.location.reload();
    alert("Panié vidé");
});

// ----- Validations ------ //

let form = document.querySelector('#formUserInfo');
let nameIsValid = false;
let lastNameIsValid = false;
let cityIsValid = false;
let adressIsValid = false;
let emailIsValid = false;

// Validation Email  
form.email.addEventListener('change', function(){
    validEmail(this);
});
// Validation premon
form.name.addEventListener('change', function(){
    validName(this);
});
// Validation nom 
form.nom.addEventListener('change', function(){
    validLastName(this);
});
// Validation ville 
form.city.addEventListener('change', function(){
    validCity(this);
});
// Validation adresse 
form.adress.addEventListener('change', function(){
    validAdress(this);
});

// Fonction validation email
const validEmail = function(inputEmail){
    // RegEx Email
    let emailRegEx = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
    );
    let testEmail = emailRegEx.test(inputEmail.value);
    let small = document.getElementById("small-email")
    if (testEmail) {
        small.innerHTML ="Adresse Valide";
        small.classList.remove('wrong');
        small.classList.add('right');
        emailIsValid = true;
    }else{
        small.innerHTML = 'Adresse non Valide';
        small.classList.remove('right');
        small.classList.add('wrong');
        emailIsValid = false;
    }
};

// Fonction validation Prénom
const validName = function(inputName){
    // RegEx Prenom
    let nameRegEx = new RegExp(
        "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
        'g'
    );
    let testName = nameRegEx.test(inputName.value);
    let smallName = document.getElementById("small-name")
    if (testName) {
        smallName.innerHTML ="Prénom Valide";
        smallName.classList.add('right');
        smallName.classList.remove('wrong');
        nameIsValid = true;
    }else{
        smallName.innerHTML = 'Prénom non Valide';
        smallName.classList.add('wrong');
        smallName.classList.remove('right');
        nameIsValid = false;
    }
};
// Fonction validation Nom 
const validLastName = function(inputlastname){
    // RegEx 
    let lastnameRegEx = new RegExp(
        "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
        'g'
    );
    let testlastname = lastnameRegEx.test(inputlastname.value);
    let smalllastname = document.getElementById("small-lastname")
    if (testlastname) {
        smalllastname.innerHTML ="Nom Valide";
        smalllastname.classList.add('right');
        smalllastname.classList.remove('wrong');
        lastNameIsValid = true;
    }else{
        smalllastname.innerHTML = 'Nom non Valide';
        smalllastname.classList.add('wrong');
        smalllastname.classList.remove('right');
        lastNameIsValid = false;
    }
};
// Fonction validation Ville 
const validCity = function(inputCity){
    // RegEx Ville
    let CityRegEx = new RegExp(
        "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
        'g'
    );
    let testCity = CityRegEx.test(inputCity.value);
    let smallCity = document.getElementById("small-city")
    if (testCity) {
        smallCity.innerHTML ="Ville Valide";
        smallCity.classList.add('right');
        smallCity.classList.remove('wrong');
        cityIsValid = true;
    }else{
        smallCity.innerHTML = 'Ville non Valide';
        smallCity.classList.add('wrong');
        smallCity.classList.remove('right');
        cityIsValid = false;
    }
};
// Fonction validation Adresse
const validAdress = function(inputAdress){
    // RegEx Adresse 
    let AdressRegEx = new RegExp(
        "[^A-Za-z0-9]+",
        'g'
    );
    let testAdress = AdressRegEx.test(inputAdress.value);
    let smallAdress = document.getElementById("small-adress")
    if (testAdress) {
        smallAdress.innerHTML ="Adresse Valide";
        smallAdress.classList.add('right');
        smallAdress.classList.remove('wrong');
        adressIsValid = true;
    }else{
        smallAdress.innerHTML = 'Adresse non Valide';
        smallAdress.classList.add('wrong');
        smallAdress.classList.remove('right');
        adressIsValid = false;
    }
};

submitBtn.addEventListener('click',() =>{
    if (adressIsValid && cityIsValid && lastNameIsValid && emailIsValid && nameIsValid ){
        
    } else {
        alert("Les champs ne sont pas valides")
    }
})