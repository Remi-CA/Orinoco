let camerasData = [];
const importHTML = document.querySelector("#content");

const fetchCamera = async () => {

    await fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => (camerasData = data));

    console.log(camerasData);
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
            <p class="card-text">${camera.price + " €"}</p>
        </div>
    </div>
    `
    )
    .join('')
    importHTML.innerHTML += "</div>"
};

cameraDisplay ();