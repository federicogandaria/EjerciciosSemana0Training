 function promedio(...argumentos:number[]):number{
    //Promedio = Suma de todos los numeros / cantidad de numeros
    let suma = 0
    for(let i=0; i<argumentos.length;i++){
        suma = suma + argumentos[i]
    }
    return suma/argumentos.length

}
function compararPromedio(promedio:number,otroNumero:number){
    
    //Operador ternario
   return (promedio > otroNumero) ? "Es mas grande" : "Es mas chico"

}


function promedioMayorMenor(numeroComparar:number, ...argumentos:number[]){
   let prom = promedio(...argumentos)
   let comparo = compararPromedio(numeroComparar,prom)
   return comparo

}

console.log(promedioMayorMenor(2,10,20,30))
console.log(promedioMayorMenor(1,2,3,4,5,6,9))
console.log(promedioMayorMenor(10,10,20,30))
console.log(promedioMayorMenor(40,10,20,30))




