import React, { useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import { usePortfolioValues } from '../../../../context/portfolioValuesContext';
import { useApplicationContext } from '../../../../context/applicationContext'

const Home = () => {
  const [isBorder, setIsBorder] = useState(false);
  const { screenSize } = useApplicationContext()
  const { colorTheme, isHomeSelected, setIsHomeSelected, setIsNavbarSelected, gap1, paddingX1, image1, text1, text2, text3, animatedTexts, button1 } = usePortfolioValues()

  const modifiedAnimatedTexts = animatedTexts.flatMap((element) => [element, 1000])

  const { text, size, weight } = text1
  const { text: text_, size: size_, weight: weight_ } = text2
  const { text: text__, size: size__, weight: weight__ } = text3
  const { text: text___, size: size___, weight: weight___, radius } = button1

  const fontSizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", 'text-4xl', "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"]
  const fontWeights = ["font-light", "font-normal", "font-bold"]
  const radiuses = ["rounded-none", "rounded-md", "rounded-full"]

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
    <section className={`h-full ${(isBorder && screenSize !== "fullscreen" && !isHomeSelected) ? "border-2" : ""} ${isHomeSelected && "border-4"} border-blue-500 flex items-center relative overflow-hidden`} style={{ background: colorTheme.dark }} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >

      <div className={`flex flex-col z-10`} style={{ padding: `0px ${paddingX1}px`, gap: `${gap1}px` }} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} >
        <p className={`${fontSizes[size] + " " + fontWeights[weight]}`}>{text}</p>
        <p className={`${fontSizes[size_] + " " + fontWeights[weight_]}`}>{text_}</p>
        <p className={`${fontSizes[size__] + " " + fontWeights[weight__]}`}>
          {text__ + " "}
          <TypeAnimation
            sequence={modifiedAnimatedTexts}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <a href="#" className={`button ${fontSizes[size___] + " " + fontWeights[weight___] + " " + radiuses[radius]}`}>{text___}</a>
      </div>

      <div className={`w-[800px] h-[800px] rounded-full absolute top-[-200px] right-[-300px]`} style={{ background: colorTheme.light }} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
      <img alt="boy2" src={image1.image} className='absolute' style={{ width: `${image1.width}px`, top: `${image1.top}px`, left: `${image1.left}px`, bottom: `${image1.bottom}px`, right: `${image1.right}px` }} onClick={toggleHomeSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse} />
    </section>
  )
}

export default Home