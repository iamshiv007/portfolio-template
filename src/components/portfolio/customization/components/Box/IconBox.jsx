import React from 'react'

const IconBox = ({ textName, size, setSize, maxSize, icons, icon, setIcon }) => {
    return (
        <div>
            <p className='py-2'>{textName}</p>
            <div className='border border-gray-500  rounded-md'>
                <div className='p-2 border-b border-gray-500  flex gap-1'>
                    {size !== undefined && <button className='text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md' onClick={() => setSize(size !== maxSize ? size + 1 : 0)} >{size}</button>}
                </div>
                {icons && <div className='p-2 flex gap-3'>
                    {icons.map((icon_, index) => (
                        <>
                            <div className='flex gap-1'>
                                <input type='radio' value={index} id={index} name="icon" onChange={() => setIcon(index)} checked={icon === index} />
                                <label htmlFor={index} className='text-lg'>{icon_}</label>
                            </div>
                        </>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default IconBox