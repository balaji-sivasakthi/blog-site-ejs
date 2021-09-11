const { query } = require('express')

const db = require('../config').firestore()

//user
function blog(n){
    return new Promise((resolve,reject)=>{
        db.collection('blog').orderBy('date','desc').get()
        .then(result=>{
            var blog =[]
            var count =0
            result.forEach(e=>{
                if(count<n){
                    var data = e.data()
                    data['id'] = e.id
                    blog.push(data)
                    count++
                }else{
                    return
                }
               
            })
           resolve(blog)
        })
    })
}

module.exports = blog
