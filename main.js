let camerasData = [];

//Création fonction en utilisant fetch pour récupérer les DATAs de l'API
const fetchCamera = async () => {

    await fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => (camerasData = data));
};


//Création variable utilisant la fonction fetch pour créer avec .map le code HTML en y implémentant les donnés
const cameraDisplay = async () => {
const importHTML = document.querySelector("#content");

    await fetchCamera();
    importHTML.innerHTML = "<div id='container'>"
    importHTML.innerHTML += camerasData.map(
        (camera) =>  
    `
    <div class="card card-accueil">
        <a class="liens" href="products.html?${camera._id}">
            <img class="card-img-top" src=${camera.imageUrl} alt="Photo camera">
            <div class="card-body">
                <h5 class="card-title">${camera.name}</h5>
                <p class="card-text">${camera.description}</p>
                <p class="card-text">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(camera.price/100)}</p>
            </div>
        </a>
    </div>
    `
    )
    .join('')
    importHTML.innerHTML += "</div>"  
};

cameraDisplay ();
