// Pakimanes
let pakimanes = [
    {
        name: "Cauthin",
        type: "Planta 🌿",
        attack: 50,
        life: 150,
        img: "../assets/images/cauchin.png"
    },
    {
        name: "Pokacho",
        type: "Fuego 🔥",
        attack: 110,
        life: 90,
        img: "../assets/images/pokacho.png"
    },
    {
        name: "Tocinauro",
        type: "Agua 💧",
        attack: 90,
        life: 110,
        img: "../assets/images/tocinauro.png"
    },
];

// Main Section Cards
const cardSection = document.querySelector("#pakimans-section");

pakimanes.forEach( pakiman => {
    cardSection.innerHTML +=
    `
        <div class="pakiman-card">
            <h2 class="pakiman-name">${pakiman.name}</h2>
            <div class="pakiman-content">
                <img class="pakiman-img" src="${pakiman.img}" alt="pakiman"/>
                <div class="pakiman-stats">
                    <h5>Tipo: <i>${pakiman.type}</i> </h5>
                    <h5>Ataque: <i>${pakiman.attack}</i> </h5>
                    <h5>VidaTipo: <i>${pakiman.life}</i> </h5>
                </div>
            </div>
        </div>
    `
} );

const cardPakiman = document.querySelectorAll(".pakiman-card");

cardPakiman.forEach( card => {
    card.addEventListener("click", () => {
        removeClassActive();
        card.className = "pakiman-card pakiman-card-active";
    });
});

const removeClassActive = () => {
    cardPakiman.forEach( card => {
        card.className = "pakiman-card";
    });
}

//Map Section
const mapCanvas = document.querySelector("#mapCanvas");
let mapDraw = mapCanvas.getContext("2d");

async function loadImage (url) {
    let img = new Image();
    await new Promise( load =>
        img.onload = load,
        img.src=url
    );
    mapDraw.drawImage(img, 10, 10, 65, 45);
}

loadImage(pakimanes[0].img);