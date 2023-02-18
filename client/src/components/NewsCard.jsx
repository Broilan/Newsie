import { useState } from 'react'
import dude from '../assets/dude.png'

function NewsCard(props) {
    const article=props.article
    const  createdBy=props.createdBy
    const eyebrow=props.eyebrow
    const  image=props.image
    const  timePosted=props.timePosted
    const  title=props.title
    const  url=props.url

  return (
    <div className=' bg-primary w-fit h-fit left-[25%] top-[25%] rounded-[20px]'>
        
        <div className='w-[28rem] h-fit bg-dimWhite shadow-2xl border-none rounded-[20px] p-8'>
            <img src={dude} className="w-fit  h-48 inline border-none rounded-2xl" />
            

            <div className='flex flex-col relative left-[20rem] bottom-[12rem]'>
            <div className='font-bold'>{createdBy}</div>
            <div className='font-semibold'>{timePosted}</div>
            <h1 className='font-semibold'>{eyebrow}</h1>
            </div>
            <div className='flex'>
            <h1 className='font-bold my-5'>{title}</h1>
            <a href={url} className='flex border-2 ml-auto border-black justify-center text-center p-1 pr-2 pt-1.5 rounded-[10px] h-10 w-20 bg-dimWhite text-primary font-semibold'> View </a>
            </div>
            <h3 className='font-semibold'>{article}</h3>

        </div>
    </div>
  )
}

export default NewsCard