import { createContext, useContext, useState } from "react";


const applicationContext = createContext()

export const ApplicationContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState("desktop")

    return (
        <applicationContext.Provider value={{ screenSize, setScreenSize }}>{children}</applicationContext.Provider>
    )
}

export const useApplicationContext = () => useContext(applicationContext)
