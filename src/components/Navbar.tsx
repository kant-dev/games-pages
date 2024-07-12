import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='absolute top-[90%] bg-gray-800 w-1/3 h-16 rounded-lg shadow-lg shadow-black'>
            <ul className='flex flex-wrap items-center  justify-center  gap-8 w-full h-16'>
                <Link href={'/'} className='text-3xl font-bold hover:scale-110 transition-all hover:ml-5 hover:mr-5'>
                    <li>Home</li>
                </Link>
                <Link href={'/adedanha'} className='text-3xl font-bold  hover:scale-110 transition-all hover:ml-5 hover:mr-5'>
                    <li>Adedanha</li>
                </Link>
            </ul>
        </div>

    )
}

export default Navbar