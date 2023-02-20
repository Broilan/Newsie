import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import cnn from '../assets/cnn.png'


const Cnn = () => {
  const {cnnData, setCnnData} = useContext(DataContext)
  const [postsPerPage, setPostsPerPage] = useState(50)
  const [currentRender, setCurrentRender] = useState([])
  
  useEffect(() => {
    setCurrentRender(cnnData.slice(0, postsPerPage))

    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) {
        setPostsPerPage(postsPerPage + 50)
      } else {
        console.log("not there yet")
      }
  
    })
  
  }, [cnnData, postsPerPage])
  


  return (
    <div className='bg-dimWhite'>
      <div id="foxheader" className='flex text-center justify-center h-[25vh] w-full bg-secondary text-[5rem]'> 
       <img src={cnn} className='h-[45vh] mt-[-4rem] w-[40rem] '></img>
      </div>
      <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {currentRender?.map((d) => <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
  
  
  
  </div>
  )
}

export default Cnn