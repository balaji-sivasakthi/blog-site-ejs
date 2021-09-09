const express = require('express')
const app = express()
const blogRouter = require('./routes/blog')
const contactRouter = require('./routes/contact')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.set('view engine', 'ejs')
app.use('/views',express.static(__dirname+'/views'))
app.use('/',express.static(__dirname+'/Public'))



app.use('/blog',blogRouter)
app.use('/contact',contactRouter)

app.get('/' , (req , res)=>{
   
   res.render('index')

})


app.listen(port, () => console.log(`Example app listening on port 3000!`))