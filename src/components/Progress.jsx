import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';

export default function Progress() {
    const btnStl = "w-[300px] h-[50px] text-[#EEEEEE] bg-[#31363F] rounded-[10px] shadow-lg flex flex-col justify-center items-center shadow-[0px_0px_33px_12px_rgba(0,0,0,0.36)]";
    const max = 21000;
    const percentageValue = 15000; 
    const percentage = (percentageValue / max) * 100;
    const percentage3 = "Learned words";

    return (
        <div className='w-full h-auto'>
            <div className="flex z-1 sm:hidden justify-center items-center w-full pt-[20px]">
                <CircularProgressbarWithChildren 
                    styles={buildStyles({
                        textSize: '',
                        pathTransitionDuration: 5,
                        pathColor: `#00ADB5`,
                        textColor: '',
                        trailColor: '#31363F',
                        backgroundColor: '',
                    })} 
                    value={percentage}
                >
                    <h1 className='text-[37px] text-[#EEEEEE]'>{percentageValue}/21000</h1>
                    <h1 className='text-[20px] text-[#EEEEEE] mt-[20px]'>{percentage3}</h1>
                </CircularProgressbarWithChildren>
            </div>
            <div className='flex sm:hidden w-full h-auto pt-[65px] '>
                <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
                    <NavLink className={btnStl}>nimadur</NavLink>
                    <NavLink className={btnStl}>nimadur2</NavLink>
                    <NavLink className={btnStl}>nimadur3</NavLink>
                    <NavLink className={btnStl}>nimadur4</NavLink>
                    <NavLink className={btnStl}>nimadur</NavLink>
                    <NavLink className={btnStl}>nimadur2</NavLink>
                    <NavLink className={btnStl}>nimadur3</NavLink>
                    <NavLink className={btnStl}>nimadur4</NavLink>
                    <NavLink className={btnStl}>nimadur</NavLink>
                    <NavLink className={btnStl}>nimadur2</NavLink>
                    <NavLink className={btnStl}>nimadur3</NavLink>
                    <NavLink className={btnStl}>nimadur4</NavLink>
                </div>
            </div>
        </div>
    );
}
