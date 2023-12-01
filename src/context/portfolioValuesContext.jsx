import { createContext, useContext, useEffect, useState } from "react";

const portfolioValuesContext = createContext()

export const PortfolioValuesProvider = ({ children }) => {
    const [isNavbarSelected, setIsNavbarSelected] = useState(false)
    const [isHomeSelected, setIsHomeSelected] = useState(false);
    const [navPaddingX, setNavPaddingX] = useState(45)
    const [navPaddingY, setNavPaddingY] = useState(30)
    const [logoSize, setLogoSize] = useState(5)
    const [logoWeight, setLogoWeight] = useState(1)
    const [logoFontFamily, setLogoFontFamily] = useState(0)
    const [logoName, setLogoName] = useState("Mrikon")
    const [menuIconSize, setMenuIconSize] = useState(6)
    const [menuIcon, setMenuIcon] = useState(0)
    const [text1, setText1] = useState({ name: "Hello", text: "Hello,", size: 6, weight: 1 });
    const [text2, setText2] = useState({ name: "I'm Mrikon Roth", text: "I'm Mrikon Roth,", size: 9, weight: 2 });
    const [text3, setText3] = useState({ name: "I Am", text: "I Am", size: 4, weight: 1 });
    const [animatedTexts, setAnimatedTexts] = useState(JSON.parse(localStorage.getItem("animatedTexts")));


    return (
        <portfolioValuesContext.Provider value={{ isNavbarSelected, setIsNavbarSelected, isHomeSelected, setIsHomeSelected, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logoSize, setLogoSize, logoWeight, setLogoWeight, logoFontFamily, setLogoFontFamily, logoName, setLogoName, menuIconSize, setMenuIconSize, menuIcon, setMenuIcon, text1, setText1, text2, setText2, text3, setText3, animatedTexts, setAnimatedTexts }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
