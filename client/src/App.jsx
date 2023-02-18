import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Fox, Cnn } from './pages'
import NewsCard from './components/NewsCard'

import './styles/App.css'
import Navbar from './components/Navbar'
export const DataContext = React.createContext();


function App() {
  const [data, setData] = useState([])
  
  
useEffect(() => {
  axios.post(`http://localhost:8000/fox/us`)
  .then(response => {
    setData(response.data)
  })
  
}, [])



  return (

  <BrowserRouter>
    <DataContext.Provider value={{data, setData}}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/fox" element={<Fox/>}></Route>
          <Route path="/cnn" element={<Cnn/>}></Route>
          <Route path="/test" element={<NewsCard/>}></Route>
        </Routes>
    </DataContext.Provider> 
  </BrowserRouter>
  )
}

export default App
