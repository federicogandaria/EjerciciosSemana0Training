function crearPalindromo2(cadena:string){
    
    let cadena2 = [...cadena.toUpperCase()]
    
    //Recibimos cadena,como no sabemos la cantidad del argumento usamos .lenght-1
    cadena2 = cadena2.slice(0, cadena2.length-1).reverse()

     return ([...cadena.toUpperCase(),...cadena2])

}

console.log(crearPalindromo2("Hola"))
console.log(crearPalindromo2("Chau"))
console.log(crearPalindromo2("Probando"))
console.log(crearPalindromo2("Terminado"))