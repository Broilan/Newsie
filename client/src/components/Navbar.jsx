import React from 'react'
import { NavLink } from 'react-router-dom'
import newsitewhite from '../assets/newisewhite.png'
import abcwhite from '../assets/abcwhite.png'
import cnnwhite from '../assets/cnnwhite.png'
import foxwhite from '../assets/foxwhite.png'
import nytimewhite from '../assets/nytimewhite.png'
import tgwhite from '../assets/tgwhite.png'
import timewhite from '../assets/timewhite.png'
import voxwhite from '../assets/voxwhite.png'

const Navbar = () => {
  return (
    <div className=' fixed flex gap-10  w-screen bg-primary h-16 text-white'>
        <NavLink to='/' className='relative top-[-3.7rem]'><img src={newsitewhite} alt="newsie logo" className='w-48 h-48'/></NavLink>
        <NavLink to='/abc'><img src={abcwhite} className="w-20 h-20"></img></NavLink>
        <NavLink to='/cnn'><img src={cnnwhite} className="w-20 h-20"></img></NavLink>
        <NavLink to='/fox'><img src={foxwhite} className="w-20 h-20"></img></NavLink>
        <NavLink to='/tg'><img src={tgwhite} className="w-20 h-20"></img ></NavLink>
        <NavLink to='/nyt'><img src={nytimewhite} className="w-16 h-14 mt-3"></img></NavLink>
        <NavLink to='/times'><img src={timewhite} className="w-20 h-20"></img></NavLink>
        <NavLink to='/vox'><img src={voxwhite} className="w-20 h-20"></img></NavLink>

    </div>
  )
}

export default Navbar