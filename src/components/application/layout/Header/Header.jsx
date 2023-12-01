import React from 'react'
import { SlLogout } from "react-icons/sl";
import { LuInspect } from "react-icons/lu";
import { IoMdDesktop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { GrUndo, GrRedo } from "react-icons/gr";
import { useApplicationContext } from '../../../../context/applicationContext';
import { usePortfolioValues } from '../../../../context/portfolioValuesContext';

const Header = () => {
    const { screenSize, setScreenSize } = useApplicationContext()
    const { setIsNavbarSelected } = usePortfolioValues()

    const handleFullscreenBtn = () => {
        setScreenSize("fullscreen")
        setIsNavbarSelected(false)
    }

    return (
        <>
            {/* Esc to fullscreen */}
            <button className={`text-white px-4 py-2 bg-gray-600 bg-opacity-70 border border-gray-500  rounded ${screenSize !== "fullscreen" && "hidden"} absolute top-8 left-8 z-40`} onClick={() => setScreenSize("desktop")} >
                Esc
            </button>
            <header className={`px-5 py-4  border-b border-gray-300 ${screenSize === "fullscreen" && "hidden"}  flex justify-between items-center`}>
                <a className='text-sm' href='#' data-tooltip-id="my-tooltip" data-tooltip-content="Exit" data-tooltip-place="right"><SlLogout /></a>

                <div className='flex gap-6'>
                    <div className='flex gap-4'>
                        <button className='text-sm text-blue-800 px-2 bg-gray-300 rounded' data-tooltip-id="my-tooltip" data-tooltip-content="Deactivate inspector - Ctrl + Shift"><LuInspect /></button>

                        <div className='bg-gray-300 rounded-md flex'>
                            <button className='text-sm px-2 rounded-sm' onClick={() => setScreenSize("desktop")} data-tooltip-id="my-tooltip" data-tooltip-content="Desktop"><IoMdDesktop /></button>
                            <button className='text-sm px-2 rounded-sm' data-tooltip-id="my-tooltip" data-tooltip-content="Mobile"><FaMobileAlt /></button>
                            <button className='text-sm px-2 rounded-sm' onClick={handleFullscreenBtn} data-tooltip-id="my-tooltip" data-tooltip-content="Fullscreen - Ctrl + Up"><BsArrowsFullscreen /></button>
                        </div>

                        <button><GrUndo /></button>
                        <button><GrRedo /></button>
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-xs font-bold px-3 py-1 border border-gray-700  rounded-md'>Publish</button>
                        <button className='text-xs text-white font-bold px-3 py-1 bg-gray-700 border border-gray-700  rounded-md'>Save</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header