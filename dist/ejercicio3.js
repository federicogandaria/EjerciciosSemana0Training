"use strict";
function obtenerMayor2(...numeros2) {
    let mayor2 = Math.max(...numeros2);
    return mayor2;
}
console.log(obtenerMayor2(1, 2, 3, 4, 5, 6, 7, 8, 9));
function obtenerMayor(...numeros) {
    let menor = numeros[0];
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (menor > numeros[i]) {
            menor = numeros[i];
        }
        if (mayor < numeros[i]) {
            mayor = numeros[i];
        }
    }
    return [menor, mayor];
}
console.log(obtenerMayor(1, 2, 3, 4, 5, 6, 7, 8));
