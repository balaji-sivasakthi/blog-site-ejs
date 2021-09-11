const db = require('../config').firestore()

//get Comment docs
function getComment(docId){
    return new Promise((resolve,reject)=>{

        db.collection('comment').doc(docId).get()
        .then(result=>{
            const data = result.data();
            resolve(data)
        })
        .catch(err=>{reject(err)})
       
    })
    
}

module.exports =getComment;