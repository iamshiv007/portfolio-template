import React from 'react'
import { FaCaretSquareUp, FaCaretSquareDown, FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

const PositionSet = ({ name, value, setValue, maxBottom, maxRight }) => {

    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <div className='flex flex-col gap-1 items-center'>
                <button className='text-gray-500 hover:text-gray-600 disabled:text-gray-400' onClick={() => setValue({ ...value, bottom: value.bottom + 10 })} disabled={value.bottom === maxBottom}><FaCaretSquareUp /></button>
                <div className='flex gap-1'>
                    <button className='text-gray-500 hover:text-gray-600 disabled:text-gray-400' onClick={() => setValue({ ...value, right: value.right + 10 })} disabled={value.right === maxRight}><FaCaretSquareLeft /></button>
                    <p className='px-1 w-5 h-5 bg-gray-500 rounded' />
                    <button className='text-gray-500 hover:text-gray-600 disabled:text-gray-400' onClick={() => setValue({ ...value, right: value.right - 10 })} disabled={value.right === -maxBottom}><FaCaretSquareRight /></button>
                </div>
                <button className='text-gray-500 hover:text-gray-600 disabled:text-gray-400' onClick={() => setValue({ ...value, bottom: value.bottom - 10 })} disabled={value.bottom === -maxBottom}><FaCaretSquareDown /></button>
            </div>
        </div>
    )
}

export default PositionSet