import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col">
    <SideBar/> 
    <Header/>
    <Hero/>
    <Features/>
    <Faq/>
    <Footer/>
    </div>
  );
}