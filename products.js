//window.location.search permet de sélection l'ID avec le point d'interrogation dans l'URL
const urlId = window.location.search;

//slice permet de supprimer le point d'interrogation
const _id = urlId.slice(1);

//Appel du produit avec fetch et l'écrire en HTML
const selectionProduct = document.getElementById("product");

async function cameraProduct(){

    let reponse = await fetch(`http://localhost:3000/api/cameras/${_id}`);
    let data = await reponse.json();
    selectionProduct.innerHTML = 
    `
    <div class="card">
            <img class="card-img-top" src=${data.imageUrl} alt="Photo camera">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.description}</p>
                <p class="card-text">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.price/100)}</p>
            </div>
    </div>
    `
}
cameraProduct();
