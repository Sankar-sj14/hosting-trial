import React from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className='bg-slate-400 h-auto flex flex-col sm:flex-row sm:p-24'>
        <div className=' flex w-full sm:w-1/2 h-screen items-center justify-center bg-slate-200 p-4'>
        <div className=' h-1/2 w-full flex flex-col justify-center items-center bg-slate-300 p-8 gap-8'>
        <h1 className='text-xl text-white flex justify-center p-4'>Experience the Presence</h1>
        <img src='/images/XP Icon.png' className='w-full'></img>
        <Button variant="outline" className="block mt-8">Explore</Button>

        </div>
        </div>
        <div className="h-screen w-full sm:w-1/2 py-48 flex items-center justify-center p-14 bg-slate-500">
            <div className="h-1/2 xl:h-full w-full bg-slate-600 flex items-center justify-center text-white"><h1>Image here</h1></div>
        </div>
    </div>
  )
}

export default Hero

