"use strict";
class Figura {
    constructor(nom) {
        this.nombre = nom;
    }
}
class Circulo extends Figura {
    calcularArea() {
        let areaCirculo;
        areaCirculo = Math.PI * Math.pow(this.radio, 2);
    }
    calcularPerimetro() {
        let perimetro;
        perimetro = 2 * Math.PI * this.radio;
    }
    constructor(rad, nombre) {
        super(nombre);
        this.radio = rad;
    }
}
class Cuadrado extends Figura {
    calcularArea() {
        let areaCuadrado;
        areaCuadrado = this.lado * this.lado;
    }
    calcularPerimetro() {
        let perimetro;
        perimetro = 4 * this.lado;
    }
    constructor(nombre, lado) {
        super(nombre);
        this.lado = lado;
    }
}
class CrearFiguras {
    crear(nombre, tipo, valor) {
        if (tipo == "Circulo") {
            return new Circulo(valor, nombre);
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
