import Navbar from '@/components/Navbar'
import RandomLetter from '@/components/RandomLetter'
import React from 'react'

const Adedanha = () => {
  return (
    <div className='flex flex-col items-center  w-full h-full'>
        <div className='w-1/4 mt-5'>
            <RandomLetter/>
        </div>
        <div className='w-full flex justify-center'>
            <Navbar/>
        </div>  
    </div>
  )
}

export default Adedanha