const db = require('../config').firestore()

//user
function blog(){
    return new Promise((resolve,reject)=>{
        db.collection('blog').get()
        .then(result=>{
            var blog =[]
            var count =0
            result.forEach(e=>{
                if(count<15){
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
