const db = require('../database')


module.exports = {
    selectKarakteristike: function (callback, id) {

        const sql = 'SELECT artikl.*,akcija.postotak FROM artikl LEFT JOIN akcija ON artikl.akcija_akcija_ID=akcija.akcija_ID WHERE artikl_ID=?'

        db.query(sql, id, function (err, data) {
            if (err)
                throw err;

            let cijena = Number(data[0].cijena)
            if (data[0].akcija_akcija_ID !== null) {
                cijena = cijena - (cijena * (data[0].postotak / 100))
                data[0].akcijskaCijena = cijena
            }
            console.log('Cijena: ', data[0].cijena);

            return callback(data[0]) //ok ovako..



        })

    },
    selectKarakteristikeAll: function (callback, kategorija) {

        // const sql = 'SELECT * FROM artikl WHERE kategorija_kategorija_ID=?'
        const sql = 'SELECT artikl.*,akcija.postotak FROM artikl LEFT JOIN akcija ON artikl.akcija_akcija_ID=akcija.akcija_ID WHERE kategorija_kategorija_ID=?';
        // const sql2 = 'SELECT postotak FROM akcija WHERE akcija_ID=?'
        db.query(sql, kategorija, function (err, data) {
            if (err)
                throw err;


            data.forEach(d => {
                let cijena = Number(d.cijena)
                if (d.akcija_akcija_ID !== null) {
                    cijena = cijena - (cijena * (d.postotak / 100))
                    d.akcijskaCijena = cijena
                    
                }

            })

            // console.log('Proizvodi: ', data);
            console.log('Prikaz svih proizvoda! ');
            return callback(data) //ok ovako..
        })

    },
    selectKarakteristikeAkcija: function (callback) {

        const sql = 'SELECT artikl.*,akcija.postotak FROM artikl LEFT JOIN akcija ON artikl.akcija_akcija_ID=akcija.akcija_ID';

        db.query(sql, function (err, data) {
            if (err)
                throw err;


           data.forEach(d => {
                // console.log(d.cijena);
               
                let cijena = Number(d.cijena)
                
                if (d.akcija_akcija_ID !== null) {
                    cijena = cijena - (cijena * (d.postotak / 100))
                    d.akcijskaCijena = cijena
                }
                
            })
            
            return callback(data) //ok ovako..
        })

    },

}