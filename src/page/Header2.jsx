import React from 'react'

export default function Header2() {
    return (
        <>
            <div className='flex fixed top-0 md:hidden w-full h-[70px] bg-[#222831] shadow-[0px_-2px_23px_15px_rgba(0,0,0,0.36)] z-[2] items-center justify-between text-[#EEEEEE] p-[0px_10px]'>
                <div className='w-[45px] h-[45px] border-[4px] border-linecol rounded-[50%] flex  items-center justify-center overflow-hidden'>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/616/631/non_2x/american-flag-us-flag-usa-flag-on-the-circle-shape-format-png.png " alt="" />
                </div>
                <div>
                    <h1 className='text-[25px] font-[900]'>WORDS</h1>
                </div>
            </div>
        </>
    )
}
