import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"
import "./style.css"

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='add' element={<Add />} />
          <Route path='update/*' element={<Update />} />
          {/* <Route path='*' element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
