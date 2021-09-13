const express = require('express')
const Gadget=express.Router()
const gettag = require('../Modules/tag')

// app.set('view engine', 'ejs')
// app.use('/views',express.static(__dirname+'/views'))
// app.use('/',express.static(__dirname+'/Public'))


Gadget.get('/',async (req,res)=>{
    var tag = await gettag()
res.render('tech-category-01',{tagKey:Object.keys(tag),tagValue:Object.values(tag)})


})

module.exports = Gadget
