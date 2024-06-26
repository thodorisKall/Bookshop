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

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"
  pool.query(q, [bookId], (err, results) => {
    if (err) return console.log(`Error on Deleting req ${err.message}`)
    console.log("Book deleted")
  })
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id
  const q =
    "UPDATE books SET title=?, `desc`=?, cover_img=?, price=? WHERE id =?"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover_img,
    req.body.price,
  ]

  pool.query(q, [...values, bookId], (err, results) => {
    if (err) return console.log(`Error on Update the Book ${err.message}`)
    return console.log(`Book Updated successfully ${results}`)
  })
})

// Run Server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
