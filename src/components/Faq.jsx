import React from 'react'

const Faq = () => {
  return (
    <div className='bg-slate-800 h-screen w-full p-8 flex flex-col justify-center gap-4'>
        <div className='text-white text-6xl'>FAQ</div>
        <div className="w-full h-1/2 gap-4 flex flex-col justify-center">
        <div className="h-1/4 bg-slate-600 w-full rounded-md p-4 flex justify-end items-center text-4xl text-white px-8">+</div>
        <div className="h-1/4 bg-slate-600 w-full rounded-md p-4 flex justify-end items-center text-4xl text-white px-8">+</div>
        <div className="h-1/4 bg-slate-600 w-full rounded-md p-4 flex justify-end items-center text-4xl text-white px-8">+</div>
        <div className="h-1/4 bg-slate-600 w-full rounded-md p-4 flex justify-end items-center text-4xl text-white px-8">+</div>
        </div>
    </div>
  )
}

export default Faq