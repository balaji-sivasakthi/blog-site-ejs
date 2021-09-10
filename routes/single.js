const express = require('express')
const single =express.Router()
const db = require('../config').firestore()
const getuser =require('../Utils/user')
const getcomment =require('../Utils/comment')


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
        const user = await getuser()
        console.log(comment)
        
        
        res.render('tech-single',{data:data,comment:{}})
    })
    







})

module.exports = single
