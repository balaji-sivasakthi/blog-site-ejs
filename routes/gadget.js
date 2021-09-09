const express = require('express')
const category01 =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


category01.get('/',(req,res)=>{

res.render('tech-category-01')


})

module.exports = category01
