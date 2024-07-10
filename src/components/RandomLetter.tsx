"use client"

import React, { useState } from 'react'

const RandomLetter = () => {
    const [randomLetter, setRandomLetter] = useState(' ')
    const [isLoading, setLoading] = useState(false)
    const [chosenLetters, setChosenLetters] = useState<string[]>([])

    const generateRandomLetter = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const randomIndex = Math.floor(Math.random() * letters.length)
        return letters[randomIndex]
    }

    const handleButtonClick = () => {
        setLoading(true)
        setTimeout(() => {
            const newLetter = generateRandomLetter()
            setRandomLetter(newLetter)
            setChosenLetters(prevLetters => [...prevLetters, newLetter])
            setLoading(false)
        }, 1000)
    }

    const handleReset = () => {
        setRandomLetter(' ')
        setChosenLetters([])
    }
    return (
        <div className='w-full h-auto'>
            <div className='flex flex-wrap justify-center p-4  w-full'>
                <h2 className="text-6xl w-full mb-5 h-[5rem] flex justify-center items-center bg-[#cccccc20] font-bold rounded-[0.5rem]">
                        {randomLetter}
                </h2>
                <div className='flex gap-5'>
                <button 
                    className='border border-[#0f949b] rounded-sm p-2 w-[10rem] text-[1.5rem] font-semibold  hover:border-[#0f949b50] hover:text-[#01bb88] hover:bg-[#cccccc20]'
                    onClick={handleButtonClick} 
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : ' New Letter'}
                </button>
                {/* button de resetar jogo */}
                <button 
                    className='border border-[#0f949b] rounded-sm p-2 w-[10rem  text-[1.5rem] font-semibold hover:border-[#0f949b50] hover:text-[#01bb88] hover:bg-[#cccccc20]'
                    onClick={handleReset}
                >
                    Reset Game
                </button>
                </div>
            </div>
            <div className='w-full flex mt-4  flex-wrap justify-center pb-4'>
                <h2 className='text-3xl mb-3 font-semibold'>History of Letters</h2>
                <ul className='flex flex-wrap gap-4 w-[90%]'>
                    {chosenLetters.map((letter, index) => (
                        <li key={index} className='flex justify-center items-center text-3xl font-extrabold  w-10 h-10 bg-[#cccccc20] rounded-sm '>{letter}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RandomLetter
