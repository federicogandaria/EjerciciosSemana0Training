"use strict";
function crearPalindromo(cadena) {
    let niahc;
    for (let i = cadena.length - 1; i >= 0; i--) {
        niahc = niahc + cadena[i];
    }
    return cadena.toLocaleLowerCase().replace(/\s/g, "") + (niahc === null || niahc === void 0 ? void 0 : niahc.toLocaleLowerCase().replace(/\s/g, ""));
}
console.log(esPalindormo("ana"));
