const getuser =require('../Modules/user')
async function commentWithName(comment){
    var result = []

    for(var k in comment){
        var user = await getuser(k)
    
        var review = {
            user: user.name,
            id:k,
            date:comment[k].createAt,
            comment:comment[k].comment  
        }
        result.push(review)
    }
    return result
}

module.exports = commentWithName