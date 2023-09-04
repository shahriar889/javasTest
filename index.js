const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8000

var app = express()
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  app.get("/database",(req,res)=>{
    var data = {results: [2,3,4,5,6]}
    res.render('pages/db', data)
  })

  app.post('/addUser',(req,res)=>{
    console.log("Post req for add user")
    var uname = req.body.uname
    var age = req.body.age
    res.send(`Username ${uname}, age ${age}`)
  })

  app.get("/users/:id",(req,res)=>{
    console.log(req.params.id)
    res.send("Got it")
  })