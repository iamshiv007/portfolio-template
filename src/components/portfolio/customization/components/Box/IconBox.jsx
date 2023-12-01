import React from 'react'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const IconBox = ({ maxSize, icons, icon_, setIcon }) => {
    const { name, icon, size } = icon_

    return (
        <div>
            <p className='py-2'>{name}</p>
            <div className='border border-gray-500  rounded-md'>
                <div className='p-2 border-b border-gray-500  flex gap-1'>
                    {size !== undefined &&
                        <>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === 0} onClick={() => setIcon({ ...icon_, size: size - 1 })}><FaChevronCircleLeft /></button>
                            <button className='text-xs px-2 py-1 bg-gray-300 rounded-md'>{size}</button>
                            <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={size === maxSize} onClick={() => setIcon({ ...icon_, size: size + 1 })}><FaChevronCircleRight /></button>

                        </>}
                </div>
                {icons && <div className='p-2 flex gap-3'>
                    {icons.map((icon__, index) => (
                        <>
                            <div className='flex gap-1' key={index}>
                                <input type='radio' value={index} id={index} name="icon" onChange={() => setIcon({ ...icon_, icon: index })} checked={icon === index} />
                                <label htmlFor={index} className='text-lg'>{icon__}</label>
                            </div>
                        </>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default IconBox