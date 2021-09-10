const db = require('../config').firestore()

//user
function author(Id){
    return new Promise((resolve,reject)=>{
        db.collection('author').doc(Id).get()
        .then(result=>{
            const data = result.data()
            resolve(data)
        })
    })
}

module.exports = author
