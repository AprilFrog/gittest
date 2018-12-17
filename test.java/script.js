"use strict";
let nameRole = prompt("Qui es-tu ?", '');

if (nameRole == "Admin") {
    let adminPassword = prompt("mot de passe : ", "");
    if (adminPassword == adminPassword) {
        alert("Bienvenue, Maître !")
    } else if (adminPassword = "") {
        alert("annulé")
    } else {
        alert("autre ? oublié?")
    }

} else if (nameRole == null) {
    alert("annulé")
} else if (nameRole =="") {
    alert("annulé")

} else if(nameRole!=="Admin"){
    alert("Je ne te connais pas")
}
