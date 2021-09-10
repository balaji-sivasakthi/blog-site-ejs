const express = require('express')
const app = express()
const blogRouter = require('./routes/blog')
const authorRouter = require('./routes/author')
const GadgetRouter = require('./routes/gadget')
 const VideoRouter = require('./routes/video')
const ReviewsRouter = require('./routes/reviews')
const contactRouter = require('./routes/contact')
const singleRouter = require('./routes/single')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.set('view engine', 'ejs')
app.use('/views',express.static(__dirname+'/views'))
app.use('/',express.static(__dirname+'/Public'))


app.use('/author',authorRouter)
app.use('/gadget',GadgetRouter)
app.use('/video',VideoRouter)
 app.use('/reviews',ReviewsRouter)
/app.use('/contact',contactRouter)
app.use('/single',singleRouter)

app.get('/' , (req , res)=>{
   
   res.render('index')

})


app.listen(port, () => console.log(`Example app listening on port 3000!`))