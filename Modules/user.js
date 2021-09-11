const db = require('../config').firestore()

//user
function user(userId){
    return new Promise((resolve,reject)=>{
        db.collection('users').doc(userId).get()
        .then(result=>{
            const data = result.data()
            resolve(data)
        })
    })
}

module.exports = user
