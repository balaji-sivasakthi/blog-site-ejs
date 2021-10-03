const { query } = require('express')
const express = require('express')
const reviews =express.Router()
var getblog= require('../Modules/blog')
const getreviews= require('../Modules/reviews')
const gettag = require('../Modules/tag')

reviews.get('/',async(req,res)=>{
  
 var data = await getblog(100)
  var reviews = await getreviews(3)
  var tag = await gettag()
res.render('tech-category-03',{data:data,reviews:reviews,tagKey:Object.keys(tag),tagValue:Object.values(tag)})


})

module.exports = reviews
