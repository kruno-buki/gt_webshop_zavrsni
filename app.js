const express = require('express')
const app = express()
var path = require('path')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.use(express.urlencoded({
    extended: 'true'
}))
app.use(express.json())

const port = 5000

//! postavljanje routes
const routerHome=require('./routes/home')
const routerLaptopi=require('./routes/laptopi')
const routerMobiteli=require('./routes/mobiteli')
const routerMonitori=require('./routes/monitori')
const routerKonzole=require('./routes/konzole')
const routerAkcije=require('./routes/akcije')

const routerKosarica = require('./routes/kosarica')
const routerNaplata = require('./routes/naplata')

const routerBusiness=require('./routes/business')
const routerGaming=require('./routes/gaming')

const routerKontakt=require('./routes/kontakt')
const routerNama=require('./routes/onama')
const routerPosao=require('./routes/posao')


//! korištenje ruta
app.use('/',routerHome)
app.use('/laptopi',routerLaptopi)
app.use('/mobiteli',routerMobiteli)
app.use('/monitori',routerMonitori)
app.use('/konzole',routerKonzole)
app.use('/akcije',routerAkcije)
app.use('/business',routerBusiness)
app.use('/gaming',routerGaming)
app.use('/kontakt',routerKontakt)
app.use('/onama',routerNama)
app.use('/posao',routerPosao)


app.use(routerKosarica)
app.use(routerNaplata)


// Handle 404
app.use(function (req, res) {
    res.status(404);
    res.sendFile(path.resolve(__dirname,'./public/Stranice_dodaci/Ostalo/404.html'))
});

app.listen(port,()=>{
    console.log('Veza uspostavljena na portu: ',port);
})