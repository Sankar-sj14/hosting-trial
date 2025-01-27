import React from 'react'

const SideBar = ({isOpen , sidebarRef}) => {
  return (
    <div ref={sidebarRef} className={`sm:hidden bg-black h-screen w-3/4 fixed top-0 left-0 z-10 flex justify-center items-center text-white text-2xl font-bold ${isOpen? 'translate-x-0' : '-translate-x-full'}`}>
     <ul className='flex-col flex gap-8'>
        <li><a href='#Hero'>Hero</a></li>
        <li><a href='#Features'>Features</a></li>
        <li><a href='#Faq'>Faq</a></li>
        <li><a href='#Footer'>Footer</a></li>
    </ul>   
    </div>
  )
}

export default SideBar