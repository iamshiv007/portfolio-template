import React, { useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import boy2 from "../../../../assets/boy2.png"
import { usePortfolioValues } from '../../../../context/portfolioValuesContext';
import { useApplicationContext } from '../../../../context/applicationContext'

const Home = () => {
  const [isBorder, setIsBorder] = useState(false);
  const { screenSize } = useApplicationContext()
  const { isHomeSelected, setIsHomeSelected, setIsNavbarSelected, text1, text2, text3, animatedTexts } = usePortfolioValues()

  const modifiedAnimatedTexts = animatedTexts.flatMap((element) => [element, 1000])

  const { text, size, weight } = text1
  const { text: text_, size: size_, weight: weight_ } = text2
  const { text: text__, size: size__, weight: weight__ } = text3

  const fontSizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", 'text-4xl', "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"]
  const fontWeights = ["font-light", "font-normal", "font-bold"]
  const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]

  const toggleHomeSelected = () => {
    setIsHomeSelected(!isHomeSelected)
    setIsNavbarSelected(false)
  }

  const isBorderTrue = () => {
    setIsBorder(true)
  }

  const isBorderFalse = () => {
    setIsBorder(false)
  }

  return (
    <section className={`h-full bg-[#312722] ${(isBorder && screenSize !== "fullscreen" && !isHomeSelected) ? "border-2" : ""} ${isHomeSelected && "border-4"} border-blue-500 flex items-center relative overflow-hidden`} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >

      <div className='px-36 flex flex-col gap-8 font- z-10' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >
        <p className={`${fontSizes[size] + " " + fontWeights[weight]} text-white`}>{text}</p>
        <p className={`${fontSizes[size_] + " " + fontWeights[weight_]} text-white`}>{text_}</p>
        <p className={`${fontSizes[size__] + " " + fontWeights[weight__]} text-white`}>
          {text__ + " "}
          <TypeAnimation
            sequence={modifiedAnimatedTexts}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <a href="#" className='button'>CONTACT US</a>
      </div>

      <div className='w-[800px] h-[800px] bg-[#CE9076] rounded-full absolute top-[-200px] right-[-300px]' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
      <img alt="boy2" src={boy2} className='absolute right-0 bottom-0' onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
    </section>
  )
}

export default Home