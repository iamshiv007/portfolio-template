import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5"

const ArrayData = ({ name, array, setArray, placeholder, limit }) => {
    const [selectedText, setSelectedText] = useState("");

    const handleAddBtn = () => {
        if (selectedText === "") return
        if (array.length === limit) {
            return alert("Limit Exeed: Only 5")
        }
        setArray((pre) => [...pre, selectedText])
        setSelectedText("")
        localStorage.setItem("animatedTexts", JSON.stringify([...array, selectedText]))
    }

    const handleCrossBtn = (text) => {
        const textDeleted = array.filter((text_) => text_ !== text)
        setArray(textDeleted)
        localStorage.setItem("animatedTexts", JSON.stringify(textDeleted))
    }
    return (
        <div>
            <p className='py-2'>{name}</p>
            <div className='flex gap-2 justify-between'>
                <input type="text" placeholder={placeholder} className='text-sm w-full p-2 border border-gray-400 rounded-md outline-none' onChange={(e) => setSelectedText(e.target.value)} value={selectedText} />
                <button className='text-sm text-white py-1 px-2 bg-blue-500 hover:bg-blue-600 rounded' onClick={handleAddBtn}>Add</button>
            </div>
            <div className='mt-2 flex gap-1 flex-wrap'>
                {array.map((text, index) =>
                    <div key={index} className='px-1 bg-blue-500 rounded flex gap-1 items-center'>
                        <p className='text-xs text-white'>{text}</p>
                        <button className='text-blue-800 hover:text-blue-900' onClick={() => handleCrossBtn(text)}><IoCloseCircleSharp /></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArrayData