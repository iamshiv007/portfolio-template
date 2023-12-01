import { createContext, useContext, useState } from "react";

const portfolioValuesContext = createContext()

export const PortfolioValuesProvider = ({ children }) => {
    const [isNavbarSelected, setIsNavbarSelected] = useState(false)
    const [isHomeSelected, setIsHomeSelected] = useState(false);
    const [navPaddingX, setNavPaddingX] = useState(45)
    const [navPaddingY, setNavPaddingY] = useState(30)
    const [logo, setLogo] = useState({ name: "Logo", text: "Mrikon", size: 5, weight: 1, family: 0 })
    const [menuIcon, setMenuIcon] = useState({ name: "Menu Icon", icon: 0, size: 6 })
    const [text1, setText1] = useState({ name: "Greeting", text: "Hello,", size: 6, weight: 1 });
    const [text2, setText2] = useState({ name: "Intro", text: "I'm Mrikon Roth,", size: 9, weight: 2 });
    const [text3, setText3] = useState({ name: "What you do", text: "I Am", size: 4, weight: 1 });
    const [animatedTexts, setAnimatedTexts] = useState(JSON.parse(localStorage.getItem("animatedTexts")));


    return (
        <portfolioValuesContext.Provider value={{ isNavbarSelected, setIsNavbarSelected, isHomeSelected, setIsHomeSelected, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logo, setLogo, menuIcon, setMenuIcon, text1, setText1, text2, setText2, text3, setText3, animatedTexts, setAnimatedTexts }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
