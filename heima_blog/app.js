const express = require('express')
const app = express()
app.set('view engine','ejs')
app.set('views','./views')
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'zss',age:'18'})
})
app.listen(3000,(req,res) => {
    console.log( 'http://127.0.0.1:3000' )
})