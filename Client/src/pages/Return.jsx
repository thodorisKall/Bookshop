import React from "react"
import { Link } from "react-router-dom"
import { IoCaretBackCircle } from "react-icons/io5"
import "../return.css"

const Return = () => {
  return (
    <div className='return'>
      <h3>Back to Main page</h3>
      <button>
        <Link to='/'>
          <IoCaretBackCircle />
        </Link>
      </button>
    </div>
  )
}

export default Return
