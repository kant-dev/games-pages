"use client"

import Navbar from '@/components/Navbar'
import Header from '@/components/worday/Header'
import InputArea from '@/components/worday/InputArea'
import TopOptions from '@/components/worday/TopOptions'
import Input from 'postcss/lib/input'
import React, { useState } from 'react'

const wordday = () => {

  return (
    <main className='border border-red-500 h-auto flex flex-col items-center'>
      <Header/>
      <TopOptions/>
      <InputArea/>
      <Navbar/>
    </main>
  )
}

export default wordday