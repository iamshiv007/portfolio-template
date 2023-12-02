import { createContext, useContext, useState } from "react";
import boy2 from "../assets/boy2.png"

const portfolioValuesContext = createContext()

export const PortfolioValuesProvider = ({ children }) => {
    const [colorTheme, setColorTheme] = useState({ light: "#CE9076", dark: "#312722" });
    const [portfolioFont, setPortfolioFont] = useState(0);
    const [isNavbarSelected, setIsNavbarSelected] = useState(false)
    const [isHomeSelected, setIsHomeSelected] = useState(false);
    const [navPaddingX, setNavPaddingX] = useState(45)
    const [navPaddingY, setNavPaddingY] = useState(30)
    const [logo, setLogo] = useState({ name: "Logo", text: "Mrikon", size: 5, weight: 2, family: 0 })
    const [menuIcon, setMenuIcon] = useState({ name: "Menu Icon", icon: 0, size: 6 })
    const [gap1, setGap1] = useState(30);
    const [paddingX1, setPaddingX1] = useState(140);
    const [image1, setImage1] = useState({ image: boy2, bottom: 0, right: 0, width: 420 });
    const [text1, setText1] = useState({ name: "Greeting", text: "Hello,", size: 6, weight: 1 });
    const [text2, setText2] = useState({ name: "Intro", text: "I'm Mrikon Roth,", size: 9, weight: 2 });
    const [text3, setText3] = useState({ name: "What you do", text: "I am a", size: 4, weight: 1 });
    const [animatedTexts, setAnimatedTexts] = useState(JSON.parse(localStorage.getItem("animatedTexts"))?.length === 0 || JSON.parse(localStorage.getItem("animatedTexts")) === null ? ["Web developer", "React developer"] : JSON.parse(localStorage.getItem("animatedTexts")));
    const [button1, setButton1] = useState({ name: "Button", text: "CONTACT US", size: 1, weight: 2, radius: 1 });

    return (
        <portfolioValuesContext.Provider value={{ colorTheme, setColorTheme, portfolioFont, setPortfolioFont, isNavbarSelected, setIsNavbarSelected, isHomeSelected, setIsHomeSelected, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logo, setLogo, menuIcon, setMenuIcon, gap1, setGap1, paddingX1, setPaddingX1, image1, setImage1, text1, setText1, text2, setText2, text3, setText3, animatedTexts, setAnimatedTexts, button1, setButton1 }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
