const mysql=require ('mysql2')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gt_web_shop'
})

db.connect((err)=>{
    if(err) throw err;
    console.log('SPOJEN SA BAZOM');
})

module.exports=db