import React from 'react'

const Features = () => {
  return (
      <div className='bg-slate-800 h-screen w-full p-4 sm:p-24 flex flex-col justify-center gap-8 sm:gap-14'>
        <div className='text-white text-xl font-bold sm:text-6xl'>FEATURES</div>
        <div className="w-full h-full gap-4 flex flex-col md:flex md:flex-row md:h-1/2 bg-slate-400 p-8">
        <div className=" h-1/4 bg-slate-600  w-full md:h-full rounded-md text-white flex justify-center items-center">Feature</div>
        <div className=" h-1/4 bg-slate-600  w-full md:h-full rounded-md text-white flex justify-center items-center">Feature</div>
        <div className=" h-1/4 bg-slate-600  w-full md:h-full rounded-md text-white flex justify-center items-center">Feature</div>
        <div className=" h-1/4 bg-slate-600  w-full md:h-full rounded-md text-white flex justify-center items-center">Feature</div>

        </div>
        

        </div>
  )
}

export default Features