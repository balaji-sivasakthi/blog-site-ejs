const db = require ('../config').firestore()


function tag(n){
    return new Promise((resolve,reject)=>{
        db.collection('tag').get()
        .then(result=>{
            
        })
    })
}

module.exports = tag