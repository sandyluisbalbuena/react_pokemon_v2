import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Template from './layout/Template'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
