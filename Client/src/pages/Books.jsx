import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`)
      window.location.reload()
    } catch (err) {
      if (err) console.log(`Error deleting Book: ${err.message}`)
    }
  }

  return (
    <div>
      <h1>BookShop where you can Explore the best Sellers</h1>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>
            <div>
              {book.cover_img && <img src={book.cover_img} alt={book.title} />}
            </div>
            <h3>{book.price}</h3>
            <button>
              <Link to='/update'>Update</Link>
            </button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <h5>--------------</h5>
          </div>
        )
      })}
      <button>
        <Link to='/add'>Add New Book</Link>
      </button>
    </div>
  )
}

export default Books
