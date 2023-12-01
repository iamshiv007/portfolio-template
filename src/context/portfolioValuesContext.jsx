import { createContext, useContext, useState } from "react";

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

    return (
        <portfolioValuesContext.Provider value={{ isNavbarSelected, setIsNavbarSelected, isHomeSelected, setIsHomeSelected, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logoSize, setLogoSize, logoWeight, setLogoWeight, logoFontFamily, setLogoFontFamily, logoName, setLogoName, menuIconSize, setMenuIconSize, menuIcon, setMenuIcon, }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
