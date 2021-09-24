// const { response } = require("express");

// const promise = fetch("http://localhost:3000/api/cameras");

// const displayName = document.querySelector("#name");
// const displayPrice = document.querySelector("#price");
// const displayDescription = document.querySelector("#description");
// const displayImagePhoto = document.querySelector("#imagePhoto");


// promise
// .then((response) => {
//     const data = response.json();
//     data.then((cameras) => {
        
//         for (const camera in cameras) {

//         }


        
//         const name = cameras[0].name;
//         const price = cameras[0].price;
//         const description = cameras[0].description;
//         const image = cameras[0].imageUrl;
//         // const imagePhoto = `<img src="${image}">`;

//         // console.log(image);

        // displayName.innerHTML = name;
        // displayPrice.innerHTML = price;
        // displayDescription.innerHTML = description;
        // // displayImagePhoto.insertAdjacentHTML("afterbegin", imagePhoto);

        

        // console.log(imagePhoto);
//     })
// })



// for (let value in camera){
//     console.log(`Affiche ${value} ${promise1[value]}`);
// }

let camerasData = [];

const fetchCamera = async () => {

    await fetch("http://localhost:3000/api/cameras")
        .then((response) => response.json())
        .then((data) => (camerasData = data));

    console.log(camerasData);
};

const nameDisplay = async () => {
    await fetchCamera();
    document.body.innerHTML = camerasData.map(
        (name) =>  
    `
    <div class="card">
        <img class="card-img-top" src=${name.imageUrl} alt="Photo camera">
        <div class="card-body">
            <h5 class="card-title">${name.name}</h5>
            <p class="card-text">${name.description}</p>
            <p class="card-text">${name.price + " €"}</p>
    </div>
    `
    )
    .join('')
}

nameDisplay ();

