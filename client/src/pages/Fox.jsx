import React, {useContext} from 'react'
import { DataContext } from '../App'
import NewsCard from '../components/NewsCard'


const Fox = () => {
  const {data, setData} = useContext(DataContext)
  console.log(data)

  return (
    <div><NewsCard/></div>
  )
}

export default Fox