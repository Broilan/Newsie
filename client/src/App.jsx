import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Fox, Cnn, Tg, Abc, Nyt, Times, Vox } from './pages'
import Pagination from './components/Pagination'

import './styles/App.css'
import Navbar from './components/Navbar'
export const DataContext = React.createContext();


function App() {
  const [foxData, setFoxData] = useState([])
  
  
useEffect(() => {
  axios.get(`http://localhost:8000/fox`)
  .then(response => {
    setFoxData(response.data.response)
    console.log('this is in the eu', response.data.response)
  })
  
}, [])



  return (

  <BrowserRouter>
    <DataContext.Provider value={{foxData, setFoxData}}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/fox" element={<Fox/>}></Route>
          <Route path="/cnn" element={<Cnn/>}></Route>
          <Route path="/tg" element={<Tg/>}></Route>
          <Route path="/abc" element={<Abc/>}></Route>
          <Route path="/nyt" element={<Nyt/>}></Route>
          <Route path="/times" element={<Times/>}></Route>
          <Route path="/vox" element={<Vox/>}></Route>
          <Route path="/test" element={<Pagination/>}></Route>
        </Routes>
    </DataContext.Provider> 
  </BrowserRouter>
  )
}

export default App
