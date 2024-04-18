const express = require("express")
const mysql = require("mysql2")

const app = express()
const port = 8800

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
  const values = ["BookServer", "DescServer", "imageserver.png", "45"]
  pool.query(q, [values], (err, result) => {
    if (err) return res.json(err)
    return console.log("POST success from book server")
  })
})

// Run Server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
