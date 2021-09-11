const db = require('../config').firestore()

//user
function reviews(n){
    return new Promise((resolve,reject)=>{
        db.collection('blog').where('tag','==','reviews').get()
        .then(result=>{
            var reviews =[]
            var count =0
            result.forEach(e=>{
                if(count<n){
                    var data = e.data()
                    data['id'] = e.id
                    reviews.push(data)
                    count++
                }else{
                    return
                }
               
            })
           resolve(reviews)
        })
    })
}

module.exports = reviews
