import { FUTOK } from "./adatok.js";
letrehozTablazat()
osszesit()

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat() {
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
    const ELSOFELADAT = document.querySelector("#feladat_1")
    ELSOFELADAT.innerHTML += txt
}

// 2. feladat
function osszesit() {
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
    const MASODIKFELADAT = document.querySelector("#feladat_2")
    MASODIKFELADAT.innerHTML += `félmaraton: ${felmaratonossz} db<br>`
    MASODIKFELADAT.innerHTML += `maraton: ${maratonossz} db<br>`
    MASODIKFELADAT.innerHTML += `10 km: ${tizkm} db`
}

// 3. feladat
function befutott(sor, adatok) {
    const HARMADIKFELADAT = document.querySelector("#feladat_1")
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz() {

}