import React from 'react'
import { NavLink } from 'react-router-dom';
import { GrHomeOption } from "react-icons/gr";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="flex fixed bottom-0 md:hidden p-5 w-full text-[#EEEEEE] justify-around items-center bg-[#222831] shadow-[0px_-2px_23px_15px_rgba(0,0,0,0.36)] mt-auto">
            <NavLink to={"/save"} className={({ isActive }) => isActive ? "text-[35px] text-linecol" : "text-[35px]"
            } ><FaRegBookmark /></NavLink>
            <NavLink to={"/"} className={({ isActive }) => isActive ? "text-[35px] text-linecol" : "text-[35px]"
            }><GrHomeOption /></NavLink>
            <NavLink to={"/musicplayer"} className={({ isActive }) => isActive ? "text-[35px] text-linecol" : "text-[35px]"
            }><FaRegUser /></NavLink>
        </div>
    )
}
