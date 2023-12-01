import React from 'react'

const TextBox = ({ textName, size, setSize, maxSize, weight, setWeight, family, setFamily, text, setText }) => {
    const fontFamilies = ["sans-serif", "serif", "monospace", "cursive", "fantasy"]

    return (
        <div>
            <p className='py-2'>{textName}</p>
            <div className='border border-gray-500  rounded-md'>
                <div className='p-2 border-b border-gray-500  flex gap-1'>
                    {size !== undefined && <button className='text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md' onClick={() => setSize(size !== maxSize ? size + 1 : 0)} >{size}</button>}
                    {weight !== undefined && <button className={`text-xs font-bold px-2 py-1 ${weight === 1 && "bg-gray-400"} bg-gray-300 rounded-md`} onClick={() => setWeight(weight !== 1 ? weight + 1 : 0)}>B</button>}
                    {family !== undefined && <button className={`text-xs px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md`} style={{ fontFamily: fontFamilies[family] }} onClick={() => setFamily(family !== 4 ? family + 1 : 0)}>Font</button>}
                </div>
                {<input type="text" className='text-sm w-full p-2 rounded-md outline-none' onChange={(e) => setText(e.target.value)} value={text} />}
            </div>
        </div>
    )
}

export default TextBox