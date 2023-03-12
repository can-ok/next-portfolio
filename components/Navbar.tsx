import React,{useState} from 'react';
//import {useTheme} from "next-themes";
import {RiMoonFill,RiSunLine} from "react-icons/ri";
import {IoMdMenu,IoMdClose} from "react-icons/io"
interface NavItem{
    label: string
    page: string
};


const NAV_ITEMS: Array<NavItem>=[
    {
        label:"Home",
        page:"home",
    },
    {
        label:"About",
        page:"about",
    }
]


const Navbar= ()=>{
    return(
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0'>

        <div>

            <div className='text-2xl font-bold'>
                <h2>Can Okan Taşkıran</h2>
            </div>

            <div>
                {NAV_ITEMS.map((item,idx)=>{
                    return <a key={idx}>{item.label}</a>
                })}
            </div>
        </div>
        </header>

    )
}

export default Navbar;