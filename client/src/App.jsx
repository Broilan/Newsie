import React, { useEffect, useState, useRef } from 'react'
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
  const numRef = useRef(50)
  const [tgData, setTgData] = useState([])
  const [timesData, setTimesData] = useState([])
  const [voxData, setVoxData] = useState([])
  const [allArticles, setAllArticles] = useState([])
  

useEffect(() => {  
  axios.get(`http://localhost:8001/home/${numRef.current}`)
  .then(response => {
    setAllArticles(response.data.allArticles.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/cnn/${numRef.current}`)
  .then(response => {
    setCnnData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/nyt/${numRef.current}`)
  .then(response => {
    setNytData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/tg/${numRef.current}`)
  .then(response => {
    setTgData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/times/${numRef.current}`)
  .then(response => {
    setTimesData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/vox/${numRef.current}`)
  .then(response => {
    setVoxData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
  axios.get(`http://localhost:8001/fox/${numRef.current}`)
  .then(response => {
    setFoxData(response.data.response.reverse())
  }).catch(err=> {console.log(err)})
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
