//window.location.search permet de sélection l'ID avec le point d'interrogation dans l'URL
const urlId = window.location.search;
console.log(urlId);

//slice permet de supprimer le point d'interrogation
const _id = urlId.slice(1);
console.log(_id);

const product = displayProduct();

function displayProduct() {
    return  fetch(`http://localhost:3000/api/cameras/${_id}`)
    .then((response) => response.json())
};
console.log(article);