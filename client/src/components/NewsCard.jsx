import { useState } from 'react'
import newsie from '../assets/newsieexclblk.png'


function NewsCard(props) {
    const article=props.article
    const  createdby=props.createdby
    const eyebrow=props.eyebrow
    const  image=props.image
    const  title=props.title
    const  url=props.url
    const date=props.date
    const [calcDate, setCalcDate] = useState(date)

    // function dateConvert() {
    //     if(timePosted[2]=="h" || timePosted[3]=="h") {
    //         if (timePosted[1] == " ") {
    //             console.log(timePosted, "hours is only one digit")
    //         }else {
    //             console.log(timePosted, "hour is two digits")
    //         }
    //     }else if (timePosted[2]=="d") {
    //         if (timePosted[1] == " ") {
    //             console.log(timePosted, "day is only one digit")
    //         }else {
    //             console.log(timePosted, "day is two digits")
    //         }
    //     }else if(timePosted[2]=="m" || timePosted[3]=="m" ) {
    //         if (timePosted[1] == " ") {
    //             console.log(timePosted, "minute is only one digit")
    //         }else {
    //             console.log(timePosted, "minute is two digits")
    //         }
    //     } else if(timePosted[-2] == " " || timePosted[-3] == " ") {
    //         console.log('month', timePosted)
    //     }
    // }
    // dateConvert()

  return (
    <div className=' bg-primary w-fit h-fit left-[25%] top-[25%] border-[2px] border-black rounded-[5px]'>
       
        <div className='w-[24rem] h-[30rem] bg-dimWhite shadow-2x1 border-none rounded-[5px] p-2'>

           { image?  <img src={image} className="w-[100%]  h-48 border-[2px] border-black " /> : <img src={newsie} className="w-[100%]  h-48 border-[2px] border-black " />}
            <ul className='flex flex-row gap-20'>
            <li className='font-bold'>{createdby}</li>
            <li className='font-semibold'>{calcDate}</li>
            <li className='font-semibold ml-[-1rem]'>{eyebrow}</li>
            </ul>
            <div className='flex'>
            <h1 className='font-bold my-5'>{title}</h1>
            <a href={url} target="_blank" className='flex border-2 ml-auto border-black justify-center mt-4 text-center p-1 pr-2 pt-1.5 rounded-[10px] h-10 w-20 bg-dimWhite text-primary font-semibold'> View </a>
            </div>
            <h3 className='font-semibold'>{article}</h3>

        </div> 
    </div> 
  )
}

export default NewsCard