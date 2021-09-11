const { query } = require('express')
const express = require('express')
const reviews =express.Router()
const getblog= require('../Modules/blog')
const getreviews= require('../Modules/reviews')

reviews.get('/',async(req,res)=>{
 var data = await getblog(15)
  var reviews = await getreviews(3)
res.render('tech-category-03',{data:data,reviews:reviews})


})

module.exports = reviews
