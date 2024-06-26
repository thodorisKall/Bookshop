import React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import "../update.css"
import Return from "./Return"

const Update = () => {
  const [newBook, setNewBook] = useState({
    title: "default",
    desc: "default",
    cover_img: "default",
    price: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }))
  }

  const location = useLocation()
  const navigate = useNavigate()

  const bookId = location.pathname.split("/")[2]

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, newBook)
      console.log("Book Updated!")
      navigate("/", { replace: true })
    } catch (err) {
      if (err) console.log(`Error on Update data from Form ${err.message}`)
    }
  }

  return (
    <div className='update'>
      <h2>Update Book</h2>
      <form className='update_form'>
        <input
          type='text'
          placeholder='title of the Book'
          onChange={handleChange}
          name='title'
        />
        <textarea
          type='text'
          placeholder='A description about the Book'
          onChange={handleChange}
          name='desc'
        />
        <input
          type='text'
          placeholder='enter a valid IMAGE url for the cover of your book'
          onChange={handleChange}
          name='cover_img'
        />
        <input
          type='number'
          placeholder='enter the price of the Book'
          onChange={handleChange}
          name='price'
        />
      </form>
      <button id='update_btn' onClick={handleUpdate}>
        Update
      </button>
      <Return />
    </div>
  )
}

export default Update
