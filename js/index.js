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
let mapImg = "../assets/images/map.png";

async function loadImage (url, xMap, yMap) {
    let img = new Image();
    await new Promise( load =>
        img.onload = load,
        img.src = url
    );
    mapDraw.drawImage(img, xMap, yMap, 50, 40);
}


async function loadMap (url) {
    let img = new Image();
    await new Promise( load =>
        img.onload = load,
        img.src = url
    );
    mapDraw.drawImage(img, 0, 0, 300, 300);
}

loadMap(mapImg, 0, 0);

//Multi Load Pakimans
const loadPakimanes = () => {
    loadImage(pakimanes[0].img, 50, 50);
    loadImage(pakimanes[1].img, 100, 100);
    loadImage(pakimanes[2].img, 150, 150);
}

// Select Pakiman
let cauthinCard = document.querySelector("#Cauthin");
let pokachoCard = document.querySelector("#Pokacho");
let tocinauroCard = document.querySelector("#Tocinauro");
let selectedPakiman;

let buttonSelected = document.querySelector(".button-select");
let mainSection = document.querySelector(".main");
let mapSection = document.querySelector(".map");

const selectPakiman = () => {
    if (cauthinCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[0].img, 0, 0);
        loadPakimanes();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
        selectedPakiman = "Cauthin";
    }
    else if (pokachoCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[1].img, 0, 0);
        loadPakimanes();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
        selectedPakiman = "Pokacho";
    }
    else if (tocinauroCard.className === "pakiman-card pakiman-card-active") {
        loadImage(pakimanes[2].img, 0, 0);
        loadPakimanes();
        mainSection.style.display = "none";
        mapSection.style.display = "block";
        selectedPakiman = "Tocinauro";
    }
    else {
        alert("¡Selecciona un Pakiman!");
    }
}

buttonSelected.addEventListener("click", selectPakiman);

// Move Pakimanes
let actualMoveX = 0;
let actualMoveY = 0;
let moveNumber = 10;

const movePokimanes = async (e) => {
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;
    await loadMap(mapImg, 0, 0);
    loadPakimanes();

    if( selectedPakiman === "Cauthin") {

        switch(e.keyCode){
            case RIGHT:
                actualMoveX = actualMoveX + moveNumber;
                loadImage(pakimanes[0].img, actualMoveX, actualMoveY);

            break;

            case LEFT:
                actualMoveX = actualMoveX - moveNumber;
                loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
            break;

            case UP:
                actualMoveY = actualMoveY - moveNumber;
                loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
            break;

            case DOWN:
                actualMoveY = actualMoveY + moveNumber;
                loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
            break;
        }
    }

    if( selectedPakiman === "Pokacho") {

        switch(e.keyCode){
            case RIGHT:
                actualMoveX = actualMoveX + moveNumber;
                loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
            break;

            case LEFT:
                actualMoveX = actualMoveX - moveNumber;
                loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
            break;

            case UP:
                actualMoveY = actualMoveY - moveNumber;
                loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
            break;

            case DOWN:
                actualMoveY = actualMoveY + moveNumber;
                loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
            break;
        }
    }

    if( selectedPakiman === "Tocinauro") {
        switch(e.keyCode){
            case RIGHT:
                actualMoveX = actualMoveX + moveNumber;
                loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
            break;

            case LEFT:
                actualMoveX = actualMoveX - moveNumber;
                loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
            break;

            case UP:
                actualMoveY = actualMoveY - moveNumber;
                loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
            break;

            case DOWN:
                actualMoveY = actualMoveY + moveNumber;
                loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
            break;
        }
    }
}
document.addEventListener("keydown", movePokimanes);

//Move Pakimanes Buttons
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");

const movePokimanesBtnUp = async () => {
    await loadMap(mapImg, 0, 0);
    loadPakimanes();

    if( selectedPakiman === "Cauthin") {
        actualMoveY = actualMoveY - moveNumber;
        loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Pokacho") {
        actualMoveY = actualMoveY - moveNumber;
        loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Tocinauro") {
        actualMoveY = actualMoveY - moveNumber;
        loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
    }
}

const movePokimanesBtnDown = async () => {
    await loadMap(mapImg, 0, 0);
    loadPakimanes();

    if( selectedPakiman === "Cauthin") {
        actualMoveY = actualMoveY + moveNumber;
        loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Pokacho") {
        actualMoveY = actualMoveY + moveNumber;
        loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Tocinauro") {
        actualMoveY = actualMoveY + moveNumber;
        loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
    }
}

const movePokimanesBtnLeft = async () => {
    await loadMap(mapImg, 0, 0);
    loadPakimanes();

    if( selectedPakiman === "Cauthin") {
        actualMoveX = actualMoveX - moveNumber;
        loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Pokacho") {
        actualMoveX = actualMoveX - moveNumber;
        loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Tocinauro") {
        actualMoveX = actualMoveX - moveNumber;
        loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
    }
}

const movePokimanesBtnRight = async () => {
    await loadMap(mapImg, 0, 0);
    loadPakimanes();

    if( selectedPakiman === "Cauthin") {
        actualMoveX = actualMoveX + moveNumber;
        loadImage(pakimanes[0].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Pokacho") {
        actualMoveX = actualMoveX + moveNumber;
        loadImage(pakimanes[1].img, actualMoveX, actualMoveY);
    }

    if( selectedPakiman === "Tocinauro") {
        actualMoveX = actualMoveX + moveNumber;
        loadImage(pakimanes[2].img, actualMoveX, actualMoveY);
    }
}

upButton.addEventListener("click", movePokimanesBtnUp);
downButton.addEventListener("click", movePokimanesBtnDown);
leftButton.addEventListener("click", movePokimanesBtnLeft);
rightButton.addEventListener("click", movePokimanesBtnRight);
