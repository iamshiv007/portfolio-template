import React, { useState } from 'react'
import boy2 from "../../../../assets/boy2.png"
import { usePortfolioValues } from '../../../../context/portfolioValuesContext';
import { useApplicationContext } from '../../../../context/applicationContext'

const Home = () => {
  const [isBorder, setIsBorder] = useState(false);
  const { screenSize } = useApplicationContext()
  const { isHomeSelected, setIsHomeSelected } = usePortfolioValues()

  const toggleHomeSelected = () => {
    setIsHomeSelected(!isHomeSelected)
  }

  const isBorderTrue = () => {
    setIsBorder(true)
  }

  const isBorderFalse = () => {
    setIsBorder(false)
  }

  return (
    <section className={`h-full bg-[#312722] ${(isBorder && screenSize !== "fullscreen" && !isHomeSelected) ? "border-2" : ""} ${isHomeSelected && "border-4"} border-blue-500 flex items-center relative overflow-hidden`} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >

      <div className='px-36 flex flex-col gap-8 z-10' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >
        <p className='text-4xl text-white'>Hello,</p>
        <p className='text-7xl text-white font-bold'>I'm Mrikon Roth</p>
        <p className='text-2xl text-white'>I Am Passionate Developer |</p>
        <a href="#" className='button'>CONTACT US</a>
      </div>

      <div className='w-[800px] h-[800px] bg-[#CE9076] rounded-full absolute top-[-200px] right-[-300px]' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
      <img alt="boy2" src={boy2} className='absolute right-0 bottom-0' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
    </section>
  )
}

export default Home