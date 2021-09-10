const express = require('express')
const Gadget=express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


Gadget.get('/',(req,res)=>{

res.render('tech-category-01')


})

module.exports = Gadget
