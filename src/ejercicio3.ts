// 3. Obtener el número mayor
// 1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de
// argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para
// recibir los argumentos en un arreglo.
// 2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.
// 3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como
// argumentos y verifique los resultados en la consola utilizando una sentencia
// “console.log”.


function obtenerMayor2(...numeros2:number[]):number{
    // Uso solamente el Math.max para obtener el valor y paso como parametro ...numeros2
    let mayor2 = Math.max(...numeros2)
    return mayor2
}
console.log(obtenerMayor2(1,2,3,4,5,6,7,8,9))





function obtenerMayor(...numeros:number[]):number[]{
    let mayor = numeros[0]
    let menor = numeros[0]
    
    for (let i=0; i< numeros.length ; i++){
        
    //    Comparar los elementos y si se cumple la condicion
    //    remplazamos el valor
        if(menor > numeros[i]){
            menor = numeros[i]
        }
        if(mayor < numeros[i]){
            mayor = numeros[i]
        }
    }
    return [menor,mayor]
}
console.log(obtenerMayor(1,2,9,8,7,9,6,5,4,7))
