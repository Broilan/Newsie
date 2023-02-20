import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Fox, Cnn, Tg, Nyt, Times, Vox } from './pages'

import './styles/App.css'
import Navbar from './components/Navbar'
export const DataContext = React.createContext();


function App() {
  const [foxData, setFoxData] = useState([])
  const [cnnData, setCnnData] = useState([])
  const [nytData, setNytData] = useState([])
  const [tgData, setTgData] = useState([])
  const [timesData, setTimesData] = useState([])
  const [voxData, setVoxData] = useState([])
  const [allArticles, setAllArticles] = useState([])
  

useEffect(() => {

  axios.get(`https://newsie.herokuapp.com/cnn`)
  .then(response => {
    setCnnData(response.data.response.reverse())
  })
  axios.get(`https://newsie.herokuapp.com/nyt`)
  .then(response => {
    setNytData(response.data.response.reverse())
  })
  axios.get(`https://newsie.herokuapp.com/tg`)
  .then(response => {
    setTgData(response.data.response.reverse())
  })
  axios.get(`https://newsie.herokuapp.com/times`)
  .then(response => {
    setTimesData(response.data.response.reverse())
  })
  axios.get(`https://newsie.herokuapp.com/vox`)
  .then(response => {
    setVoxData(response.data.response.reverse())
  })
  axios.get(`https://newsie.herokuapp.com/fox`)
  .then(response => {
    setFoxData(response.data.response.reverse())
  })
}, [])

useEffect(() => {
  axios.get(`https://newsie.herokuapp.com/home`)
  .then(response => {
    setAllArticles(response.data.allArticles)
  })
}, [])



  return (

  <BrowserRouter>
    <DataContext.Provider value={{allArticles, setAllArticles, foxData, setFoxData, cnnData, setCnnData, nytData, setNytData, tgData, setTgData, timesData, setTimesData, voxData, setVoxData}}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/fox" element={<Fox/>}></Route>
          <Route path="/cnn" element={<Cnn/>}></Route>
          <Route path="/tg" element={<Tg/>}></Route>
          <Route path="/nyt" element={<Nyt/>}></Route>
          <Route path="/times" element={<Times/>}></Route>
          <Route path="/vox" element={<Vox/>}></Route>
        </Routes>
    </DataContext.Provider> 
  </BrowserRouter>
  )
}

export default App
