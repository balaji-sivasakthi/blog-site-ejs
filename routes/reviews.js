const express = require('express')
const Reviews =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


Reviews.get('/',(req,res)=>{

res.render('tech-category-03')


})

module.exports = Reviews
