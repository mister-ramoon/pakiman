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
        <div class="pakiman-card" id="${pakiman.name}">
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

async function loadImage (url, xMap, yMap) {
    let img = new Image();
    await new Promise( load =>
        img.onload = load,
        img.src = url
    );
    mapDraw.drawImage(img, xMap, yMap, 50, 40);
}

//Multi Load Pakimans
let loadPokimansNumber = 5;

function loadRandomPakimons () {
    for (let i = 0; i < loadPokimansNumber; i++) {
        let randomNumberPakiman = parseInt( Math.random() * 3 );
        let randomNumber = parseInt( Math.random() * 300 );
        loadImage(pakimanes[randomNumberPakiman].img, randomNumber, randomNumber)
    }
}

// Select Pakiman
let cauthinCard = document.querySelector("#Cauthin");
let pokachoCard = document.querySelector("#Pokacho");
let tocinauroCard = document.querySelector("#Tocinauro");

let buttonSelected = document.querySelector(".button-select");
let mainSection = document.querySelector(".main");
let mapSection = document.querySelector(".map");

const selectPakiman = () => {
    if (cauthinCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[0].img, 0, 0);
        loadRandomPakimons();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
    }
    else if (pokachoCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[1].img, 0, 0);
        loadRandomPakimons();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
    }
    else if (tocinauroCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[2].img, 0, 0);
        loadRandomPakimons();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
    }
    else {
        alert("¡Selecciona un Pakiman!");
    }
}

buttonSelected.addEventListener("click", selectPakiman);