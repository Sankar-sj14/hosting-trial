import React from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id='Hero' className='bg-gradient-to-b  from-slate-500 via-gray-800 to-slate-800 p-4 h-auto flex flex-col sm:flex-row'>
        <div className=' flex w-full sm:w-1/2 h-screen items-center justify-center '>
        <div className=' h-1/2 w-full flex flex-col justify-center items-center p-14 gap-8 '>
        <h1><span className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-200 font-sans font-semibold flex justify-center p-4'>Advanced Business Solutions</span></h1>
        <img src='/images/XP Icon.png' className='w-full' ></img>
        <h1><span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-500 to-sky-300 font-extrabold flex justify-center p-4'>Experience the Presence</span></h1>
        <Button variant="outline" className="block">Explore</Button>

        </div>
        </div>
        <div className="h-screen w-full sm:w-1/2 py-48 flex items-center justify-center p-14">
            <div className="h-1/2 xl:h-full w-full bg-transparent flex items-center justify-center text-white"><h1>Image here</h1></div>
        </div>
    </section>
    
  )
}

export default Hero

