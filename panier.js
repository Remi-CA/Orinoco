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
        <div>Produits = ${produitRegisterLS[j].nomCamera} comprenant l'option ${produitRegisterLS[j].optionCamera}</div>
        <div>Prix = ${produitRegisterLS[j].prix}</div>
        <div>Supprimer le produit</div>
    </div>
    `;
    }
    if (j == produitRegisterLS.length) {
        displayProduitsPanier.innerHTML = produitsPanier;
    }



}