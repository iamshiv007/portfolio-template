import React from "react"
import { usePortfolioValues } from "../../../../context/portfolioValuesContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    const { iconWeight, iconColor, iconSize, menuIcon, navPaddingX, navPaddingY, logoName, logoSize, logoColor, logoWeight } = usePortfolioValues()

    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]

    return (
        <>
            <navbar style={{ padding: `${navPaddingY}px ${navPaddingX}px` }} className="bg-transparent flex justify-between absolute top-0 left-0 right-0 z-10">
                <a style={{ fontSize: `${logoSize}px`, color: logoColor, fontWeight: logoWeight }} href="#" className="text-3xl text-white font-bold">{logoName}</a>
                <button style={{ fontSize: `${iconSize}px`, color: iconColor, fontWeight: iconWeight }} className="text-3xl text-white">{icons[menuIcon]}</button>
            </navbar>
        </>
    )
}

export default Navbar