import React from 'react'
import CardGlow from './CardGlow'

const Features = () => {

  const Featurelist = ["Feature1","Feature2","Feature3","Feature4"];

  return (
      <section id='Features' className='bg-gradient-to-b from-slate-800 via-black to-slate-800 h-screen w-full p-4 sm:p-24 flex flex-col justify-center gap-8 sm:gap-14 text-white'>
        <div className='text-white text-xl font-bold sm:text-4xl'>FEATURES</div>
        <div className="w-full h-full gap-4 flex flex-col md:flex md:flex-row md:h-1/2 bg-transparent p-8">
        {
          Featurelist.map((feature, index) => (
            <CardGlow key={index} Feature={feature}/>
              ))}
        </div>
        </section>
  )
}

export default Features