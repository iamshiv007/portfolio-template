import React from 'react'
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'

const ThemeBtn = ({ light, dark }) => {
    const { colorTheme, setColorTheme } = usePortfolioValues()

    return (
        <div className={`h-fit ${colorTheme.light === light ? 'border' : ""} border-gray-600 rounded-full flex`}>
            <button className={`${colorTheme.light === light ? "border-2" : ""} border-gray-200 h-8 w-8 rounded-full`} style={{ background: `linear-gradient(to top, ${dark} 50%, ${light} 50%)` }} onClick={() => setColorTheme({ light, dark })} />
        </div>
    )
}

export default ThemeBtn