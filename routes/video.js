const express = require('express')
const category02 =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


category02.get('/',(req,res)=>{

res.render('tech-category-02')


})

module.exports = category02
