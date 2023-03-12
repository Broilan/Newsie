import React, {useContext, useRef, useEffect} from 'react'
import axios from "axios"
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import fox from '../assets/fox.png'



const Fox = () => {
  const {foxData, setFoxData} = useContext(DataContext)
  const numRef = useRef(100)
  
  useEffect(() => {
    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) { 
        axios.get(`http://localhost:8001/fox/${numRef.current}`)
        .then(response => {
          numRef.current = numRef.current + 50
          setFoxData(response.data.response.reverse())
        })
      } else {
        return
      }
    })
  }, [])
  


  return (
    <div>
      <div id="foxheader" className='flex text-center justify-center h-[25vh] w-full bg-dimWhite text-[5rem]'> 
       <img src={fox} className='h-[45vh] mt-[-2rem] w-[40rem] '></img>
      </div>
      <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {foxData?.map((d) => <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Fox