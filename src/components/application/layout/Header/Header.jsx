import React from 'react'
import { SlLogout } from "react-icons/sl";
import { LuInspect } from "react-icons/lu";
import { IoMdDesktop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { GrUndo, GrRedo } from "react-icons/gr";
import { useApplicationContext } from '../../../../context/applicationContext';

const Header = () => {
    const { screenSize, setScreenSize } = useApplicationContext()

    return (
        <header style={screenSize === "fullscreen" ? { display: "none" } : {}} className='px-5 py-4  border-b border-gray-300 border-solid flex justify-between items-center'>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Exit" data-tooltip-place="right" data-tooltip-variant="success"
                className='text-sm' href='#'><SlLogout /></a>

            <div className='flex gap-6'>
                <div className='flex gap-4'>
                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Deactivate inspector - Ctrl + Shift" className='text-sm text-blue-800 px-2 bg-gray-300 rounded'><LuInspect /></button>
                    <div className='bg-gray-300 rounded-md flex'>
                        <button onClick={() => setScreenSize("desktop")} data-tooltip-id="my-tooltip" data-tooltip-content="Desktop" className='text-sm px-2 rounded-sm'><IoMdDesktop /></button>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="Mobile" className='text-sm px-2 rounded-sm'><FaMobileAlt /></button>
                        <button onClick={() => setScreenSize("fullscreen")} data-tooltip-id="my-tooltip" data-tooltip-content="Fullscreen" className='text-sm px-2 rounded-sm'><BsArrowsFullscreen /></button>
                    </div>
                    <button><GrUndo /></button>
                    <button><GrRedo /></button>
                </div>


                <div className='flex gap-2'>
                    <button className='text-xs font-bold px-3 py-1 border border-gray-700 border-solid rounded-md'>Publish</button>
                    <button className='text-xs text-white font-bold px-3 py-1 bg-gray-700 border border-gray-700 border-solid rounded-md'>Save</button>
                </div>
            </div>
        </header>
    )
}

export default Header