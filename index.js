import { FUTOK } from "./adatok.js";
letrehozTablazat()
osszesit()
befutott();
torolEsemeny();

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat() {
    /* let txt = "<table>"
    txt += "<tr>"
    txt += `<th>Név</th><th>Nemzetiség</th><th>Versenyidő</th><th>Versenyszám</th>`
    txt += "</tr>"
    for (let index = 0; index < FUTOK.length; index++) {
        const element = FUTOK[index];
        txt += `<tr><td>${element.nev}</td><td>${element.nemzetiseg}</td><td>${element.versenyIdo}</td><td>${element.versenySzam}</td></tr>`
    }
    txt += "</table>"
    console.log(txt)
    const ELSOFELADAT = document.querySelector("#feladat_1")
    ELSOFELADAT.innerHTML += txt */

    let txt = "<table>" 
    txt += "<tr>"
    txt += `<th>Név</th><th>Nemzetiség</th><th>Versenyidő</th><th>Versenyszám</th>`
    txt += "</tr>"
    for (let index = 0; index < FUTOK.length; index++) {
        const element = FUTOK[index];
        txt += `<tr><td>${element.nev}</td><td>${element.nemzetiseg}</td><td>${element.versenyIdo}</td><td>${element.versenySzam}</td></tr>`
    }
    txt += "</table>"
    console.log(txt)
    const ELSOFELADAT = $("#feladat_1")
    ELSOFELADAT.html(txt)
}

// 2. feladat
function osszesit() {
    /* let maratonossz = 0;
    let felmaratonossz = 0;
    let tizkm = 0;
    for (let index = 0; index < FUTOK.length; index++) {
        const element = FUTOK[index];
        if (element.versenySzam == "maraton") {
            maratonossz++;
        }
        else if (element.versenySzam == "félmaraton") {
            felmaratonossz++;
        }
        else {
            tizkm++;
        }
    }
    const MASODIKFELADAT = document.querySelector("#feladat_2")
    MASODIKFELADAT.innerHTML += `félmaraton: ${felmaratonossz} db<br>`
    MASODIKFELADAT.innerHTML += `maraton: ${maratonossz} db<br>`
    MASODIKFELADAT.innerHTML += `10 km: ${tizkm} db` */

    let maratonossz = 0;
    let felmaratonossz = 0;
    let tizkm = 0;
    for (let index = 0; index < FUTOK.length; index++) {
        const element = FUTOK[index];
        if (element.versenySzam == "maraton") {
            maratonossz++;
        }
        else if (element.versenySzam == "félmaraton") {
            felmaratonossz++;
        }
        else {
            tizkm++;
        }
    }
    const MASODIKFELADAT = $("#feladat_2")
    MASODIKFELADAT.html(`félmaraton: ${felmaratonossz} db<br>`)
    MASODIKFELADAT.append(`maraton: ${maratonossz} db<br>`)
    MASODIKFELADAT.append(`10 km: ${tizkm} db`)
}

// 3. feladat
function befutott(sor, adatok) {
    const HARMADIKFELADAT = document.querySelectorAll("#feladat_1 tr")
    sor = document.querySelectorAll("#feladat_1 tr")
    const FELTOLTES = document.querySelector("#feladat_3")
    //const element = FUTOK[index];
    for (let index = 0; index < sor.length; index++) {
        //sor=HARMADIKFELADAT[index];
        HARMADIKFELADAT[index].addEventListener("click", function(){
            HARMADIKFELADAT[index].classList.add("befutott");
            FELTOLTES.innerHTML += `${FUTOK[index-1].nev}, ${FUTOK[index-1].nemzetiseg}, ${FUTOK[index-1].versenyIdo}<br>`
        })
    }
}

// 4. feladat
function torolEsemeny() {
    /* const GOMB = document.querySelector("button")
    const FELTOLTES = document.querySelector("#feladat_3")
    const NEGYEDIKFELADAT = document.querySelectorAll("#feladat_1 tr")
    for (let index = 0; index < NEGYEDIKFELADAT.length; index++) {
        GOMB.addEventListener("click", function(){
            FELTOLTES.innerHTML = "";
            NEGYEDIKFELADAT[index].classList.remove("befutott");
        })
    } */
    const GOMB = $("button")
    const FELTOLTES = $("#feladat_3")
    const NEGYEDIKFELADAT = $("#feladat_1 tr")
    for (let index = 0; index < NEGYEDIKFELADAT.length; index++) {
        GOMB.on("click", function(){
            FELTOLTES.html("");
            NEGYEDIKFELADAT[index].classList.remove("befutott");
        })
    }
}

// 5. feladat
function ellenoriz() {

}