const express = require('express')
const author =express.Router()



author.get('/',(req,res)=>{

res.render('tech-author')


})

module.exports = author
