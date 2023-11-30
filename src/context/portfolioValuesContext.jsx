import { createContext, useContext, useState } from "react";

const portfolioValuesContext = createContext()

export const PortfolioValuesProvider = ({ children }) => {
    const [navPaddingX, setNavPaddingX] = useState(45)
    const [navPaddingY, setNavPaddingY] = useState(30)
    const [logoName, setLogoName] = useState("Mrikon")
    const [logoSize, setLogoSize] = useState(4)
    const [logoFontFamily, setLogoFontFamily] = useState(0)
    const [logoWeight, setLogoWeight] = useState(1)
    const [menuIcon, setMenuIcon] = useState(0)
    const [iconSize, setIconSize] = useState(5)

    return (
        <portfolioValuesContext.Provider value={{ logoFontFamily, setLogoFontFamily, setIconSize, iconSize, setMenuIcon, menuIcon, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logoName, setLogoName, logoSize, setLogoSize, logoWeight, setLogoWeight }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
