const express = require('express')
const single =express.Router()
const db = require('../config').firestore()

const getcomment =require('../Utils/comment')
const commentWithName = require('../Utils/commentWithName')
const getAuthor = require('../Utils/author')

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
        console.log(result.data());
        const data = result.data();
        const comment = await getcomment(docId)
        const author  = await getAuthor(data.author)
        // console.log("===Commment Name with user details=====")
        //console.log(await commentWithName(comment))
        
        res.render('tech-single',{data:data,comment:await commentWithName(comment),author:author})
    })
    







})

module.exports = single
