const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
const port = 8800

app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "bookshop",
  password: "h1ga4feP",
})

app.get("/", (req, res) => {
  res.json("Hello World from the Server")
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  pool.query(q, (err, result) => {
    if (err) return res.json(err.message)
    return res.json(result)
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover_img`,`price`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover_img,
    req.body.price,
  ]
  pool.query(q, [values], (err, result) => {
    if (err) return res.json(err)
    return res.json("POST success from book server")
  })
})

// Run Server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
