import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      } catch (err) {
        console.log(`Error fetching All books ${err.message}`)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div>
      <h1>BookShop where you can Explore the best Sellers</h1>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>
            <h2>{book.cover_img}</h2>
            <h3>{book.price}</h3>
            <h5>--------------</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Books
