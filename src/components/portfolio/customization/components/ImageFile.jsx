import React from 'react'

const ImageFile = ({ name, image, setImage }) => {
    const handleFileInput = (e) => {
        const { files } = e.target

        if (files.length > 0) {
            const reader = new FileReader()

            reader.onload = (e) => {
                const result = e.target.result
                setImage({ ...image, image: result })
            }
            reader.readAsDataURL(files[0])
        }
    }

    return (
        <div>
            <p className='text-sm py-2'>{name}</p>
            <input type='file' className='text-sm' onChange={handleFileInput} />
        </div>
    )
}

export default ImageFile