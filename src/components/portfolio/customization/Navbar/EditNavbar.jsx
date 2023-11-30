import React from 'react'
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { useApplicationContext } from '../../../../context/applicationContext';

const EditNavbar = () => {
    const { iconWeight, setIconWeight, iconColor, setIconColor, setIconSize, iconSize, setMenuIcon, menuIcon, navPaddingX, navPaddingY, setNavPaddingX, setNavPaddingY, logoName, logoColor, logoSize, logoWeight, setLogoName, setLogoColor, setLogoSize, setLogoWeight } = usePortfolioValues()
    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]
    const { screenSize } = useApplicationContext()

    return (
        <div style={screenSize === "fullscreen" ? { display: "none" } : {}} className='w-[300px] px-2 py-4 bg-gray-50 border border-solid rounded-md flex flex-col gap-5 overflow-y-scroll'>
            <section>
                <p className='text-xl p-2'>Style Navbar</p>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <p className='p-2'>Padding X</p> <input className='w-20 p-2 border border-gray-400 border-solid' value={navPaddingX} onChange={(e) => setNavPaddingX(e.target.value)} type="number" name="navPaddingX" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Padding Y</p> <input className='w-20 p-2 border border-gray-400 border-solid' value={navPaddingY} onChange={(e) => setNavPaddingY(e.target.value)} type="number" name="navPaddingY" id="" />
                    </div>
                </div>
            </section >
            <section>
                <p className='text-xl p-2'>Style Brand Name</p>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <p className='p-2'>Name</p><input value={logoName} onChange={(e) => setLogoName(e.target.value)} className='border border-gray-400 border-solid p-2 w-20' type="text" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Color</p><input value={logoColor} onChange={(e) => setLogoColor(e.target.value)} className='border border-gray-400 border-solid p-2 w-20' type="color" name="" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Size</p><input value={logoSize} onChange={(e) => setLogoSize(e.target.value)} className='border border-gray-400 border-solid p-2 w-20' type="number" name="" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Weight</p><select value={logoWeight} onChange={(e) => setLogoWeight(e.target.value)} className='border border-gray-400 border-solid p-2 w-20' type="Number">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                            <option value="900">900</option>
                            <option value="300">Light</option>
                            <option value="400">Normal</option>
                            <option value="700">Bold</option>
                            <option value="800">Bolder</option>
                        </select>
                    </div>
                </div>
            </section>
            <section>
                <p className='ext-xl p-2'>Style Menu Icon</p>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <p className='p-2'>Menu Icon</p><select value={menuIcon} onChange={(e) => setMenuIcon(e.target.value)} className='w-20 p-2 border border-gray-400 border-solid' type="Number">
                            {icons.map((icon, index) => (<option value={index}>{icon}</option>))}
                        </select>
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Color</p><input value={iconColor} onChange={(e) => setIconColor(e.target.value)} className='w-20 p-2 border border-gray-400 border-solid' type="color" name="" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Size</p><input value={iconSize} onChange={(e) => setIconSize(e.target.value)} className='w-20 p-2 border border-gray-400 border-solid' type="number" name="" id="" />
                    </div>
                    <div className='flex gap-4'>
                        <p className='p-2'>Weight</p><select value={iconWeight} onChange={(e) => setIconWeight(e.target.value)} className='w-20 p-2 border border-gray-400 border-solid' type="Number">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                            <option value="900">900</option>
                            <option value="300">Light</option>
                            <option value="400">Normal</option>
                            <option value="700">Bold</option>
                            <option value="800">Bolder</option>
                        </select>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default EditNavbar