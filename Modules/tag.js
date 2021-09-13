const db = require ('../config').firestore()


function tag(){
    return new Promise((resolve,reject)=>{
        db.collection('tag').doc('tag').get()
        .then(async result=>{
            var i=0

            var tag=result.data()['tag']
            var d={}
            while(i<tag.length){
                var value = await db.collection('blog').where('tag','==',tag[i]).get()
                var ar=[]
                var m=0
                limit =5
                value.forEach(e=>{
                    if(m<5){
                        var d =e.data()
                        ar.push(d)
                    }
                  m++
                })
                d[tag[i]]=ar
                i++
            }
            resolve(d)
        })
    })
}

module.exports = tag