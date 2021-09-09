const express = require('express')
const app = express()
const blogRouter = require('./routes/blog')
const authorRouter = require('./routes/author')
const category01Router = require('./routes/gadget')
 const category02Router = require('./routes/video')
const category03Router = require('./routes/reviews')
const contactRouter = require('./routes/contact')
const singleRouter = require('./routes/single')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.set('view engine', 'ejs')
app.use('/views',express.static(__dirname+'/views'))
app.use('/',express.static(__dirname+'/Public'))


// app.use('/author',authorRouter)
app.use('/gadget',category01Router)
 app.use('/video',category02Router)
 app.use('/reviews',category03Router)
/app.use('/contact',contactRouter)
app.use('/single',singleRouter)

app.get('/' , (req , res)=>{
   
   res.render('index')

})


app.listen(port, () => console.log(`Example app listening on port 3000!`))