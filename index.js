const { error } = require('console');
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8000

const {Pool} = require('pg');
var pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
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
  app.get("/database",async (req,res)=>{

    if(error){
      res.send(error.name);
    }
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM userlist');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    
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