import React from 'react'
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { useApplicationContext } from '../../../../context/applicationContext';

const EditNavbar = () => {
    const { setIconSize, iconSize, setMenuIcon, menuIcon, navPaddingX, navPaddingY, setNavPaddingX, setNavPaddingY, logoName, logoFontFamily, setLogoFontFamily, logoSize, logoWeight, setLogoName, setLogoSize, setLogoWeight } = usePortfolioValues()
    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]
    const { screenSize } = useApplicationContext()
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]

    return (
        <div style={screenSize === "fullscreen" ? { display: "none" } : {}} className='w-[400px] px-2 py-4 bg-gray-50 border  rounded-md flex flex-col gap-5 overflow-y-scroll'>
            <section>
                <p className='py-2'>Navbar</p>
                <div className='flex flex-col gap-3'>
                    <div className='gap-4'>
                        <p className='text-sm'>Padding X</p>
                        <div className='flex gap-3'>
                            <input value={navPaddingX} onChange={(e) => setNavPaddingX(e.target.value)} step={5} max={60} min={10} type="range" name="" id="" />
                            <p className='text-sm w-fit px-2 py-1 border border-gray-400  rounded-sm' >{navPaddingX} px</p>
                        </div>
                    </div>
                    <div className='gap-4'>
                        <p className='text-sm'>Padding Y</p>
                        <div className='flex gap-3'>
                            <input value={navPaddingY} onChange={(e) => setNavPaddingY(e.target.value)} step={5} max={40} min={10} type="range" name="" id="" />
                            <p className='text-sm w-fit px-2 py-1 border border-gray-400  rounded-sm' >{navPaddingY} px</p>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <p className='py-2'>Name</p>
                <div className='border border-gray-500  rounded-md'>
                    <div className='p-2 border-b border-gray-500  flex gap-1'>
                        <button onClick={() => setLogoSize(logoSize !== 6 ? logoSize + 1 : 0)} className='text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'>{logoSize}</button>
                        <button onClick={() => setLogoWeight(logoWeight !== 1 ? logoWeight + 1 : 0)} className={`text-xs font-bold px-2 py-1 ${logoWeight === 1 ? "bg-gray-400" : ""} bg-gray-300 rounded-md`}>B</button>
                        <button style={{ fontFamily: fontFamilies[logoFontFamily] }} onClick={() => setLogoFontFamily(logoFontFamily !== 4 ? logoFontFamily + 1 : 0)} className={`text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md`}>Font</button>
                    </div>
                    <input value={logoName} onChange={(e) => setLogoName(e.target.value)} className='text-sm w-full p-2 rounded-md outline-none' type="text" />
                </div>
            </section>
            <section>
                <p className='py-1'>Icon</p>
                <div className='border border-gray-500  rounded-md'>
                    <div className='p-2 border-b border-gray-500  flex gap-1'>
                        <button onClick={() => setIconSize(iconSize !== 6 ? iconSize + 1 : 0)} className='text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'>{iconSize}</button>
                    </div>
                    <div className='p-2 flex gap-3'>
                        {icons.map((icon, index) => (
                            <>
                                <div className='flex gap-1'>
                                    <input checked={menuIcon === index} onChange={() => setMenuIcon(index)} type='radio' value={index} id={index} name="icon" />
                                    <label className='text-lg' htmlFor={index}>{icon}</label>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}

export default EditNavbar