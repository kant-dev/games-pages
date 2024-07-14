import React from 'react'

const HitoricWord = () => {
    return (
        <div className='border-red-500 border w-1/4'>
            <div className='flex justify-between p-4'>
                <h2>Historico de Tentativas</h2>
                <h2>Tentativas #0001</h2>
            </div>
            <ul className='border-red-500 border flex flex-col items-center mt-5 h-auto p-4 gap-y-3'>
                <li className='bg-slate-800 w-full h-14 flex items-center justify-center text-3xl font-semibold rounded-md'>valor do input após clicar no button</li>
            </ul>
        </div>
    )
}

export default HitoricWord