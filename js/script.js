let mamElement = document.querySelector(".js-mam");
let formElement = document.querySelector(".js-form");
let chceElement = document.querySelector(".js-chce");
let kursElement = document.querySelector(".js-kurs");
let kurs2Element = document.querySelector(".js-kurs2");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let mam = mamElement.value;
    let chce = chceElement.value;
    
    let wynik1 = mam * 0.21;
    let wynik2 = chce * 4.71;

    kursElement.innerText = wynik1;
    kurs2Element.innerText = wynik2;

});