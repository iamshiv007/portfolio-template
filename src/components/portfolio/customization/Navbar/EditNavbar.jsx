import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import { useApplicationContext } from '../../../../context/applicationContext';
import TextBox from '../components/Box/TextBox';
import IconBox from '../components/Box/IconBox';

const EditNavbar = () => {
    const { navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logo, setLogo, menuIcon, setMenuIcon } = usePortfolioValues()
    const { screenSize } = useApplicationContext()

    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]

    return (
        <div className={`w-[400px] px-2 py-4 bg-gray-50 border  rounded-md ${screenSize === "fullscreen" && "hidden"} flex flex-col gap-5 overflow-y-scroll`}>
            <section>
                <p className='py-2'>Navbar</p>
                <div className='flex flex-col gap-3'>
                    <div className='gap-4'>
                        <p className='text-sm'>Padding X</p>
                        <div className='flex gap-3'>
                            <input type="range" step={5} max={60} min={10} onChange={(e) => setNavPaddingX(e.target.value)} value={navPaddingX} />
                            <p className='text-sm w-fit px-2 py-1 border border-gray-400  rounded-sm' >{navPaddingX} px</p>
                        </div>
                    </div>
                    <div className='gap-4'>
                        <p className='text-sm'>Padding Y</p>
                        <div className='flex gap-3'>
                            <input type="range" step={5} max={40} min={10} onChange={(e) => setNavPaddingY(e.target.value)} value={navPaddingY} />
                            <p className='text-sm w-fit px-2 py-1 border border-gray-400  rounded-sm' >{navPaddingY} px</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <TextBox text_={logo} setText={setLogo} maxSize={6} />
            </section>

            <section>
                <IconBox maxSize={6} icons={icons} icon_={menuIcon} setIcon={setMenuIcon} />
            </section>
        </div >
    )
}

export default EditNavbar