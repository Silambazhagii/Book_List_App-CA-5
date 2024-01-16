import React from 'react'
import Books from './Components/Books'
import Forms from './Components/Forms'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Books/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
   </>
  )
}

export default App