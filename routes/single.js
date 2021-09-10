const express = require('express')
const single =express.Router()
const db = require('../config').firestore()

const getcomment =require('../Utils/comment')
const commentWithName = require('../Utils/commentWithName')
const getAuthor = require('../Utils/author')
const getBlog = require('../Utils/blog')




//count the views
function countView(docId){
    db.collection('blog').doc(docId).get()
    .then(result=>{
        const data = result.data();
        data.views++
        db.collection('blog').doc(docId).set(data)
    })
}

single.get('/',(req,res)=>{

    var docId=req.query.id;
    countView(docId);
    db.collection('blog').doc(docId).get()
    .then(async result=>{
      //  console.log(result.data());
        const data = result.data();
        const comment = await getcomment(docId)
        const author  = await getAuthor(data.author)
        const blog = await getBlog()
        console.log(blog)
        // console.log("===Commment Name with user details=====")
        //console.log(await commentWithName(comment))
        
        res.render('tech-single',{data:data,comment:await commentWithName(comment),author:author,blog:blog})
    })
    
})



single.post('/',(req,res)=>{
    //res.send(req.query.id)
    var email, name,comment
    email = req.body.email
    name = req.body.name
    comment = req.body.comment
    var post = {}

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    post={
        comment:comment,
        createAt:dateTime
    }
    console.log(post)
    db.collection('comment').doc(req.query.id).get()
    .then(async result=>{
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
