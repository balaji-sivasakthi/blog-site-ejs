const express = require('express')
const Video =express.Router()


// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


Video.get('/',(req,res)=>{

res.render('tech-category-02')


})

module.exports = Video
