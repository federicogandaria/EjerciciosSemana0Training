function imprimirArbol(numero: number) {
    for (let i = 0; i < numero; i++) {
      let espacios = "";
      let estrellas = "";
  
      //generar espacios en blanco
      for (let j = 0; j < numero - i - 1; j++) {
        espacios = espacios + " ";
      }
  
      //generar estrellas
      for (let k = 0; k < (i * 2) + 1; k++) {
        estrellas =estrellas + "*";
      }
  
      //imprimir línea del árbol
      console.log(espacios + estrellas);
    }
  
    //imprimir base del árbol
    let base = "";
    for (let i = 0; i < numero - 2; i++) {
      base = base + " ";
    }
    base = base + "***";
    console.log(base);
  }
  
  imprimirArbol(15);
  