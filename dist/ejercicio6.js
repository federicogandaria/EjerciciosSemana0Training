"use strict";
function esPalindormo(cadena) {
    let cadeneitor = cadena.split("").reverse().join("").toUpperCase().replace(/\s/g, "");
    return cadena.toUpperCase().replace(/\s/g, "") == cadeneitor ? true : false;
}
console.log(esPalindormo("son robos o sobornos"));
