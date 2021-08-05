const db = require('../database')
let stavka = 1;

const products = [{
    total: 0
}];

class Product {

    constructor(id) {
        this.id = id;
    }
    save() {

        const sql = 'SELECT artikl.*,akcija.postotak FROM artikl LEFT JOIN akcija ON artikl.akcija_akcija_ID=akcija.akcija_ID WHERE artikl_ID=?'

        db.query(sql, this.id, function (err, data) {
            if (err)
                throw err;

            let cijena = Number(data[0].cijena)
            if (data[0].akcija_akcija_ID !== null) {
                cijena = cijena - (cijena * (data[0].postotak / 100))
                data[0].cijena = cijena.toFixed(2)
            }
            console.log('Cijena: ', data[0].cijena);

            if (products.findIndex(p => p.artikl_ID == data[0].artikl_ID) > -1) {

                console.log('DUPLICI!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                const index = products.findIndex(p => p.artikl_ID == data[0].artikl_ID);
                console.log('Indeks proizvoda:  ', index);

                if (!(products[index].kolicina >= products[index].stanje)) {
                    products[index].kolicina += 1;

                    products[0].total +=Number(data[0].cijena)
                } else
                    console.log('Prekoračio!!');
            } else {
                //ako nema proizvoda ubaci u ono što ubacuješ vrijednost 
                data[0].kolicina = 1
                // data[0].stavka = stavka++
                products.push(data[0])
                //gurni u 1 total
                products[0].total += Number(data[0].cijena)
               

            }
            console.log(products);
            console.log('------------------------------------------------');

        })

    }
    static getCart() {
        return products
    }
    static delete(productId) {

        const index = products.findIndex(p => p.artikl_ID == productId);
        if (index >= 0) {
            products[0].total -= Number(products[index].cijena) * products[index].kolicina

            products.splice(index, 1);

        }
        console.log('Nakon Brisanja ostalo je: ', products);


    }

    static dodajKolicina(productId) {

        const index = products.findIndex(p => p.artikl_ID == productId);
        if (index >= 0 && products[index].stanje > products[index].kolicina) {

            // uvećaj totalnu cijenu
            products[0].total += Number(products[index].cijena)
            products[index].kolicina += 1;
            console.log('Trenutno: ', products[index].stanje);
        }
        console.log('Nakon dodavanja (model): ', products);
    }

    static oduzmiKolicina(productId) {

        const index = products.findIndex(p => p.artikl_ID == productId);

        if (index >= 0 && products[index].kolicina > 1) {
            console.log(products[index].kolicina);
            products[index].kolicina -= 1
            products[0].total -= Number(products[index].cijena)
            console.log('Nakon oduzimanja: ', products[index].kolicina);
        }
    }

    static isprazni() {
        products[0].total = 0
        products.splice(1)
        console.log(products);
    }
    // static findAll() {
    //     return products;
    // }

    // static findById(prodId) {
    //     return products.filter(p => p.id == prodId);
    // }

}


module.exports = Product
