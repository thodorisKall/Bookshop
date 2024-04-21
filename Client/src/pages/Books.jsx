import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { BsTrash3 } from "react-icons/bs"

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
    <div className='books'>
      <h1>BookShop </h1>
      <section className='books_grid'>
        {books.map((book) => {
          return (
            <div className='books_item' key={book.id}>
              <div className='books_item_content'>
                {book.cover_img && (
                  <img src={book.cover_img} alt={book.title} />
                )}
                <div className='books_item_text'>
                  <h2>{book.title}</h2>
                  <h3>{book.desc}</h3>
                  <h3>{book.price}$</h3>
                </div>
              </div>
              <div className='books_item_buttons'>
                <button id='update_btn'>
                  <Link to={`/update/${book.id}`}>Update</Link>
                </button>
                <button id='trash_btn' onClick={() => handleDelete(book.id)}>
                  <BsTrash3 />
                </button>
              </div>
            </div>
          )
        })}
      </section>

      <button id='addNew_btn'>
        <Link to='/add'>Add New Book</Link>
      </button>
    </div>
  )
}

export default Books
