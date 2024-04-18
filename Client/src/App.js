import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='add' element={<Add />} />
          <Route path='update' element={<Update />} />
          {/* <Route path='*' element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
