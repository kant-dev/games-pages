"use client"

import { Menu } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [expanded, setExpanded] = useState(true)

    const handleMenuIcon = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`${expanded  ? 'w-1/3 fixed flex justify-center items-center top-[91%]  bg-gray-800 h-16 rounded-lg  shadow-lg shadow-black text-2xl ' : 'fixed top-[90%] left-[95%] bg-gray-800 h-16 rounded-lg shadow-lg flex w-16 justify-center text-2xl  transition duration-75 animate-toLeft'}`}>
            <div className={`${expanded ? 'flex  gap-8' : 'flex'}`}>
                <ul className='flex gap-8'>
                    <li className={`${expanded?  'text-3xl font-bold hover:scale-110 transition-all hover:ml-5 hover:mr-5  hover:border-[#0f949b50] hover:text-[#01bb88] ' : 'hidden'}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${expanded?  'text-3xl font-bold hover:scale-110 transition-all hover:ml-5 hover:mr-5  hover:border-[#0f949b50] hover:text-[#01bb88] ' : 'hidden'}`}>
                        <Link href="/adedanha">Adedanha</Link>
                    </li>
                    <li className={`${expanded?  'text-3xl font-bold hover:scale-110 transition-all hover:ml-5 hover:mr-5  hover:border-[#0f949b50] hover:text-[#01bb88] ' : 'hidden'}`}>
                        <Link href="/wordday">Palavra do dia</Link>
                    </li>
                </ul>
                <button onClick={handleMenuIcon} className='basis-3 hover:border-[#0f949b50] hover:text-[#01bb88]'>
                    <Menu className="text-3xl font-bold hover:scale-110 transition-all cursor-pointer" />
                </button>
            </div>
        </div>
    );
}

export default Navbar