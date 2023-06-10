import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Template from './layout/Template'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokecard from './pages/Pokecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Home />}/>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokecard' element={<Pokecard />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
