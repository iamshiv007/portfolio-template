import React, { useState } from "react"
import { usePortfolioValues } from "../../../../context/portfolioValuesContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { useApplicationContext } from "../../../../context/applicationContext";

const Navbar = () => {
    const [isNavbarSelected, setIsNavbarSelected] = useState(false)
    const { iconSize, menuIcon, navPaddingX, navPaddingY, logoName, logoSize, logoFontFamily, logoWeight } = usePortfolioValues()
    const { screenSize } = useApplicationContext()

    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]
    const fontWeights = ["font-light", "font-bold"]
    const fontSizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", 'text-4xl']
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]

    return (
        <>
            <navbar style={{ padding: `${navPaddingY}px ${navPaddingX}px` }} className="bg-transparent flex justify-between items-center absolute top-0 left-0 right-0 z-30">
                <div onClick={() => setIsNavbarSelected(!isNavbarSelected)} className={`w-full h-full ${isNavbarSelected ? "border-4" : (screenSize === "fullscreen" ? "" :  "hover:border-2")} border-blue-400 absolute top-0 left-0 z-30`} />
                <a style={{ fontFamily: fontFamilies[logoFontFamily] }} href="#" className={`${fontSizes[logoSize] + " " + fontWeights[logoWeight]} font- text-white`}>{logoName}</a>
                <button className={`${fontSizes[iconSize]} text-white`}>{icons[menuIcon]}</button>
            </navbar>
        </>
    )
}

export default Navbar