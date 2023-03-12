import React, {useContext, useRef, useEffect} from 'react'
import axios from "axios"
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import vox from '../assets/vox.png'
import voxblk from '../assets/voxblkbg.png'


const Vox = () => {
  const {voxData, setVoxData} = useContext(DataContext)
  const numRef = useRef(100)
  
  useEffect(() => {
    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) { 
        axios.get(`http://localhost:8001/vox/${numRef.current}`)
        .then(response => {
          numRef.current = numRef.current + 50
          setVoxData(response.data.response.reverse())
        })
      } else {
        return
      }
    })
  }, [])
  


  return (
    <div>
      <div id="foxheader" className='flex text-center justify-center h-[25vh] w-full bg-dimWhite text-[5rem]'> 
       <img src={vox} className='h-[45vh] mt-[-4rem] w-[40rem] '></img>
      </div>
      <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {voxData?.map((d) => <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={voxblk} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Vox