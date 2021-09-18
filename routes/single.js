const express = require('express')
const single =express.Router()
const db = require('../config').firestore()
const fb = require('../config')
const getcomment =require('../Modules/comment')
const commentWithName = require('../Modules/commentWithName')
const getAuthor = require('../Modules/author')
const getBlog = require('../Modules/blog')
const countView = require('../Modules/count')
const gettag = require('../Modules/tag')


//count the views


single.get('/',async (req,res)=>{
    
    var docId=req.query.id;
    countView('blog',docId);
    db.collection('blog').doc(docId).get()
    .then(async result=>{
      //  console.log(result.data());
        const data = result.data();
        const comment = await getcomment(docId)
        const author  = await getAuthor(data.author)
        const blog = await getBlog(8)
        const tag = await gettag()
        console.log(blog)
        // console.log("===Commment Name with user details=====")
        //console.log(await commentWithName(comment))
        
        res.render('tech-single',{data:data,comment:await commentWithName(comment),author:author,blog:blog,tagKey:Object.keys(tag),tagValue:Object.values(tag)})
    })
    
})



single.post('/',(req,res)=>{
    //res.send(req.query.id)
    var email, name,comment
    email = req.body.email
    name = req.body.name
    comment = req.body.comment
    var post = {}

    
    var dateTime = fb.firestore.Timestamp.now()
   
    post={
        comment:comment,
        createAt:dateTime
    }

 
    console.log(post)
   
    db.collection('comment').doc(req.query.id).get()

    .then(async result=>{
      if(!result.exists){
        db.collection('comment').doc(req.query.id).set({})
      } 
      var data = result.data()
        console.log(data)
        data[email]=post
        console.log(data);
        var users= await db.collection('users').get()
        
        db.collection('users').doc(email).set({name:name,email:email})
      db.collection('comment').doc(req.query.id).set(data)
      res.redirect('/single?id='+req.query.id)
    })
  


})




module.exports = single
