//window.location.search permet de sélection l'ID avec le point d'interrogation dans l'URL
const urlId = window.location.search;

//slice permet de supprimer le point d'interrogation
const _id = urlId.slice(1);

//Appel du produit avec fetch et l'écrire en HTML
const selectionProduct = document.getElementById("product");

async function cameraProduct() {

    let reponse = await fetch(`http://localhost:3000/api/cameras/${_id}`);
    let data = await reponse.json();
    selectionProduct.innerHTML =
        `
    <div class="card card-product">
            <img class="card-img-top" src=${data.imageUrl} alt="Photo camera">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.description}</p>
                <form>
                    <label for="option_produits"></label>
                    <select name="option_produits" id="option_produits">
                    </select>
                </form></br>
                <p class="card-text">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.price / 100)}</p>
                <button id="panier" type="submit" name="ajouter-au-panier">Ajouter au panier</button>
            </div>
    </div>
    `

    //------Gérer les options d'achat en l'occurence les optiques pour les caméras------
    //Création de la variable recensant toutes les options d'optiques

    const options = data.lenses;

    //Création d'une variable sous forme d'Array vide pour y impléter les options du produit

    let allOptions = [];

    //Création d'une boucle for pour ajouter la totalité des options du produit

    for (let i = 0; i < options.length; i++) {
        allOptions += `<option value="${options[i]}">${options[i]}</option>`
    }

    //Sélection la div avec l'ID pour générer le code HTML

    const displayOption = document.getElementById("option_produits");

    //Génération du code HTML

    displayOption.innerHTML = allOptions;

    //------Gestion du panier------
    //Sélection de l'ID du bouton panier

    const panier = document.getElementById("panier");

    //Ecoute du bouton au click

    panier.addEventListener("click", (event) => {
        event.preventDefault();

        //Prendre en compte le choix de l'utilisateur

        const choiceOption = displayOption.value;

        //Afficher les valeurs dans le panier

        let displayPanier = {
            imageCamera: data.imageUrl,
            nomCamera: data.name,
            optionCamera: choiceOption,
            quantite: 1,
            prix: data.price / 100,
        }

        //Paramètrage du localStorage
        let produitRegisterLS = JSON.parse(localStorage.getItem("produit"));
        const resquestConfirmationPopUp = () => {
            if (window.confirm(`${data.name} à été ajouté au panier, voulez vous aller au panier ?`)) {
                window.location.href = "panier.html";
            }
            else {
                console.log("ok");
            }
        }

        if (produitRegisterLS) {
            produitRegisterLS.push(displayPanier);
            localStorage.setItem("produit", JSON.stringify(produitRegisterLS));
            resquestConfirmationPopUp();
        }
        else {
            produitRegisterLS = [];
            produitRegisterLS.push(displayPanier);
            localStorage.setItem("produit", JSON.stringify(produitRegisterLS));
            resquestConfirmationPopUp();
        }
    });
}
cameraProduct();



