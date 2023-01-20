"use strict";
let message;
message = "pato";
let number;
number = 1.45;
let is = true;
function suma(a, b) {
    return a + b;
}
const res = suma(2, 223);
console.log(res);
class Sale {
    constructor(amount) {
        this.amount = amount;
    }
    getTotal() {
        return this.amount;
    }
}
class SaleWhitTax extends Sale {
    constructor(tax, amount) {
        super(amount);
        this.tax = tax;
    }
    getTotal() {
        return this.tax + super.getTotal();
    }
}
let sale = new Sale(19);
const result = sale.getTotal();
console.log(result);
let saleWhitTax = new SaleWhitTax(10, 110);
const res2 = saleWhitTax.getTotal();
console.log(res2);
function show(beer) {
    console.log(`info: ${beer.name} ${beer.alcohol}`);
}
