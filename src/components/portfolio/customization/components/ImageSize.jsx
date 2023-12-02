import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const ImageSize = ({ name, image, setImage, maxSize, minSize }) => {
    return (
        <div>
            <p className='text-sm py-2'>{name}</p>

            <div className='flex gap-1'>
                <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={image.width === minSize} onClick={() => setImage({ ...image, width: image.width - 10 })}><FaChevronCircleLeft /></button>
                <div className='text-xs px-2 py-1 bg-gray-300 rounded-md'>{image.width}</div>
                <button className='text-gray-300 hover:text-gray-400 disabled:text-gray-200' disabled={image.width === maxSize} onClick={() => setImage({ ...image, width: image.width + 10 })}><FaChevronCircleRight /></button>
            </div>
        </div>
    )
}

export default ImageSize