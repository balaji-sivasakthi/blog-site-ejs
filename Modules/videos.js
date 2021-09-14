const db = require('../config').firestore()

//user
function video(n){
    return new Promise((resolve,reject)=>{
        db.collection('videos').orderBy('date','desc').get()
        .then(result=>{
            var video =[]
            var count =0
            result.forEach(e=>{
                if(count<n){
                    var data = e.data()
                    data['id'] = e.id
                    video.push(data)
                    count++
                }else{
                    return
                }
               
            })
           resolve(video)
        })
    })
}

module.exports = blog
