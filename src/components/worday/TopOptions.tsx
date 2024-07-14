"use client"

import React from 'react'

const TopOptions = () => {
    return (
        <section className='mt-2 w-[51%] h-[5rem] flex justify-center items-center text-2xl font-semibold'>
            <div className='flex gap-16'>
                <button className='bg-[#cccccc10] rounded-md pl-10 pr-10 pt-2 pb-2 hover:border-[#0f949b50] hover:text-[#01bb88] hover:bg-[#cccccc20]'>Dica</button>
                <button className='bg-[#cccccc10] rounded-md pl-10 pr-10 pt-2 pb-2 hover:border-[#0f949b50] hover:text-[#01bb88] hover:bg-[#cccccc20]'>Resposta</button>
                <button className='bg-[#cccccc10] rounded-md   pl-10 pr-10 pt-2 pb-2 hover:border-[#0f949b50] hover:text-[#01bb88] hover:bg-[#cccccc20]'>Add Palavra</button>
            </div>
        </section>
    )
}

export default TopOptions