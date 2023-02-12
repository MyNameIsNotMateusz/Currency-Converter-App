function init() {
    var mamElement = document.querySelector(".js-mam");
    var formElement = document.querySelector(".js-form");
    var chceElement = document.querySelector(".js-chce");
    var kursElement = document.querySelector(".js-kurs");
    var kurs2Element = document.querySelector(".js-kurs2");

    const CountingClick = (event) => {
        event.preventDefault();

        let mam = mamElement.value;
        let chce = chceElement.value;

        let wynik1 = mam * 0.21;
        let wynik2 = chce * 4.71;

        kursElement.innerText = wynik1;
        kurs2Element.innerText = wynik2;
    }

    formElement.addEventListener("submit", CountingClick);
}

init();