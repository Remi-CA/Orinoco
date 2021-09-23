const promise = fetch("http://localhost:3000/api/cameras");

const displayName = document.querySelector("#name");
const displayPrice = document.querySelector("#price");
const displayDescription = document.querySelector("#description");
// const displayImagePhoto = document.querySelector("#imagePhoto");


promise
.then((response) => {
    const data = response.json();
    data.then((cameras) => {
        
        const name = cameras[0].name;
        const price = cameras[0].price;
        const description = cameras[0].description;
        const image = cameras[0].imageUrl;
        // const imagePhoto = `<img src="${image}">`;

        // console.log(image);

        displayName.innerHTML = name;
        displayPrice.innerHTML = price;
        displayDescription.innerHTML = description;
        // displayImagePhoto.insertAdjacentHTML("afterbegin", imagePhoto);

        

        // console.log(imagePhoto);
    })
})



// for (let value in camera){
//     console.log(`Affiche ${value} ${promise1[value]}`);
// }