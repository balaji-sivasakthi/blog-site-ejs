const express = require('express')
const contact =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


contact.get('/',(req,res)=>{

res.render('tech-contact')


})

module.exports = contact