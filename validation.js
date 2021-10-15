// Récupération données du localStorage
const orderIdValidation = localStorage.getItem("orderId")
const pricePaidValidation = localStorage.getItem("pricePaid")
// Sélection des emplacements dans la page html 
const displayOrderId = document.getElementById("orderId");
const displayPricePaid = document.getElementById("pricePaid")
// Import du HTML et affichge des données
displayOrderId.innerText = orderIdValidation;
displayPricePaid.innerText = pricePaidValidation;
// Vider le localStorage
localStorage.clear();