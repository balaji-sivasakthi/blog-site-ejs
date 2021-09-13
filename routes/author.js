const express = require('express')
const author =express.Router()
const gettag = require('../Modules/tag')


author.get('/',async (req,res)=>{
var tag = await gettag()
res.render('tech-author',{tagKey:Object.keys(tag),tagValue:Object.values(tag)})


})

module.exports = author
