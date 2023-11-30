import { createContext, useContext, useState } from "react";

const portfolioValuesContext = createContext()

export const PortfolioValuesProvider = ({ children }) => {
    const [navPaddingX, setNavPaddingX] = useState(32)
    const [navPaddingY, setNavPaddingY] = useState(48)
    const [logoName, setLogoName] = useState("Mrikon")
    const [logoSize, setLogoSize] = useState(30)
    const [logoColor, setLogoColor] = useState("white")
    const [logoWeight, setLogoWeight] = useState("700")
    const [menuIcon, setMenuIcon] = useState(0)
    const [iconSize, setIconSize] = useState(30)
    const [iconColor, setIconColor] = useState("white")
    const [iconWeight, setIconWeight] = useState("400")

    return (
        <portfolioValuesContext.Provider value={{iconWeight, setIconWeight, iconColor, setIconColor,  setIconSize, iconSize, setMenuIcon, menuIcon, navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logoName, setLogoName, logoSize, setLogoSize, logoColor, setLogoColor, logoWeight, setLogoWeight }}>
            {children}
        </portfolioValuesContext.Provider>
    )
}

export const usePortfolioValues = () => useContext(portfolioValuesContext)
