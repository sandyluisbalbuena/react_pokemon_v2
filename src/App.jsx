import './App.css'
import { Routes, Route } from 'react-router-dom'
import Template from './layout/Template'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokecard from './pages/Pokecard'
import Notfound from './pages/Notfound'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Home />}/>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokecard' element={<Pokecard />}/>
        </Route>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </>
  )
}

export default App
