import React from 'react'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const TextBox = ({ text_, setText, maxSize }) => {
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]
    const { name, text, size, weight } = text_

    const fontWeights = ["font-light", "font-normal", "font-bold"]

    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <div className='border border-gray-500  rounded-md'>
                <div className='p-2 border-b border-gray-500  flex gap-1'>
                    {size !== undefined &&
                        <>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === 0} onClick={() => setText({ ...text_, size: size - 1 })}><FaChevronCircleLeft /></button>
                            <div className='text-xs px-2 py-1 bg-gray-300 rounded-md'>{size}</div>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === maxSize} onClick={() => setText({ ...text_, size: size + 1 })}><FaChevronCircleRight /></button>
                        </>}
                    {weight !== undefined && <button className={`text-xs font-bold px-2 py-1 ${fontWeights[weight]} bg-gray-300 rounded-md`} data-tooltip-id="my-tooltip" data-tooltip-content={fontWeights[weight].split("font-").join("")} onClick={() => setText({ ...text_, weight: weight !== 2 ? weight + 1 : 0 })}>B</button>}
                    {text_?.family !== undefined && <button className={`text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md`} style={{ fontFamily: fontFamilies[text_.family] }} onClick={() => setText({ ...text_, family: text_?.family !== 4 ? text_.family + 1 : 0 })}>Font</button>}
                </div>
                {<input type="text" className='text-sm w-full p-2 rounded-md outline-none' onChange={(e) => setText({ ...text_, text: e.target.value })} value={text} />}
            </div>
        </div>
    )
}

export default TextBox