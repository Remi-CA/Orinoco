let produitRegisterLS = JSON.parse(localStorage.getItem("produit"));

const displayProduitsPanier = document.getElementById("container");

if (produitRegisterLS === null) {
    const panierEmpty =
        `
<div class="Empty">
    <p>Le panier est vide</p>
</div>
`;
    displayProduitsPanier.innerHTML = panierEmpty;
}
else {
    let produitsPanier = [];

    for (j = 0; j < produitRegisterLS.length; j++) {
        produitsPanier = produitsPanier +
            `
    <div class="insertProduct">
        <div>Produit = ${produitRegisterLS[j].nomCamera} comprenant l'option ${produitRegisterLS[j].optionCamera}</div>
        <div>Prix = ${produitRegisterLS[j].prix} €</div>
        <div><button class="Delete">Retirer le produit du panier</button></div>
    </div>
    `;
    }
    if (j == produitRegisterLS.length) {
        displayProduitsPanier.innerHTML = produitsPanier;
    }
}

const btnDelete = document.getElementsByClassName("Delete");
let currentOrder = JSON.parse(localStorage.getItem("produit"));

for (let k = 0; k < btnDelete.length; k++) {
    btnDelete[k].addEventListener("click", (event) => {
        event.preventDefault();
        let productDelete = produitRegisterLS[k].nomCamera;
        console.log(productDelete);

        produitRegisterLS = produitRegisterLS.filter((el) => el.nomCamera !== productDelete)
        localStorage.setItem("produit", JSON.stringify(produitRegisterLS));
        window.location.href = "panier.html";
        // if (currentOrder[k].nomCamera == productDelete) {
        //     currentOrder = produitRegisterLS.splice([k], 1);

        //     localStorage.setItem("product", JSON.stringify(produitRegisterLS));
        //     window.location.href = "panier.html";
        // }
    })
}

let amountPrice = [];
for (let l = 0; l < produitRegisterLS.length; l++) {
    let productsPrice = produitRegisterLS[l].prix;
    amountPrice.push(productsPrice);
}

const reducer = (acc, cur) => acc + cur;
const finalPrice = amountPrice.reduce(reducer);

const selectForFinalPrice = document.getElementById("Price");

const displayFinalPrice = `
<div class="PrixFinal">Le montant total à payer est de : ${finalPrice}</div>
`

selectForFinalPrice.innerHTML = displayFinalPrice;



const settingForm = () => {
    const selectForm = document.getElementById("Form");
    const htmlForm = `
        <div id="Formulaire">
            <form>
                <label for="prenom">Prénom</label>
                <input id="prenom" type="text" name="prenom" required>
                <label for="nom">Nom</label>
                <input id="nom" type="text" name="nom" required>
                <label for="adresse">Adresse</label>
                <textarea name="adresse" id="adress" cols="30" rows="10" required></textarea>
                <label for="ville">Ville</label>
                <input id="city" type="text" name="ville" required>
                <label for="CP">Code postal</label>
                <input id="cp" type="text" name="CP">
                <label for="email">E-mail</label>
                <input id="mail" type="text" name="email" required>
                <button id="SendForm" type="submit" name="SendForm">Valider la commande</button>
            </form>
            </div>
        
    `
    selectForm.insertAdjacentHTML("afterbegin", htmlForm)
}
settingForm();

const selectSendForm = document.getElementById("SendForm");

selectSendForm.addEventListener("click", (event) => {
    event.preventDefault();

    const formValues = { 
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        adresse: document.getElementById("adress").value,
        ville: document.getElementById("city").value,
        CodePostal: document.getElementById("cp").value,
        Mail: document.getElementById("mail").value
    }

    const recupPrenom = formValues.prenom;
    if(/^[A-Z a-z]{3,25}$/.test(recupPrenom)){
        
        console.log("ok");
    }
    else {
        console.log('pas ok');
        alert("Veuillez saisir correctement le formulaire")
    };

    localStorage.setItem("formValues", JSON.stringify(formValues));



    

    const formToSend = { produitRegisterLS, formValues }
    console.log(formToSend);
})


