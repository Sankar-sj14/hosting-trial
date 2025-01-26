import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import SideBar from './SideBar';

const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen,setisOpen] = useState(false)
  const sidebarRef = useRef(null);

  const toggleSidebar = () =>{
    setisOpen((prev)=>!prev);
  }
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setisOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
    <SideBar isOpen={isOpen} sidebarRef={sidebarRef}/>
    <div className={`bg-gray-800 p-4 w-full fixed top-0 left-0 z-20 transition-transform duration-300 ${isVisible ? 'transform-none' : '-translate-y-full'}`}>

        <div className='p-8 flex justify-between'>
        <img src='/images/pxpdark.png' className='w-48' ></img>
        <div className='sm:hidden'onClick={toggleSidebar} ><Menu className='text-white'/></div>
        </div>
    </div>
    </>
  )
}

export default Header