import React, {useContext, useState, useRef, useEffect} from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import newsie from '../assets/newsieexclblk.png'



const Home = () => {
  const {allArticles, setAllArticles} = useContext(DataContext)
  const numRef = useRef(100)

  useEffect(() => {
    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) { 
        axios.get(`http://localhost:8001/home/${numRef.current}`)
        .then(response => {
          numRef.current = numRef.current + 50
          setAllArticles(response.data.allArticles.reverse())
        })
      } else {
        console.log("not there yet")
      }
    })
  }, [])

    return (
      <div>
        <div> <Spinner />  </div>  
        <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {allArticles?.map((d) => d.createdby=="The Guardian"? <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={newsie} timePosted={d.timePosted} title={d.title} url={d.url}/>: d.title? <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>:null)}
      </div>
       </div>
      )
    }

export default Home