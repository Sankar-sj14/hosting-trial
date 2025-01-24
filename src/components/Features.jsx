import React from 'react'

const Features = () => {
  return (
      <div className='bg-slate-800 h-screen w-full p-8 flex flex-col justify-center gap-4'>
        <div className='text-white text-6xl'>FEATURES</div>
        <div className="w-full h-1/2 gap-4 flex items-center">
        <div className="w-1/4 bg-slate-600 h-full rounded-md"></div>
        <div className="w-1/4 bg-slate-600 h-full rounded-md"></div>
        <div className="w-1/4 bg-slate-600 h-full rounded-md"></div>
        <div className="w-1/4 bg-slate-600 h-full rounded-md"></div>
        </div>
    </div>
  )
}

export default Features