import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ButtonBox = ({ button, setButton, maxSize }) => {
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]
    const { name, text, size, weight, radius } = button

    const fontWeights = ["font-light", "font-normal", "font-bold"]

    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <div className='border border-gray-500  rounded-md'>
                <div className='p-2 border-b border-gray-500  flex gap-1'>
                    {size !== undefined &&
                        <>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === 0} onClick={() => setButton({ ...button, size: size - 1 })}><FaChevronCircleLeft /></button>
                            <div className='text-xs px-2 py-1 bg-gray-300 rounded-md'>{size}</div>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === maxSize} onClick={() => setButton({ ...button, size: size + 1 })}><FaChevronCircleRight /></button>
                        </>}
                    {weight !== undefined && <button className={`text-xs font-bold px-2 py-1 ${fontWeights[weight]} bg-gray-300 rounded-md`} data-tooltip-id="my-tooltip" data-tooltip-content={fontWeights[weight].split("font-").join("")} onClick={() => setButton({ ...button, weight: weight !== 2 ? weight + 1 : 0 })}>B</button>}
                    {button?.family !== undefined && <button className={`text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md`} style={{ fontFamily: fontFamilies[button.family] }} onClick={() => setButton({ ...button, family: button?.family !== 4 ? button.family + 1 : 0 })}>Font</button>}
                    {radius !== undefined && <button className={`text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md`} onClick={() => setButton({ ...button, radius: radius !== 2 ? radius + 1 : 0 })}>R{radius}</button>}
                </div>
                {<input type="text" className='text-sm w-full p-2 rounded-md outline-none' onChange={(e) => setButton({ ...button, text: e.target.value })} value={text} />}
            </div>
        </div>
    )
}

export default ButtonBox