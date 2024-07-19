import React from 'react'
import { BiBookmarkHeart } from "react-icons/bi";

export default function Save() {
  return (
    <div className=' h-[700px]' >
      <div className=' '>
        <h1 className='text-[30px] text-[#EEEEEE] p-[40px_20px]'>Favourites</h1>
      </div>
      <div className='flex flex-col justify-center items-center h-[550px]'>
        <span className='text-[90px] text-[#EEEEEE]'>
          <BiBookmarkHeart />
        </span>
        <h1 className='text-[30px] text-[#EEEEEE] pt-[30px]'>You have no favorites</h1>
        <h3 className='text-[15px] text-center text-[grey] w-[250px] '>Find definitions and tap the O icon to display them here.</h3>
      </div>
    </div>
  )
}
