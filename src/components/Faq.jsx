import React from 'react'
import Accordions from './accordions'

const Faq = () => {
  return (
    <div className='bg-slate-800 h-screen w-full p-24 flex flex-col justify-center items-center gap-14'>
        <div className='text-white text-6xl w-full flex justify-start '>FAQ</div>
        <div className="w-1/2 h-1/2 flex flex-col gap-4 ">
        <Accordions/>
        <Accordions/>
        <Accordions/>
        <Accordions/>
        </div>
    </div>
  )
}

export default Faq