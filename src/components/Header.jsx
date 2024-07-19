import React from 'react'
import { IoIosSettings } from "react-icons/io";
import { HiMiniUserCircle, HiInboxArrowDown, HiLifebuoy, HiPower } from "react-icons/hi2";
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';

const items = [
    {
        label:<NavLink to={"/profile"} className={({ isActive }) => isActive ? "text-linecol" : ""}>My Profile</NavLink>,
        icon: <HiMiniUserCircle style={{ fontSize: '20px' }} />,
    },
    {
        label: "Edit Profile",
        icon: <IoIosSettings style={{ fontSize: '20px' }} />,
    },
    {
        label: "Help",
        icon: <HiLifebuoy style={{ fontSize: '20px' }} />,
    },
];
export default function Header() {
    return (
        <>
            <div className='flex fixed top-0 md:hidden w-full h-[70px] bg-[#222831] shadow-[0px_-2px_23px_15px_rgba(0,0,0,0.36)] z-[2] items-center justify-between text-[#EEEEEE] p-[0px_10px]'>
                <div className='w-[45px] h-[45px] border-[4px] border-linecol rounded-[50%] flex  items-center justify-center overflow-hidden'>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/616/631/non_2x/american-flag-us-flag-usa-flag-on-the-circle-shape-format-png.png " alt="" />
                </div>
                <div>
                    <h1 className='text-[25px] font-[900]'>WORDS</h1>
                </div>
                <Dropdown menu={{ items }} trigger={['click']} >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <div className='w-[45px] h-[45px] border-[4px] border-linecol rounded-[50%] flex  items-center justify-center overflow-hidden'>
                                <img src="https://static.vecteezy.com/system/resources/previews/022/123/337/non_2x/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg" alt="" />
                            </div>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </>
    )
}
