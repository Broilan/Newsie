import React, {useContext} from 'react'
import Spinner from '../components/Spinner'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'




const Home = () => {
  const {allArticles, setAllArticles} = useContext(DataContext)
    return (
      <div>
        <div> <Spinner /></div>
        <div className='flex gap-[5rem] ml-[4rem] flex-wrap mt-4'>
     {allArticles?.map((d) => <NewsCard article={d.article} dateNow={d.dateNow} date={d.date} createdby={d.createdby} eyebrow={d.eyebrow} image={d.image} timePosted={d.timePosted} title={d.title} url={d.url}/>)}
      </div>
       </div>
      )
    }

export default Home