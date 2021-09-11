const db = require('../config').firestore()

function countView(col,docId){
    db.collection(col).doc(docId).get()
    .then(result=>{
        const data = result.data();
        data.views++
        db.collection(col).doc(docId).set(data)
    })
}
module.exports=countView