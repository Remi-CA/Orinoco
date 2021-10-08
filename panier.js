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