import React from 'react'

const SideBar = ({isOpen}) => {
  return (
    <div className={`sm:hidden bg-black h-screen w-3/4 fixed top-0 left-0 z-10 flex justify-center items-center text-white text-2xl font-bold ${isOpen? 'translate-x-0' : '-translate-x-full'}`}>
     <ul className='flex-col flex gap-8'>
        <li>Hero</li>
        <li>Features</li>
        <li>Faq</li>
        <li>Footer</li>
    </ul>   
    </div>
  )
}

export default SideBar