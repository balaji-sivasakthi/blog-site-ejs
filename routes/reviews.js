const express = require('express')
const category03 =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


category03.get('/',(req,res)=>{

res.render('tech-category-03')


})

module.exports = category03
