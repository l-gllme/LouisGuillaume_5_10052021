//récupération du numero de commande et du prix total par lurl

function getParameter( parameterName){
	let parameter = new URLSearchParams( window.location.search);
	return parameter.get(parameterName);
}

const id= getParameter("id");
const price = getParameter("price");
const clientName = getParameter("name");

//incrustation dinamyque des données dans l'html 
let commandNumber = document.getElementById("command-number");
let totalPrice = document.getElementById("total-price");
let applyName = document.getElementById("name");

commandNumber.innerHTML = "Le numéro de vote commande est: " +id;
totalPrice.innerHTML = "Pour un cout total de "+price+"€";
applyName.innerHTML = clientName;