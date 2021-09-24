const express = require('express')
const app = express()
const blogRouter = require('./routes/blog')
const authorRouter = require('./routes/author')
const GadgetRouter = require('./routes/gadget')
//  const VideoRouter = require('./routes/video')
const ReviewsRouter = require('./routes/reviews')
const contactRouter = require('./routes/contact')
const singleRouter = require('./routes/single')
const getblog = require('./Modules/blog')
const getreviews = require('./Modules/reviews')
const gettag = require('./Modules/tag')
const db = require('./config').firestore()
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.set('view engine', 'ejs')
app.use('/views',express.static(__dirname+'/views'))
app.use('/',express.static(__dirname+'/Public'))


app.use('/author',authorRouter)
//app.use('/gadget',GadgetRouter)
// app.use('/video',VideoRouter)
 app.use('/reviews',ReviewsRouter)
app.use('/contact',contactRouter)
app.use('/single',singleRouter)

app.get('/' ,async (req , res)=>{
   
    var data = await getblog(15)
   
   var reviews = await getreviews(3)
   var tag = await gettag()
  
   if(data.length>3){
      //tag
      //['sciene','tech']
      //[[{},{}],[{}{}]]

      res.render('index',{data:data,reviews:reviews,tagKey:Object.keys(tag),tagValue:Object.values(tag)})
   }else{
      res.send("<h1>Something Went Wrong</h1>")
   }
   
  
   

})
app.post('/sub',(req,res)=>{
   var email = req.body.email
   db.collection('subscribers').doc(email).set({email:email})
  console.log(req.body)
  res.redirect('/')
})

app.listen(process.env.PORT||5000,()=>{console.log("Running...."+process.env.PORT||5000)})




