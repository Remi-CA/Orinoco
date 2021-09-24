let camerasData = [];
const importHTML = document.querySelector("#content");

const fetchCamera = async () => {

    await fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => (camerasData = data));

};

const cameraDisplay = async () => {
    await fetchCamera();
    importHTML.innerHTML = "<div id='container'>"
    importHTML.innerHTML += camerasData.map(
        (camera) =>  
    `
    <div class="card">
        <img class="card-img-top" src=${camera.imageUrl} alt="Photo camera">
        <div class="card-body">
            <h5 class="card-title">${camera.name}</h5>
            <p class="card-text">${camera.description}</p>
            <p class="card-text">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(camera.price/100)}</p>
        </div>
    </div>
    `
    )  
    .join('')
    importHTML.innerHTML += "</div>"
};

cameraDisplay ();