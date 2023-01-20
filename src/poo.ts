//Especificar los tipos

let message: string;
message = "pato";

let number: number;
number = 1.45;

let is: boolean = true;

//Funciones

function suma(a:number,b:number):number{
    return a+b;
}

const res : number = suma(2,223);
console.log(res);

// CREACION DE OBJETOS EN TYPESCRIPT

//Necesitamos una clase antes de crear un objeto
class Sale{
    
    //Signo de interrogacion para dejarlo vacio sin que de error
    // amount?:number;

    private amount : number;

    constructor(amount:number){
        this.amount = amount;
    }
    
    getTotal():number{ 
        return this.amount
    }
}
//Luego de tener la clase ya podemos crear nuestro objeto


class SaleWhitTax extends Sale{
    private tax:number;

    constructor(tax:number, amount:number){ 
        super(amount);
        this.tax= tax;
    }


    //override es para asegurarse de sobre escribir que exista el metodo
    override getTotal(): number {
        return this.tax + super.getTotal(); //invoca al del padre getTotal()
    }
}




let sale = new Sale(19);
// sale.amount = 29; //Puedo seguir modificando si esta en public, en private no
const result = sale.getTotal();
console.log(result);

let saleWhitTax = new SaleWhitTax(10,110)
const res2 = saleWhitTax.getTotal();
console.log(res2)


//TIPOS 

//SIRVE PARA DEFINIR ESTRUCTURAS, COMO SON LOS NUMBER, STRING, PERO ESTE ES EL NUESTRO WE
type Beer = {
    name:string,
    alcohol: number
}

//ACA DECIMOS QUE EL PARAMETRO beer es de tipo Beer como creamos arriba, el nuestro we, que tiene
// un nombre tipo string y alcohol tipo number dentro, es lo que se espera
function show(beer:Beer):void{
    console.log(`info: ${beer.name} ${beer.alcohol}`)
}