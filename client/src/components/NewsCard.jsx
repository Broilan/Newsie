import { useState } from 'react'
import dude from '../assets/dude.png'

function NewsCard(props) {

  return (
    <div className='absolute bg-primary w-fit h-fit left-[25%] top-[25%] rounded-[20px]'>
        <div className='w-[28rem] h-fit bg-dimWhite shadow-2xl border-none rounded-[20px] p-8'>
            <img src={dude} className="w-fit  h-48 inline border-none rounded-2xl" />
            

            <div className='flex flex-col absolute top-8 right-8'>
            <div className='font-bold'>Fox News</div>
            <div className='font-semibold'>Posted 15 hrs ago</div>
            <h1 className='font-semibold'>Boston</h1>
            </div>
            <div className='flex'>
            <h1 className='font-bold my-5'>Title</h1>
            <div className='flex border-2 ml-auto border-black justify-center text-center p-1 pr-2 pt-1.5 rounded-[10px] h-10 w-20 bg-dimWhite text-primary font-semibold'> View </div>
            </div>
            <h3 className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </h3>

        </div>
    </div>
  )
}

export default NewsCard