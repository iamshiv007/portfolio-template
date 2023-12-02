import React from 'react'

const RangeInput = ({ name, step, min, max, value, setValue }) => {
    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <div className='flex gap-3'>
                <input type="range" step={step} min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} />
                <p className='text-sm w-fit px-2 py-1 border border-gray-400  rounded-sm' >{value} px</p>
            </div>
        </div>
    )
}

export default RangeInput