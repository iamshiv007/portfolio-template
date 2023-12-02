import React from 'react'
import { FaChevronCircleUp, FaChevronCircleDown, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const PositionSet = ({ name, value, setValue, maxBottom, maxRight }) => {

    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <div className='flex flex-col gap-1 items-center'>
                <button className='text-gray-500 disabled:text-gray-400' onClick={() => setValue({ ...value, bottom: value.bottom + 10 })} disabled={value.bottom === maxBottom}><FaChevronCircleUp /></button>
                <div className='flex gap-1'>
                    <button className='text-gray-500 disabled:text-gray-400' onClick={() => setValue({ ...value, right: value.right + 10 })} disabled={value.right === maxRight}><FaChevronCircleLeft /></button>
                    <p className='px-1 border border-gray-500 rounded'>XX</p>
                    <button className='text-gray-500 disabled:text-gray-400' onClick={() => setValue({ ...value, right: value.right - 10 })} disabled={value.right === -maxBottom}><FaChevronCircleRight /></button>
                </div>
                <button className='text-gray-500 disabled:text-gray-400' onClick={() => setValue({ ...value, bottom: value.bottom - 10 })} disabled={value.bottom === -maxBottom}><FaChevronCircleDown /></button>
            </div>
        </div>
    )
}

export default PositionSet