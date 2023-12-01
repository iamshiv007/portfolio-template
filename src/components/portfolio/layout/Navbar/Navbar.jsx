import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { usePortfolioValues } from "../../../../context/portfolioValuesContext";
import { useApplicationContext } from "../../../../context/applicationContext";

const Navbar = () => {
    const [isBorder, setIsBorder] = useState(false);
    const { setIsNavbarSelected, isNavbarSelected, navPaddingX, navPaddingY, logoSize, logoWeight, logoFontFamily, logoName, menuIconSize, menuIcon } = usePortfolioValues()
    const { screenSize } = useApplicationContext()

    const toggleNavbarSelected = () => {
        setIsNavbarSelected(!isNavbarSelected)
    }

    const isBorderTrue = () => {
        setIsBorder(true)
    }

    const isBorderFalse = () => {
        setIsBorder(false)
    }

    const fontSizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", 'text-4xl']
    const fontWeights = ["font-light", "font-bold"]
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]
    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]

    return (
        <>
            <navbar className={`bg-transparent ${isNavbarSelected && "border-4"} ${isBorder && !isNavbarSelected && screenSize !== "fullscreen" && "hover:border-2"} border-blue-400 flex justify-between items-center absolute top-0 left-0 right-0 z-30`} style={{ padding: `${navPaddingY}px ${navPaddingX}px` }} onClick={toggleNavbarSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse}>
                <a href="#" className={`${fontSizes[logoSize] + " " + fontWeights[logoWeight]} text-white`} style={{ fontFamily: fontFamilies[logoFontFamily] }} onClick={toggleNavbarSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse}>{logoName}</a>
                <button className={`${fontSizes[menuIconSize]} text-white`} onClick={toggleNavbarSelected} onMouseEnter={isBorderTrue} onMouseLeave={isBorderFalse}>{icons[menuIcon]}</button>
            </navbar>
        </>
    )
}

export default Navbar