import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import { useApplicationContext } from '../../../../context/applicationContext';
import TextBox from '../components/Box/TextBox';
import IconBox from '../components/Box/IconBox';
import RangeInput from '../components/RangeInput';

const EditNavbar = () => {
    const { navPaddingX, setNavPaddingX, navPaddingY, setNavPaddingY, logo, setLogo, menuIcon, setMenuIcon } = usePortfolioValues()
    const { screenSize } = useApplicationContext()

    const icons = [<RxHamburgerMenu />, <CiMenuFries />, <GiHamburgerMenu />, <CgMenuGridO />]

    return (
        <div className={`w-[400px] px-2 py-4 bg-gray-50 border  rounded-md ${screenSize === "fullscreen" && "hidden"} flex flex-col gap-5 overflow-y-scroll`}>
            <p className='text-center font-bold p-2'>Navbar Customization</p>
            <section>
                <RangeInput name="Padding X" step={5} min={10} max={60} value={navPaddingX} setValue={setNavPaddingX} />
            </section>
            <section>
                <RangeInput name="Padding Y" step={5} min={10} max={40} value={navPaddingY} setValue={setNavPaddingY} />
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