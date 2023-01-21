"use strict";
function imprimirArbol(n) {
    for (let i = 0; i < n; i++) {
        let espacios = "";
        let estrellas = "";
        for (let j = 0; j < n - i - 1; j++) {
            espacios += " ";
        }
        for (let k = 0; k < (i * 2) + 1; k++) {
            estrellas += "*";
        }
        console.log(espacios + estrellas);
    }
    let base = "";
    for (let i = 0; i < n - 2; i++) {
        base += " ";
    }
    base += "***";
    console.log(base);
}
imprimirArbol(5);
