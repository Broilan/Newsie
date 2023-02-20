import React, {useContext, useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'
import newsie from '../assets/newsieexclblk.png'


const Home = () => {
  const {allArticles, setAllArticles} = useContext(DataContext)
  const [postsPerPage, setPostsPerPage] = useState(50)
  const [currentRender, setCurrentRender] = useState([])
  
  useEffect(() => {
    setCurrentRender(allArticles.slice(0, postsPerPage))

    window.addEventListener('scroll', (e) =>{
      const yAxis = e.target.documentElement.scrollTop
      const docHeight = e.target.documentElement.scrollHeight
      if (yAxis > docHeight - 2000) {
        setPostsPerPage(postsPerPage + 50)
      } else {
        console.log("not there yet")
      }
  
    })
  
  }, [allArticles, postsPerPage])

    return (
      <div>
        <div> <Spinner /></div>
        <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {currentRender?.map((d) => d.createdby=="The Guardian"? <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={newsie} timePosted={d.timePosted} title={d.title} url={d.url}/>: d.title? <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>:null)}
      </div>
       </div>
      )
    }

export default Home