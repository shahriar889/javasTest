const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8000

const {Pool} = require('pg');
var pool = new Pool({
  connectionString: process.env.DATABASE_URL
  //'postgres://postgres:mohaha@localhost/users'
  //process.env.DATABASSE_URL
})

var app = express()
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  app.get("/database",(req,res)=>{
    var getUsersQuery = `SELECT * FROM userlist`
    pool.query(getUsersQuery,(error, result)=>{
      if(error){
        console.log("Error executing the query:",error)
        res.status(500).send("An error occurred while fetching data from the database.", error);
        return;
      }
       var results = {'rows': result.rows}
       res.render('pages/db', results)
    })
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