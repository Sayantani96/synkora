import { useState } from 'react'
import './App.css'

import UserFeed from './Pages/UserFeed'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './Pages/Authentication'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path='/user-feed' element={<UserFeed/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
