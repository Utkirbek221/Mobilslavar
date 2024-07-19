import React, { useRef, useState } from 'react';
import avatar from "../img/avatar-icon-vector-male-user-person-profile-symbol-in-flat-color-glyph-pictogram-illustration-700-163956247.jpg"
import Header2 from '../page/Header2';
export default function Profile() {
  const inputRef = useRef(null)
  const [img, setImg] = useState(null)
  const handelImgeClick = () => {
    inputRef.current.click();
  }
  const handelImgeCheng = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImg(event.target.files[0]);
  }
  const input = "w-[90%] h-[50px] rounded-lg bg-[#31363F] shadow-[0px_0px_33px_12px_rgba(0,0,0,0.36)] text-[#EEEEEE] duration-[0.5s]"
  return (
    <div className='min-h-screen bg-[#222831]'>
      <div className='pt-[70px]'>
        <Header2 />
      </div>
      <div className='text-[#EEEEEE] bg-[#31363F] flex md:hidden justify-center items-center w-full h-[200px]'>
        <div onClick={handelImgeClick} className='overflow-hidden  w-[150px] h-[150px] bg-main rounded-[50%]  flex justify-center items-center text-[60px] text-linecol hover:bg-blue-600 border-[1px] border-[red]'>
          {img ? <img src={URL.createObjectURL(img)} alt="" className='bg-center ' /> : <img className='w-[180px] h-[150px] bg-center ' src={avatar} alt="" />}
          <input type="file" ref={inputRef} className='hidden ' onChange={handelImgeCheng} />
        </div>
      </div>
      <div className='flex md:hidden w-full py-10 flex-col items-center gap-8 '>
        <input type="text" className={input} placeholder='Ism' />
        <input type="email" className={input} placeholder='Email' />
      </div>
    </div>
  )
}
