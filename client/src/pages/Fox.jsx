import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import fox from '../assets/fox.png'


const Fox = () => {
  const {foxData, setFoxData} = useContext(DataContext)
  const [postsPerPage, setPostsPerPage] = useState(50)
  const [currentRender, setCurrentRender] = useState([])
  
  useEffect(() => {
    setCurrentRender(foxData.reverse().slice(0, postsPerPage))

    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) {
        setPostsPerPage(postsPerPage + 50)
      } else {
        console.log("not there yet")
      }
  
    })
  
  }, [foxData, postsPerPage])
  


  return (
    <div className='bg-dimWhite'>
      <div id="foxheader" className='flex text-center justify-center h-[25vh] w-full bg-secondary text-[5rem]'> 
       <img src={fox} className='h-[45vh] mt-[-2rem] w-[40rem] '></img>
      
      </div>
      <div className='flex gap-8 flex-wrap ml-2 mt-2'>
     {currentRender?.map((d) => <NewsCard article={d.article} createdby={d.createdBy} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Fox