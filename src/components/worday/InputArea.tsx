"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Word {
    id: string,
    word: string,
    definition: string,
}

const InputArea = () => {

    const [inputValue, setInputValue] = useState<string>(''); // pega o valor do input
    const [words, setWords] = useState<Word[]>([]); // pega o valor de words e joga dentro de um array
    const [matchWords, setMatchWords] = useState<boolean>(false); // usado para verificar se o valor da api é igual ao do input
    const [attempts, setAttempts] = useState<string[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/words')
            .then(response => {
                setWords(response.data.words);
            })
            .catch(error => {
                console.error('Erro ao buscar a palavra na API', error);
            });
    }, []);

    const handleCheckWord = (event: React.FormEvent<HTMLButtonElement>) => {
        // O ERRO ESTÁ AQUI
        const existWord = words.some(word => word.word === inputValue);
        setMatchWords(existWord);
        setAttempts(prev => [...prev, inputValue])
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleCheckWord();
        }
    };


    return (
        <section className='w-[51%] flex flex-col items-center'>
            <div className=' border w-[65%]   p-5 flex justify-center items-center gap-8'>
                <input
                    type="text"
                    placeholder='palavra'
                    className='p-3 rounded-md text-black font-semibold text-xl border-none outline-0 text-center w-[90%]'
                    value={inputValue}
                    onChange={handleInputChange} // Atualiza o valor do input
                    onKeyPress={handleEnterPress} 
                />
                <button
                    className='rounded-2xl w-auto bg-slate-800 pl-9 pr-9 pb-3 pt-3 text-xl font-bold'
                    onClick={handleCheckWord}
                >
                    checar
                </button>
            </div>

            <div>
                <div className='flex justify-between p-4'>
                    <h2>Historico de Tentativas</h2>
                    {/* Aqui */}
                    <h2>Tentativas #0001 </h2>
                </div>

                <div>
                    <ul className='border-red-500 border flex flex-col items-center mt-5 h-auto p-4 gap-y-3'>
                        {attempts.map((attempt, index) => (
                            <li key={index} className='bg-slate-800 w-full h-14 flex items-center justify-center text-3xl font-semibold rounded-md'>
                                {attempt}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default InputArea;
