const express = require('express')
const Video =express.Router()
const gettag = require('../Modules/tag')

// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


Video.get('/',async (req,res)=>{
    var tag = await gettag()
res.render('tech-category-02',{tagKey:Object.keys(tag),tagValue:Object.values(tag)})


})

module.exports = Video
