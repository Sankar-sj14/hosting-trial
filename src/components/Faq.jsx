import React from 'react'
import Accordions from './Accordions'

const Faq = () => {
  return (
    <div className='bg-slate-800 h-screen w-full p-4 sm:p-24 flex flex-col justify-center items-center gap-14'>
        <div className='text-white text-xl font-bold sm:text-6xl w-full flex justify-start '>FAQ</div>
        <div className="sm:w-1/2 h-1/2 flex flex-col gap-4 w-full ">
        <Accordions/>
        <Accordions/>
        <Accordions/>
        <Accordions/>
        </div>
    </div>
  )
}

export default Faq