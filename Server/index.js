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

// Run Server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
