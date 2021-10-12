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
        // event.preventDefault();
        let productDelete = produitRegisterLS[k].nomCamera;

        produitRegisterLS.splice(produitRegisterLS.map(produit => produit.nomCamera).indexOf(productDelete), 1)
        localStorage.setItem("produit", JSON.stringify(produitRegisterLS));
        window.location.href = "panier.html";
    })
}

const finalPrice = produitRegisterLS.reduce((acc, cur) => acc + cur.prix, 0)

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
                <div id="errorPrenom" class="errors"></div>
                <label for="nom">Nom</label>
                <input id="nom" type="text" name="nom" required>
                <div id="errorNom" class="errors"></div>
                <label for="adresse">Adresse</label>
                <textarea name="adresse" id="adress" cols="30" rows="10" required></textarea>
                <label for="ville">Ville</label>
                <input id="city" type="text" name="ville" required>
                <label for="CP">Code postal</label>
                <input id="cp" type="text" name="CP">
                <div id="errorCP" class="errors"></div>
                <label for="email">E-mail</label>
                <input id="mail" type="text" name="email" required>
                <div id="errorMail" class="errors"></div>
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

    const textAlert = (value) => {
        return `${value} A revoir`
    }

    function prenomCTRL() {
        const recupPrenom = formValues.prenom;
        if (/^[A-Z a-z]{3,25}$/.test(recupPrenom)) {
            document.getElementById("errorPrenom").textContent = ""
            return true;
        }
        else {
            document.getElementById("errorPrenom").textContent = "Erreur de saisie"
            return false;
        };
    }

    function nomCTRL() {
        const recupNom = formValues.nom;
        if (/^[A-Z a-z]{3,25}$/.test(recupNom)) {
            document.getElementById("errorNom").textContent = ""
            return true;
        }
        else {
            document.getElementById("errorNom").textContent = "Erreur de saisie"
            return false;
        };
    }

    function cpCTRL() {
        const recupCP = formValues.CodePostal;
        if (/^[0-9]{5}$/.test(recupCP)) {
            document.getElementById("errorCP").textContent = ""
            return true;
        }
        else {
            document.getElementById("errorCP").textContent = "Erreur de saisie"
            return false;
        };
    }

    function mailCTRL() {
        const recupMail = formValues.Mail;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recupMail)) {
            document.getElementById("errorMail").textContent = ""
            return true;
        }
        else {
            document.getElementById("errorMail").textContent = "Erreur de saisie"
            return false;
        };
    }

    if (prenomCTRL() && nomCTRL() && cpCTRL() && mailCTRL()) {
        localStorage.setItem("formValues", JSON.stringify(formValues));
    }
    else {
        console.log("err");
    }


    const formToSend = { produitRegisterLS, formValues }
    console.log(formToSend);
})
