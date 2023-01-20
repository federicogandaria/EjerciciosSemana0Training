"use strict";
class Figura {
    constructor(nom) {
        this.nombre = nom;
    }
}
class Circulo extends Figura {
    constructor(nombre, rad) {
        super(nombre);
        this.radio = rad;
    }
    calcularArea() {
        let areaCirculo;
        return Math.PI * Math.pow(this.radio, 2);
    }
    calcularPerimetro() {
        let perimetro;
        return 2 * Math.PI * this.radio;
    }
}
class Cuadrado extends Figura {
    constructor(nombre, lado) {
        super(nombre);
        this.lado = lado;
    }
    calcularArea() {
        let areaCuadrado;
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        let perimetro;
        return 4 * this.lado;
    }
}
class CrearFiguras {
    crear(nombre, tipo, valor) {
        if (tipo == "Circulo") {
            return new Circulo(nombre, valor);
        }
        else {
            return new Cuadrado(nombre, valor);
        }
    }
}
const crearFiguras = new CrearFiguras();
const circulo = crearFiguras.crear('Mi círculo', 'Circulo', 10);
let areaCirculo = circulo.calcularArea();
let perimetroCirculo = circulo.calcularPerimetro();
const cuadrado = crearFiguras.crear('Mi cuadrado', 'Cuadrado', 8);
let areaCuadrado = circulo.calcularArea();
let perimetroCuadrado = circulo.calcularPerimetro();
console.log(areaCirculo);
